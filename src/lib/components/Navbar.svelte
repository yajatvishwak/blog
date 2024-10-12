<script>
  import { subrouteName } from "../../store/store";
  import MenuButton from "./MenuButton.svelte";
  import SearchButton from "./SearchButton.svelte";

  import ThemeSwitcherButton from "./ThemeSwitcherButton.svelte";
</script>

<div class="flex items-center justify-between w-full">
  <div class="text-lg"><b>yajat</b> / {$subrouteName}</div>
  <div class="flex gap-2">
    <ThemeSwitcherButton></ThemeSwitcherButton>
    <SearchButton></SearchButton>
    <MenuButton></MenuButton>
  </div>
</div>
