<script>
  import "../app.css";
  import Navbar from "../lib/components/Navbar.svelte";
  import NavMenu from "../lib/components/NavMenu.svelte";
  import { subrouteName } from "../store/store";
</script>

<svelte:head>
  <title>yajat | {$subrouteName}</title>
</svelte:head>

<div class="max-w-screen-lg px-4 mx-auto">
  <div class="relative my-12">
    <Navbar></Navbar>
    <NavMenu />
    <div class="mt-8 mb-4">
      <slot></slot>
    </div>
  </div>
</div>
