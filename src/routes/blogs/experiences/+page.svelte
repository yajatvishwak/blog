<script>
  import { subrouteName } from "../../../store/store";
  import BlogHomePage from "../../components/BlogHomePage.svelte";
  $subrouteName = "blogs";
</script>

<div class="flex flex-col">
  <div class="text-2xl font-extrabold">experiences</div>
  <div class="opacity-65">the world from my perspective</div>
</div>

<div class="grid grid-cols-3 gap-12 py-10">
  <div>
    <img
      src="https://cdn.dribbble.com/userupload/17162969/file/original-c852aa857ab604f812b8c0220be6dcd8.png?resize=1024x768"
      alt=""
      class="w-full rounded-xl"
    />
    <div class="text-sm italic">gomma one scene</div>
  </div>
  <div>
    <img
      src="https://cdn.dribbble.com/userupload/17162969/file/original-c852aa857ab604f812b8c0220be6dcd8.png?resize=1024x768"
      alt=""
      class="w-full rounded-xl"
    />
    <div class="text-sm italic">gomma one scene</div>
  </div>

  <div>
    <img
      src="https://cdn.dribbble.com/userupload/17162969/file/original-c852aa857ab604f812b8c0220be6dcd8.png?resize=1024x768"
      alt=""
      class="w-full rounded-xl"
    />
    <div class="text-sm italic">gomma one scene</div>
  </div>
</div>
