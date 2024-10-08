<script>
  let listOfBlogs = [
    {
      blogTitle: "Find Max depth of a tree",
      tags: ["leetcode"],
      words: 233,
      date: "May 4th, 2023",
    },
    {
      blogTitle: "Find Max depth of a tree",
      tags: ["leetcode"],
      words: 233,
      date: "May 4th, 2023",
    },
    {
      blogTitle: "Find Max depth of a tree",
      tags: ["leetcode"],
      words: 233,
      date: "May 4th, 2023",
    },
    {
      blogTitle: "Find Max depth of a tree",
      tags: ["leetcode"],
      words: 233,
      date: "May 4th, 2023",
    },
    {
      blogTitle: "Find Max depth of a tree",
      tags: ["leetcode"],
      words: 233,
      date: "May 4th, 2023",
    },
    {
      blogTitle: "Find Max depth of a tree",
      tags: ["leetcode"],
      words: 233,
      date: "May 4th, 2023",
    },
    {
      blogTitle: "Find Max depth of a tree",
      tags: ["leetcode"],
      words: 233,
      date: "May 4th, 2023",
    },
    {
      blogTitle: "Find Max depth of a tree",
      tags: ["leetcode"],
      words: 233,
      date: "May 4th, 2023",
    },
    {
      blogTitle: "Find Max depth of a tree",
      tags: ["leetcode"],
      words: 233,
      date: "May 4th, 2023",
    },
    {
      blogTitle: "Find Max depth of a tree",
      tags: ["leetcode"],
      words: 233,
      date: "May 4th, 2023",
    },
    {
      blogTitle: "Find Max depth of a tree",
      tags: ["leetcode"],
      words: 233,
      date: "May 4th, 2023",
    },
    {
      blogTitle: "Find Max depth of a tree",
      tags: ["leetcode"],
      words: 233,
      date: "May 4th, 2023",
    },
  ];
</script>

<div class="flex justify-between items-center">
  <div class="flex flex-col">
    <div class="text-2xl">learnings</div>
    <div class="opacity-65">learn in public they said</div>
  </div>
  <div class="badge-primary badge badge-lg font-bold">
    {listOfBlogs.length} Blogs
  </div>
</div>
<div class="divider divider-secondary"></div>
{#each listOfBlogs as blog}
  <div class="group cursor-pointer">
    <div class="flex justify-between items-center">
      <div>
        <div class="font-bold text-lg">{blog.blogTitle}</div>
        <div class="flex gap-4 mt-2">
          <div>{blog.date}</div>
          <div>•</div>
          <div>{blog.words} words</div>
          <div>•</div>
          <div>{blog.tags}</div>
        </div>
      </div>
      <div class="opacity-0 group-hover:opacity-100 transition-all">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
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
  </div>
{/each}
