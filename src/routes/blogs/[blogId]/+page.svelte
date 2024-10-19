<script>
  import moment from "moment";
  import GoBackButton from "../../../lib/components/GoBackButton.svelte";
  import NavMenu from "../../../lib/components/NavMenu.svelte";
  import Blog from "../../components/Blog.svelte";
  export let data;
</script>

<div class="flex flex-col my-12">
  <GoBackButton></GoBackButton>
  <div class="flex flex-col gap-4 mt-4">
    <div class="text-5xl">{data.blogTitle}</div>
    <div class="flex gap-4">
      <div>{moment(data.date).format("MMMM Do, YYYY")}</div>
      <div>•</div>
      <div>{data.words} words</div>
      <div>•</div>
      <div>{data.tags}</div>
    </div>
    <div class="divider divider-secondary"></div>
  </div>
  <div>
    <Blog />
  </div>
  <div class="flex flex-col">
    <div class="divider divider-secondary"></div>
    <GoBackButton></GoBackButton>
    <NavMenu keepItOpen={true} />
  </div>
</div>
