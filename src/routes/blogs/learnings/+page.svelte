<script>
  import { lastVisited, subrouteName } from "../../../store/store";
  import BlogHomePage from "../../../lib/components/BlogHomePage.svelte";
  $subrouteName = "blogs";
  $lastVisited = "learnings";
  export let data;

  // let listOfBlogs = {
  //   2024: [
  //     {
  //       blogId: "blogId",
  //       blogTitle: "Find Max depth of a tree",
  //       tags: ["leetcode"],
  //       words: 233,
  //       date: "May 4th, 2023",
  //     },
  //   ],
  //   2023: [
  //     {
  //       blogId: "blogId",
  //       blogTitle: "Find Max depth of a tree",
  //       tags: ["leetcode"],
  //       words: 233,
  //       date: "May 4th, 2023",
  //     },
  //   ],
  // };
</script>

<BlogHomePage listOfBlogs={data}></BlogHomePage>
