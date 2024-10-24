const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

// Path to changed_files.txt (assuming it's stored in the $HOME or workspace directory)
const homeDir = process.env.HOME || process.env.USERPROFILE; // Handles Linux/Windows
const filePath = path.join(homeDir, "changed_files.txt");
console.log("the home  is", process.env.HOME);
console.log("the process env is", process.env);
// Read the changed_files.txt to get the list of changed files
const changedFiles = fs
  .readFileSync(filePath, "utf-8")
  .split("\n")
  .filter((f) => f.trim());

async function processFiles() {
  for (const file of changedFiles) {
    if (file.endsWith(".md")) {
      try {
        const fileContent = fs.readFileSync(file, "utf-8");
        const frontmatter = matter(fileContent).data;

        console.log(`Processing file: ${file}`);
        console.log(`Frontmatter:`, frontmatter);

        // Save or pass frontmatter for later upserting into Supabase
        // Save content for Cloudflare R2 upload
        // This can be stored in a temporary file or in memory
      } catch (error) {
        console.error(`Error processing file: ${file}`, error);
      }
    }
  }
}

processFiles();
