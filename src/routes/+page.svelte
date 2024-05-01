<script>
  import moment from "moment";
  import posthog from "posthog-js";
  import { onMount } from "svelte";

  onMount(() => {
    posthog.init("phc_MUmDNy1h50V4nkMJre4t2bmouG6oh54h0wxGJEDtu5Y", {
      api_host: "https://us.i.posthog.com",
    });
  });
  export let data;
</script>

<svelte:head>
  <title>All Blogs | Yajat's Blog</title>
</svelte:head>

<div class="mt-8 flex flex-col">
  {#each data.blogs as blog, index}
    <a
      href="/blog/{blog.year}/{blog.blogID}"
      class="flex gap-1 flex-col cursor-pointer hover:scale-[99%] transition-all duration-150 delay-100"
    >
      <div class="flex gap-3 mb-2">
        <span class="label-text-alt uppercase"
          >{moment(blog.date, "DD/MM/YYYY").format("MMMM Do YYYY")}</span
        >
        <span class="label-text-alt uppercase">/</span>
        <span class="label-text-alt uppercase">{blog.readingtime}</span>
        <span class="label-text-alt uppercase">/</span>
        <span class="label-text-alt uppercase">{blog.tag}</span>
      </div>

      <div class="text-2xl font-bold text-amber-400">{blog.title}</div>
      <div class="line-clamp-2 lg:line-clamp-3">
        {blog.description}
      </div>
    </a>
    <div class={index == data.blogs.length - 1 ? "" : "divider"}></div>
  {/each}
</div>
