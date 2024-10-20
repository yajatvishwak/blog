<script>
  import Blog from "../lib/components/Blog.svelte";
  import { subrouteName } from "../store/store";

  $subrouteName = "whoami";

  let purpose = `I set out to build a website, not just as a digital journal of my experiences
    and learnings, but as a personal challenge. There’s something immensely satisfying
    about creating something from nothing—every line of code, every design choice,
    a reflection of my thoughts and curiosity. \n \n This project wasn’t just about sharing
    knowledge; it was a way to feed my ego, to prove to myself that I could build
    something tangible, functional, and engaging. 
     \n \n It’s more
    than a platform—it’s a work in progress, a continuous journey of iteration and
    improvement, much like my own learning process.`;
  let whatsnew = "- added new blog";
</script>

<div class="flex flex-col gap-4 mt-12">
  <div class="text-3xl lg:text-left">
    <span class="opacity-55">I am a</span>
    <span class="opacity-100">23 year old programmer</span>
    <span class="opacity-55">from Bangalore, India.</span>
    <span class="opacity-55">I work as an</span>
    <span>Associate Software Engineer</span>
    <span class="opacity-55">at</span>
    <span class="opacity-55">Eurofins IT solutions.</span>
    <span class="opacity-55">I have a </span>
    <span class="opacity-100">bachelor's degree in Computer Science.</span>
    <span class="opacity-55"
      >I love researching and tinkering with technology.</span
    >
  </div>
  <div class="">- Yajat Vishwakarma</div>
  <img class="lg:w-1/3" src="yajat.jpg" alt="" srcset="" />
  <div class="divider"></div>
  <div class="font-bold">Purpose</div>
  <div>
    <Blog md={purpose}></Blog>
  </div>
  <div class="divider"></div>

  <div class="font-bold">What's new?</div>
  <Blog md={whatsnew}></Blog>
</div>
