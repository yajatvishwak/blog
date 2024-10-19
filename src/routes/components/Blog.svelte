<script>
  import Markdown from "svelte-exmarkdown";
  import { gfmPlugin } from "svelte-exmarkdown/gfm";
  let md = "```let x = 123;```";
</script>

<Markdown {md} />
