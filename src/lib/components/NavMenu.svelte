<script>
  export let keepItOpen = false;
  import { isMenuOpened } from "../../store/store";
  import { fade } from "svelte/transition";
  let menus = {
    information: [
      { selected: false, title: "whoami", href: "/" },
      { selected: false, title: "contact", href: "/contact" },
      { selected: false, title: "milestones", href: "/milestones" },
      { selected: false, title: "now", href: "/now" },
    ],
    blog: [
      { selected: false, title: "experiences", href: "/blogs/experiences" },
      { selected: false, title: "learnings", href: "/blogs/learnings" },
    ],
    download: [{ selected: false, title: "resume", href: "/" }],
  };
</script>

{#if $isMenuOpened || keepItOpen}
  <!-- can refactor, html is repeated -->
  <div
    id="navMenu"
    transition:fade={{ duration: 100 }}
    class="{keepItOpen
      ? ''
      : 'absolute'} z-10 grid w-full grid-cols-2 gap-8 lg:gap-0 p-8 mt-4 rounded-lg navmenu lg:grid-cols-3 bg-secondary"
  >
    <div>
      <div class="font-bold">Information</div>
      <div class="flex flex-col gap-1 mt-2">
        {#each menus.information as info}
          <a
            on:click={() => ($isMenuOpened = false)}
            class="transition-all opacity-50 hover:opacity-100"
            href={info.href}>{info.title}</a
          >
        {/each}
      </div>
    </div>
    <div>
      <div class="font-bold">Blog</div>
      <div class="flex flex-col gap-1 mt-2 group">
        {#each menus.blog as info}
          <a
            on:click={() => ($isMenuOpened = false)}
            class="transition-all opacity-50 hover:opacity-100"
            href={info.href}>{info.title}</a
          >
        {/each}
      </div>
    </div>
    <div>
      <div class="font-bold">Download</div>
      <div class="flex flex-col gap-1 mt-2">
        {#each menus.download as info}
          <a
            on:click={() => ($isMenuOpened = false)}
            class="transition-all opacity-50 hover:opacity-100"
            href={info.href}>{info.title}</a
          >
        {/each}
      </div>
    </div>
  </div>
{/if}
