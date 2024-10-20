<script>
  export let listOfBlogs = {};
  export let title = "learnings";
  export let subtitle = "learn in public they said";
  export let blogCount = 0;
  $: {
    blogCount = Object.keys(listOfBlogs).reduce((count, year) => {
      count += listOfBlogs[year].length;
      return count;
    }, 0);
  }
</script>

<div class="flex items-center justify-between">
  <div class="flex flex-col">
    <div class="text-2xl font-extrabold">{title}</div>
    <div class="opacity-65">{subtitle}</div>
  </div>
  <div class="font-semibold badge-primary badge badge-lg">
    {blogCount}
    {blogCount === 1 ? "Blog" : "Blogs"}
  </div>
</div>
{#each Object.keys(listOfBlogs).sort((a, b) => b - a) as year}
  <div class="mt-12 text-sm font-bold">{year}</div>
  <div class="mt-2 divider divider-secondary"></div>
  {#each listOfBlogs[year] as blog}
    <a href={"/blogs/" + blog.blogId} class="cursor-pointer group">
      <div
        class="flex items-center justify-between text-xs md:text-sm lg:text-base"
      >
        <div>
          <div class="text-lg font-bold">{blog.blogTitle}</div>
          <div class="flex gap-4 mt-2">
            <div>{blog.date}</div>
            <div>•</div>
            <div>{blog.words} words</div>
            <div>•</div>
            <div>{blog.tags}</div>
          </div>
        </div>
        <div class="transition-all opacity-0 group-hover:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="opacity-0 size-6 lg:opacity-100"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
      <div class="divider divider-secondary"></div>
    </a>
  {/each}
{/each}
