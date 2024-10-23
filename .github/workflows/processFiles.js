const fs = require("fs");
const matter = require("gray-matter");

const changedFiles = process.env.changed_files
  .split("\n")
  .filter((f) => f.trim());

async function processFiles() {
  for (const file of changedFiles) {
    if (file.endsWith(".md")) {
      const fileContent = fs.readFileSync(file, "utf-8");
      const frontmatter = matter(fileContent).data;
      console.log(`Processing file: ${file}`);
      console.log(`Frontmatter:`, frontmatter);

      // Save or pass frontmatter for later upserting into Supabase
      // Save content for Cloudflare R2 upload
      // This can be stored in a temporary file or in memory
    }
  }
}

processFiles();
