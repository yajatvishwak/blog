const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

// Helper function to check if a date is in dd/mm/yyyy format
const isValidDate = (date) => {
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  return dateRegex.test(date);
};

// Main function to traverse files and check blogids and dates
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

    if (!blogId || !date) {
      errors.push(`- Error: blogid or date not found in file: ${file}`);
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

    // Check if the date is valid
    if (!isValidDate(date)) {
      errors.push(
        `- Error: Invalid date format in file: ${file}. Found: ${date}`
      );
    }
  });

  if (errors.length > 0) {
    return `Blog ID and date checks completed with the following issues:\n\n${errors.join(
      "\n"
    )}`;
  }

  return "Blog ID and date checks completed.";
};

module.exports = checkBlogFiles;
