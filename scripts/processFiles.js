import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

import uploadToR2 from "./uploadToR2.js";
import insertIntoSupabase from "./insertIntoSupabase.js";
import handleImages from "./handleImages.js";

const homeDir = process.env.HOME;
const filePath = path.join(homeDir, "changed_files.txt");

// Read and filter changed files
const changedFiles = fs
  .readFileSync(filePath, "utf-8")
  .split("\n")
  .filter((f) => f.trim());

async function uploadWhatsnewOrPurpose() {
  const purposeFilePath = path.join(process.cwd(), "upload", "purpose.md");
  const whatsnewFilePath = path.join(process.cwd(), "upload", "whatsnew.md");
  try {
    const purposefileContent = fs.readFileSync(purposeFilePath, "utf-8");
    const whatsnewfileContent = fs.readFileSync(whatsnewFilePath, "utf-8");

    console.log(
      `Processing purpose.md & whatsnew.md file: ${purposeFilePath} & ${whatsnewFilePath}`
    );

    await uploadToR2("purpose.md", purposefileContent);
    await uploadToR2("whatsnew.md", whatsnewfileContent);

    console.log("purpose.md & whatsnew.md has been uploaded successfully.");
  } catch (error) {
    console.error(
      `Error processing purpose.md or whatsnew.md: ${purposeFilePath}`,
      error
    );
  }
}

async function processFiles() {
  for (const file of changedFiles) {
    if (file.endsWith(".md")) {
      try {
        if (file.includes("purpose.md") || file.includes("whatsnew.md")) {
          await uploadWhatsnewOrPurpose();
        } else {
          let fileContent = fs.readFileSync(file, "utf-8");
          const frontmatter = matter(fileContent).data;
          const stats = readingTime(fileContent);
          const blogid = frontmatter.blogid;
          const blogType = frontmatter.type;
          const title = frontmatter.title;
          const tags = frontmatter.tags.split(",");

          // Handle images within the content
          fileContent = handleImages(fileContent);

          const formattedFilename = `${blogid}_${path.basename(file)}`;

          console.log(`Processing file: ${file}`);
          console.log(`Stats: ${stats.words}`);

          await uploadToR2(formattedFilename, fileContent);

          await insertIntoSupabase(
            formattedFilename,
            tags,
            stats.words,
            blogid,
            blogType,
            title
          );
        }
      } catch (error) {
        console.error(`Error processing file: ${file}`, error);
      }
    }
  }
}

processFiles();
