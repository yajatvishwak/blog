<script>
  export let blogText = "";
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

  function removeFrontmatter(markdown) {
    // Regular expression to match frontmatter enclosed in triple dashes
    const frontmatterRegex = /^---\n[\s\S]*?\n---\n?/;
    return markdown.replace(frontmatterRegex, "");
  }

  let md = "";
  onMount(async () => {
    md = removeFrontmatter(blogText);
  });
</script>

<div class="w-full h-full">
    <div class="blog" in:fade={{ delay: 500 }} out:fade>
      <Markdown {md} {plugins} />
    </div>
</div>
