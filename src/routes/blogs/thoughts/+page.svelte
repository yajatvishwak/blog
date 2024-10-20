<script>
  import { subrouteName } from "../../../store/store";
  import BlogHomePage from "../../components/BlogHomePage.svelte";
  $subrouteName = "blogs";
</script>

<BlogHomePage title={"thoughts"} subtitle={"sometimes i think"}></BlogHomePage>
