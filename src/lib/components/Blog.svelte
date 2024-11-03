<script>
  export let blogLink = "";
  import { error } from "@sveltejs/kit";
  import Markdown from "svelte-exmarkdown";
  import { gfmPlugin } from "svelte-exmarkdown/gfm";
  const plugins = [
    gfmPlugin(),
    {
      rehypePlugin: [
        rehypeHighlight,
        { ignoreMissing: true, languages: { typescript, python } },
      ],
    },
  ];

  import typescript from "highlight.js/lib/languages/typescript";
  import python from "highlight.js/lib/languages/python";
  import "highlight.js/styles/atom-one-dark.css";
  import rehypeHighlight from "rehype-highlight";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import axios from "axios";

  function removeFrontmatter(markdown) {
    // Regular expression to match frontmatter enclosed in triple dashes
    const frontmatterRegex = /^---\n[\s\S]*?\n---\n?/;
    return markdown.replace(frontmatterRegex, "");
  }

  let md = "";
  let loading = true;
  onMount(async () => {
    const { data } = await axios.get(blogLink).catch(() => {
      error(404, { message: "not found" });
    });
    md = removeFrontmatter(data);
    loading = false;
  });
</script>

<div class="w-full h-full">
  {#if loading}
    <div class="loading loading-infinity"></div>
  {:else}
    <div class="blog" in:fade={{ delay: 500 }} out:fade>
      <Markdown {md} {plugins} />
    </div>
  {/if}
</div>
