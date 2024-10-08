<script>
  import "../app.css";
  import Navbar from "../lib/components/Navbar.svelte";
</script>

<div class="mx-auto max-w-screen-lg px-4">
  <div class="my-12">
    <Navbar></Navbar>
    <div class="mt-8 mb-4">
      <slot></slot>
    </div>
  </div>
</div>
