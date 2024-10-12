<script>
  import { browser } from "$app/environment";

  function goback() {
    if (browser) window.history.back();
  }
</script>

<button
  on:click={() => goback()}
  class="flex items-center gap-2 transition-all opacity-50 cursor-pointer hover:opacity-100"
>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-5 h-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  </div>
  <div>Go back to all blogs</div>
</button>
