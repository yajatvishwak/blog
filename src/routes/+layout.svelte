<script>
  import "../app.pcss";

  import Navbar from "./components/Navbar.svelte";
</script>

<section class="p-6 md:p-10 max-w-screen-md mx-auto">
  <Navbar></Navbar>
  <slot />
</section>
