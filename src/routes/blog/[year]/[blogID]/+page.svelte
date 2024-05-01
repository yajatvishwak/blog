<script>
  import moment from "moment";
  export let data;
</script>

<svelte:head>
  <title>{data.metadata.title}</title>
</svelte:head>

<div class="flex flex-col gap-3">
  <h1>{data.metadata.title}</h1>
  <div class="flex gap-4 items-center">
    <div>
      {moment(data.metadata.date, "DD/MM/YYYY").format("MMMM Do, YYYY")}
    </div>
    <div>•</div>
    <div class="badge badge-primary bg-yellow-400 text-black border-none">
      {data.metadata.tag}
    </div>
  </div>
  <svelte:component this={data.md}></svelte:component>
</div>
