<script>
  import NavMenu from "../../lib/components/NavMenu.svelte";
  import { subrouteName } from "../../store/store";
  $subrouteName = "contact";
</script>

<section>
  <div class="font-bold">You can reach me out</div>
  <div class="divider"></div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
    <div>
      <div class="font-bold flex">For serious work</div>
      <a
        class="opacity-50 hover:opacity-100"
        href="mailto:yajat.vinod.vishwakarma@gmail.com"
        >yajat.vinod.vishwakarma@gmail.com</a
      >
    </div>
    <div>
      <div class="font-bold">On Instagram</div>
      <div class="opacity-50">deactivated...</div>
    </div>
    <div>
      <div class="font-bold">On X</div>
      <a href="https://x.com/YajatVishwak" class="opacity-50 hover:opacity-100"
        >@yajatvishwak</a
      >
    </div>
    <div>
      <div class="font-bold">On Github</div>
      <a
        href="https://github.com/YajatVishwak"
        class="opacity-50 hover:opacity-100">yajatvishwak</a
      >
    </div>

    <!-- <div>
      <div class="font-bold">On Reddit</div>
      <a
        href="https://www.reddit.com/user/Bubbly-Equivalent254/"
        class="opacity-50 hover:opacity-100">Bubbly-Equivalent254</a
      >
    </div> -->
  </div>
</section>
<div class="divider mt-12"></div>

<NavMenu keepItOpen={true} />
