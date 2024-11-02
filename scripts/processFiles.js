import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

import uploadToR2 from "./uploadToR2.js";
import insertIntoSupabase from "./insertIntoSupabase.js";
import handleImages from "./handleImages.js";

const homeDir = process.env.HOME;
const filePath = path.join(homeDir, "changed_files.txt");

const changedFiles = fs
  .readFileSync(filePath, "utf-8")
  .split("\n")
  .filter((f) => f.trim());

async function processFiles() {
  for (const file of changedFiles) {
    if (file.endsWith(".md")) {
      try {
        let fileContent = fs.readFileSync(file, "utf-8");
        const frontmatter = matter(fileContent).data;
        const stats = readingTime(fileContent);
        const blogid = frontmatter.blogid;
        const blogType = frontmatter.type;
        const title = frontmatter.title;
        const tags = frontmatter.tags.split(",");

        // call handleImages
        fileContent = handleImages(fileContent);

        const formattedFilename = `${blogid}_${file.substring(
          file.lastIndexOf("/") + 1
        )}`;

        console.log(`Processing file: ${file}`);
        console.log(`Stats: ${stats.words}`);

        await uploadToR2(formattedFilename, fileContent);

        await insertIntoSupabase(
          formattedFilename,
          tags,
          stats.words.total,
          blogid,
          blogType,
          title
        );
      } catch (error) {
        console.error(`Error processing file: ${file}`, error);
      }
    }
  }
}

processFiles();
