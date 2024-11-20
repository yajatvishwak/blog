import axios from "axios";
import { BACKEND_API } from "$env/static/private";

import { joinUrls } from "../../../lib/utils/joinUrl.js";
import { error } from "@sveltejs/kit";
export const load = async ({ params }) => {
  const { blogId } = params;
  const { data, status } = await axios
    .get(joinUrls(BACKEND_API, `/get-blog/${blogId}`))
    .catch((_) => {
      error(404, {
        message: "not found",
      });
    });
  if (status === 200) {
    let { blog } = data;
    blog = blog[0];
    //console.log(blog);
    const { data : blogText } = await axios.get(blog.object_link).catch(() => {
      error(404, { message: "not found" });
    });
    

    return {
      blogId: blogId,
      blogTitle: blog.blog_title,
      words: blog.words,
      tags: blog.tags,
      date: blog.created_at,
      objectLink: blog.object_link,
      blogText
    };
  }
};
