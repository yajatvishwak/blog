<script>
  import { subrouteName } from "../../../store/store";
  import BlogHomePage from "../../../lib/components/BlogHomePage.svelte";
  $subrouteName = "blogs";
</script>

<BlogHomePage
  title="experiences"
  subtitle="things that i felt were cool to share"
></BlogHomePage>
