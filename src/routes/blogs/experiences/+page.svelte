<script>
  import { subrouteName, lastVisited } from "../../../store/store";
  import BlogHomePage from "../../../lib/components/BlogHomePage.svelte";
  $subrouteName = "blogs";
  $lastVisited = "experiences";

  export let data;
</script>

<BlogHomePage
  title="experiences"
  subtitle="things that i felt were cool to share"
  listOfBlogs={data}
></BlogHomePage>
