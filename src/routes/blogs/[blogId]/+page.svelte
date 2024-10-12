<script>
  import moment from "moment";
  import GoBackButton from "../../../lib/components/GoBackButton.svelte";
  import NavMenu from "../../../lib/components/NavMenu.svelte";
  export let data;
  let html = `<p>Welcome guys!</p>
<p>Those who know me, know this is long coming (3+ years) I always talk about how I want a portfolio website and how I built a gazzillion versions of it. But for some reason or another, never completed any of them.</p>
<p>But! Here I am, finally committing to this one.</p>
<p>The purpose of this blog website is quiet a few actually,</p>
<ul>
<li><p>Since instagram is taken by beautiful people, LinkedIn by people getting promoted all the time and Twitter by people with really intimidating views about everything, I wanted a space of my own, where i can dump my views, my findings and experiences. I think of this blog site as my cottage up in the digital mountains. Not too much crowd, Not too much fuss.</p>
</li>
<li><p>This blog site is far from perfect. I am missing curial features like search and commenting and what not. But thats the point. I&#39;ve built this website from scratch (not literally, i used Sveltekit). I want to build features on this website piece by piece. (Feeds my sense of accomplishments)</p>
</li>
<li><p>Meself is a lazy procrastinator. I lose interest very quickly when things get boring and i believe that&#39;s the reason for so many unfinished side projects. Another purpose of this blog site is to teach myself to enjoy the boring too.</p>
</li>
</ul>
<p>I almost forgot to introduce myself. I am Yajat. I love software. I have been writing code half my life. Check out <a href="whoami">the who page</a> to know more about me and <a href="now">the now page</a> to see what i am currently doing.</p>
<p>That&#39;s about it I guess, I have nothing more to add to this blog. See you all soon!</p>
`;
</script>

<div class="flex flex-col my-12">
  <GoBackButton></GoBackButton>
  <div class="flex flex-col gap-4 mt-4">
    <div class="text-5xl">{data.blogTitle}</div>
    <div class="flex gap-4">
      <div>{moment(data.date).format("MMMM Do, YYYY")}</div>
      <div>•</div>
      <div>{data.words} words</div>
      <div>•</div>
      <div>{data.tags}</div>
    </div>
    <div class="divider divider-secondary"></div>
  </div>
  <div>
    {@html html}
  </div>
  <div class="flex flex-col">
    <div class="divider divider-secondary"></div>
    <GoBackButton></GoBackButton>
    <NavMenu keepItOpen={true} />
  </div>
</div>
