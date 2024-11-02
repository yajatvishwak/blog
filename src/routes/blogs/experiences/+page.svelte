<script>
  import { subrouteName, lastVisited } from "../../../store/store";
  import BlogHomePage from "../../../lib/components/BlogHomePage.svelte";
  $subrouteName = "blogs";
  $lastVisited = "experiences";

  let listOfBlogs = {
    2024: [
      {
        blogId: "test",
        blogTitle: "test",
        tags: ["leetcode"],
        words: 233,
        date: "May 4th, 2023",
      },
    ],
  };
</script>

<BlogHomePage
  title="experiences"
  subtitle="things that i felt were cool to share"
  {listOfBlogs}
></BlogHomePage>
