import fs from "fs";
import path from "path";
import matter from "gray-matter";

const allowedTypes = ["learnings", "experiences"];

// Helper function to check if a date is in dd/mm/yyyy format
const isValidDate = (date) => {
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  return dateRegex.test(date);
};

// Helper function to check if blogid is URL-safe
const isUrlSafe = (id) => {
  const urlSafeRegex = /^[a-zA-Z0-9-_]+$/;
  return urlSafeRegex.test(id);
};

// Helper function to check if tags are in a valid format
const isValidTags = (tags) => {
  // Tags can be a single tag or a comma-separated list of tags
  const tagsRegex = /^([a-zA-Z0-9-_]+)(,[a-zA-Z0-9-_]+)*$/;
  return tagsRegex.test(tags);
};

// Main function to traverse files and check blogids, dates, and tags
const checkBlogFiles = (dirPath) => {
  const blogIds = new Set();
  const markdownFiles = [];

  // Recursively find markdown files
  const traverseDir = (dir) => {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        traverseDir(filePath);
      } else if (path.extname(filePath) === ".md") {
        markdownFiles.push(filePath);
      }
    });
  };

  traverseDir(dirPath);

  const errors = [];

  markdownFiles.forEach((file) => {
    const fileContent = fs.readFileSync(file, "utf-8");

    // Use gray-matter to parse the front matter
    const { data } = matter(fileContent);

    const blogId = data?.blogid;
    const date = data?.date;
    const tags = data?.tags;
    const type = data?.type;
    const title = data?.title;

    if (!blogId || !date || !tags || !title) {
      errors.push(
        `- Error: blogid, date, title, or tags not found in file: ${file}`
      );
      return;
    }

    // Check if blogid is unique
    if (blogIds.has(blogId)) {
      errors.push(
        `- Error: Duplicate blogid "${blogId}" found in file: ${file}`
      );
    } else {
      blogIds.add(blogId);
    }

    // Check if the blogid is URL-safe
    if (!isUrlSafe(blogId)) {
      errors.push(
        `- Error: Invalid blogid "${blogId}" in file: ${file}. Blogid should only contain alphanumeric characters, dashes (-), and underscores (_).`
      );
    }

    // Check if the date is valid
    if (!isValidDate(date)) {
      errors.push(
        `- Error: Invalid date format in file: ${file}. Found: ${date}`
      );
    }

    // Check if the tags field exists and is in a valid format
    if (!isValidTags(tags)) {
      errors.push(
        `- Error: Invalid tags format in file: ${file}. Tags should be a single tag or a comma-separated list of tags.`
      );
    }

    // Check if type is either "learnings" or "experience"
    if (!allowedTypes.includes(type)) {
      errors.push(
        `- Error: Invalid type "${type}" in file: ${file}. Type should be either "learnings" or "experience".`
      );
    }
  });

  if (errors.length > 0) {
    return `Blog ID, date, and tags checks completed with the following issues:\n\n${errors.join(
      "\n"
    )}`;
  }

  return true;
};

export default checkBlogFiles;
