import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
config();
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function insertToSupabase(filename, tags, words, blogid, blogType) {
  const { data, error } = await supabase
    .from("blogs")
    .select()
    .eq("blog_id", blogid);
  if (error) throw error;
  let blog = data.at(0);
  console.log("Trying to find the blog: ", blog);
  if (blog && blog.blog_id) {
    await updateBlog(blog, blogid, words, filename, blogType);
  } else {
    await insertBlog(blogid, words, filename, blogType);
  }

  const tagIds = await insertUniqueTags(tags);
  await linkBlogTags(blogid, tagIds);
}

async function insertUniqueTags(tags) {
  try {
    const { data: existingTagsData, error: selectError } = await supabase
      .from("tags")
      .select("id, tag_name")
      .in("tag_name", tags);

    if (selectError) {
      throw selectError;
    }

    const existingTags = existingTagsData.reduce((acc, tag) => {
      acc[tag.tag_name] = tag.id;
      return acc;
    }, {});

    const newTags = tags.filter((tag) => !existingTags.hasOwnProperty(tag));

    // Insert only new tags
    if (newTags.length > 0) {
      const { data: insertedTags, error: insertError } = await supabase
        .from("tags")
        .insert(newTags.map((tag) => ({ tag_name: tag })))
        .select("id");

      if (insertError) {
        throw insertError;
      }

      console.log("New tags inserted:", newTags);
      // Add new tags to existingTags
      insertedTags.forEach((tag) => {
        existingTags[tag.tag_name] = tag.id;
      });
    } else {
      console.log("All tags already exist. No new tags added.");
    }

    return Object.values(existingTags); // Return all tag IDs
  } catch (error) {
    console.error("Error inserting tags:", error.message);
  }
}

async function insertBlog(blogid, words, filename, blogType) {
  const { error } = await supabase.from("blogs").insert({
    blog_id: blogid,
    words: words,
    object_link: `https://files.yajatvishwakarma.com/${filename}`,
    type: blogType,
  });
  if (error) throw error;
  console.log(
    `Insert Complete : ${blogid}(${filename.substring(
      filename.lastIndexOf("_")
    )})`
  );
}

async function updateBlog(blog, blogid, words, filename, blogType) {
  blog.object_link = `https://files.yajatvishwakarma.com/${filename}`;
  blog.words = words;
  blog.type = blogType;
  const { error } = await supabase
    .from("blogs")
    .update(blog)
    .eq("blog_id", blogid);
  if (error) throw error;
  console.log(
    `Update Complete : ${blogid}(${filename.substring(
      filename.lastIndexOf("_")
    )})`
  );
}

async function linkBlogTags(blogid, tagIds) {
  try {
    // Check existing links
    const { data: existingLinks, error: selectError } = await supabase
      .from("join_blog_tag")
      .select("tag_id")
      .eq("blog_id", blogid)
      .in("tag_id", tagIds);

    if (selectError) {
      throw selectError;
    }

    const existingTagIds = new Set(existingLinks.map((link) => link.tag_id));
    const newLinks = tagIds.filter((tagId) => !existingTagIds.has(tagId));

    // Prepare entries for new links
    const joinEntries = newLinks.map((tagId) => ({
      blog_id: blogid,
      tag_id: tagId,
    }));

    if (joinEntries.length > 0) {
      const { error } = await supabase
        .from("join_blog_tag")
        .insert(joinEntries);

      if (error) {
        throw error;
      }
      console.log("Blog tags linked successfully:", joinEntries);
    } else {
      console.log("All links already exist. No new links added.");
    }
  } catch (error) {
    console.error("Error linking blog and tags:", error.message);
  }
}

export default insertToSupabase;
// insertToSupabase("some.png", ["jugaad"], 20, "test69", "learnings");
