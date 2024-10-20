<script>
  import { subrouteName } from "../../../store/store";
  import BlogHomePage from "../../components/BlogHomePage.svelte";
  $subrouteName = "blogs";

  let listOfBlogs = {
    2024: [
      {
        blogId: "blogId",
        blogTitle: "Find Max depth of a tree",
        tags: ["leetcode"],
        words: 233,
        date: "May 4th, 2023",
      },
    ],
    2023: [
      {
        blogId: "blogId",
        blogTitle: "Find Max depth of a tree",
        tags: ["leetcode"],
        words: 233,
        date: "May 4th, 2023",
      },
    ],
  };
</script>

<BlogHomePage {listOfBlogs}></BlogHomePage>
