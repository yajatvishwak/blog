<script>
  export let data;
</script>

<svelte:head>
  <title>{data.metadata.title} | Yajat's Blog</title>
</svelte:head>

<div class="flex flex-col gap-3">
  <h1>{data.metadata.heading}</h1>
  <svelte:component this={data.md}></svelte:component>
</div>
