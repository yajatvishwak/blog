import { expect, test } from "vitest";
import path from "path";

test("filename and blogid(frontmatter) should be the same", async () => {
  const blogModules = import.meta.glob("../blogs/**/*.md");

  for (const modulePath in blogModules) {
    const blog = await blogModules[modulePath]();
    const filename = path.basename(modulePath, path.extname(modulePath));
    expect(blog.metadata.blogID).not.toBe("");
    expect(filename).toBe(blog.metadata.blogID);
  }
});
