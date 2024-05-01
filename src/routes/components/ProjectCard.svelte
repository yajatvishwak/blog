<script>
  export let link = "https://github.com/yajatvishwak/gis-frontend";
  export let name = "1. Gift Inventory System";
  export let description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
    dignissimos. Iure, vero similique dicta odit illum esse consequuntur
    provident facilis. Odit deserunt quasi nemo ducimus facilis illo fuga
    cupiditate earum.`;
</script>

<div class="group flex flex-col gap-1">
  <a href={link} class="flex items-center gap-2">
    <div class="text-2xl group-hover:text-yellow-500 transition-all">
      {name}
    </div>
    <div class="mt-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4 dark:text-amber-400 group-hover:opacity-100 opacity-0 transition-all"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </div>
  </a>
  {#if description}
    <div class="opacity-75">{description}</div>
  {/if}
  <slot />
</div>
