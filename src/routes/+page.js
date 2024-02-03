import fs from "fs";
import path from "path";

async function getBlogs() {
  const blogs = [];
  const blogModules = await import.meta.glob("../blogs/**/*.md");

  for (const modulePath in blogModules) {
    const blog = await blogModules[modulePath]();
    blogs.push(blog.metadata);
  }
  return blogs;
}

export const load = async ({ params }) => {
  const blogs = await getBlogs();
  return {
    blogs,
  };
};
