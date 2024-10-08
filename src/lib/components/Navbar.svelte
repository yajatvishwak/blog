<script>
  import { page } from "$app/stores";
  import MenuButton from "./MenuButton.svelte";
  import SearchButton from "./SearchButton.svelte";

  import ThemeSwitcherButton from "./ThemeSwitcherButton.svelte";

  let subtitle = "whoami";
  $: {
    const parts = $page.url.pathname.split("/").filter(Boolean);
    if (parts[0]) {
      subtitle = parts[0]; // Get the first subroute
    }
  }
</script>

<div class="flex w-full justify-between items-center">
  <div class="text-2xl">yajat / {subtitle}</div>
  <div class="flex gap-2">
    <ThemeSwitcherButton></ThemeSwitcherButton>
    <SearchButton></SearchButton>
    <MenuButton></MenuButton>
  </div>
</div>
