<script>
  import Markdown from "svelte-exmarkdown";
  import { gfmPlugin } from "svelte-exmarkdown/gfm";
  const plugins = [
    gfmPlugin(),
    {
      rehypePlugin: [
        rehypeHighlight,
        { ignoreMissing: true, languages: { typescript } },
      ],
    },
  ];

  import typescript from "highlight.js/lib/languages/typescript";
  import "highlight.js/styles/atom-one-dark.css";
  import rehypeHighlight from "rehype-highlight";

  let md = "```typescript\nconsole.log('Hello, world!');\n```";
</script>

<div class="w-full h-full">
  <Markdown {md} {plugins} />
</div>
