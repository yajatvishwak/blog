import { describe, it, expect } from "vitest";
import path from "path";
import checkBlogFiles from "../checkblogfiles.js";

describe("checkBlogFiles", () => {
  it("checking blog ids and dates", () => {
    const blogDirectoryPath = path.join(__dirname, "..", "upload", "blogs");
    const result = checkBlogFiles(blogDirectoryPath);
    expect(result).toBe("Blog ID and date checks completed.");
  });
});
