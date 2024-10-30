import { describe, it, expect } from "vitest";
import path from "path";
import checkBlogFiles from "../scripts/checkblogfiles.js";
import fs from "fs";

describe("checkBlogFiles", () => {
  it("checking blog ids, dates, tags", () => {
    const blogDirectoryPath = path.join(__dirname, "..", "upload", "blogs");
    const result = checkBlogFiles(blogDirectoryPath);
    expect(result).toBe(true);
  });
  it("checks for existence of purpose.md and whatsnew.md files", () => {
    const uploadDirectoryPath = path.join(__dirname, "..", "upload");

    const purposeFileExists = fs.existsSync(
      path.join(uploadDirectoryPath, "purpose.md")
    );
    const whatsNewFileExists = fs.existsSync(
      path.join(uploadDirectoryPath, "whatsnew.md")
    );

    expect(purposeFileExists).toBe(true);
    expect(whatsNewFileExists).toBe(true);
  });
});
