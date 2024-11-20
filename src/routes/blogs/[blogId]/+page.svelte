<script>
  import moment from "moment";
  import GoBackButton from "../../../lib/components/GoBackButton.svelte";
  import NavMenu from "../../../lib/components/NavMenu.svelte";
  import Blog from "../../../lib/components/Blog.svelte";
  import { subrouteName } from "../../../store/store";
  export let data;
  $subrouteName = "blogs";
</script>

<div class="flex flex-col my-12">
  <GoBackButton></GoBackButton>
  <div class="flex flex-col gap-4 mt-4">
    <div class="text-5xl">{data.blogTitle}</div>
    <div class="flex flex-col w-full gap-1 lg:gap-4 lg:flex-row">
      <div>{moment(data.date).format("MMMM Do, YYYY")}</div>
      <div class="hidden lg:inline">•</div>
      <div>{data.words} words</div>
      <div class="hidden lg:inline">•</div>
      <div class="flex flex-wrap gap-2">
        {#each data.tags as tags}
          <span class="badge badge-secondary badge-lg">{tags}</span>
        {/each}
      </div>
    </div>
    <div class="divider divider-secondary"></div>
  </div>
  <div>
    <Blog blogText={data.blogText} />
  </div>
  <div class="flex flex-col">
    <div class="divider divider-secondary"></div>
    <GoBackButton></GoBackButton>
    <NavMenu keepItOpen={true} />
  </div>
</div>
