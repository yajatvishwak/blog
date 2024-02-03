<script>
  import posthog from "posthog-js";
  import { onMount } from "svelte";
  onMount(() => {
    posthog.init("phc_MUmDNy1h50V4nkMJre4t2bmouG6oh54h0wxGJEDtu5Y", {
      api_host: "https://app.posthog.com",
    });
  });
  export let data;
</script>

<div class="mt-14 flex flex-col">
  {#each data.blogs as blog}
    <a
      href="/blog/{blog.year}/{blog.blogID}"
      class="flex gap-1 flex-col cursor-pointer hover:scale-[99%] transition-all duration-150 delay-100"
    >
      <div class="flex gap-3 mb-2">
        <span class="label-text-alt uppercase">Jan 8th, 2024</span>
        <span class="label-text-alt uppercase">/</span>
        <span class="label-text-alt uppercase">8 min read</span>
        <span class="label-text-alt uppercase">/</span>
        <span class="label-text-alt uppercase">programming</span>
      </div>

      <div class="text-2xl font-bold text-amber-400">{blog.title}</div>
      <div class="line-clamp-2 lg:line-clamp-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
        aliquid! Ea tempore illum quos rem atque blanditiis placeat quia est!
        Necessitatibus mollitia quos deleniti distinctio totam eveniet unde
        vitae possimus.
      </div>
    </a>
    <div class="divider"></div>
  {/each}
</div>
