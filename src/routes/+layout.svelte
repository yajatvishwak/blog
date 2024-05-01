<script>
  import "../app.pcss";
  import Footer from "./components/Footer.svelte";
  import Navbar from "./components/Navbar.svelte";
</script>

<div class="flex flex-col h-full min-h-screen">
  <section class="p-6 md:p-10 max-w-screen-md w-full mx-auto">
    <Navbar></Navbar>
    <slot />
  </section>
  <section class="mt-auto w-full max-w-screen-md p-6 md:p-10 py-0 mx-auto">
    <Footer />
  </section>
</div>
