import { describe, it, expect } from "vitest";
import path from "path";
import checkBlogFiles from "../scripts/checkblogfiles.js";

describe("checkBlogFiles", () => {
  it("checking blog ids, dates, tags", () => {
    const blogDirectoryPath = path.join(__dirname, "..", "upload", "blogs");
    const result = checkBlogFiles(blogDirectoryPath);
    expect(result).toBe(true);
  });
});
