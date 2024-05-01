<script>
  import ProjectCard from "../components/ProjectCard.svelte";
  import WorkCard from "../components/WorkCard.svelte";

  import { isLightMode } from "../../store/theme.store";
</script>

<svelte:head>
  <title>whoami | Yajat Vishwakarma</title>
</svelte:head>

<div class="flex flex-col-reverse lg:flex-row items-center gap-3 mt-10">
  <div class="text-3xl text-center lg:text-left">
    <span class="opacity-55">I am a</span>
    <span class="opacity-100">23 year old programmer</span>
    <span class="opacity-55">from Bangalore, India.</span>
    <span class="opacity-55">I work as</span>
    <span>Associate Software Engineer</span>
    <span class="opacity-55">at</span>
    <span class="opacity-55">Eurofins IT solutions.</span>
    <span class="opacity-55">I have a </span>
    <span class="opacity-100">bachelor's degree in Computer Science.</span>
    <span class="opacity-55"
      >I love researching and tinkering with technology.</span
    >
  </div>
  <img src="yajat.jpeg" class="w-40 h-40 rounded-full" alt="" />
</div>

<div class="divider"></div>
<div class="flex flex-col gap-10">
  <div class="-mb-4">My corporate journey so far...</div>
  <WorkCard
    start="July 2023"
    end="Feb 2024"
    company="Oracle (EDCS)"
    description=""
  >
    <ul class="pl-5 opacity-75 mt-3">
      <li class="">
        I automated clients' manual invoice processing with <span
          class={$isLightMode ? "text-amber-500" : "text-amber-400"}
          >OCI AI services
        </span>, replacing labor-intensive tasks with OCR technology for
        efficient automation.
      </li>
      <li>
        Worked on a POC with <span
          class={$isLightMode ? "text-amber-500" : "text-amber-400"}
          >LLM models</span
        >
        to perform
        <span class={$isLightMode ? "text-amber-500" : "text-amber-400"}
          >retrieval augmented generation (RAG)</span
        >
        and
        <span class={$isLightMode ? "text-amber-500" : "text-amber-400"}
          >question answering (QA)</span
        > on contract files
      </li>
      <li>
        Extended the functionality of <span
          class={$isLightMode ? "text-amber-500" : "text-amber-400"}
          >Oracle Data Integrator</span
        > in the UNHCR project by providing a data transforming (JSON to CSV) tool
        written in Python
      </li>
    </ul>
  </WorkCard>
</div>

<div class="divider"></div>

<div class=" flex flex-col gap-10">
  <div class="-mb-4">These are some projects that I'm proud of...</div>
  <ProjectCard
    name="> Gift Inventory System"
    description="My college came up with problem, they did not use an inventory system to record and manage inventory of mementos (gifts, they would normally give to chief guests as a token of appreciation). Me along with 2 other college friends, built a platform that they could use to digitally manage their inventory."
  >
    <ul class="pl-5 opacity-75 mt-3">
      <li>
        Initially built with Vue.js, transitioned to Svelte for faster
        development experience
      </li>
      <li>
        Utilized MongoDB for flexible data storage since the data was varying
      </li>
      <li>
        Implemented server-client architecture and Scaled the application to
        support 100-200 users DAU (approx)
      </li>
      <li>My contribution was majorly on the frontend side of things.</li>
    </ul></ProjectCard
  >
  <ProjectCard
    name="> Judgy"
    link={"https://github.com/yajatvishwak/judgy-cli.git"}
    description="This was a hackathon project that also served as a POC to an idea. The idea was to help judges (of hackathons) to help them rank and filter projects by analysing their submission(video, ppts, code). I used ✨ Generative AI ✨ (Open AI apis) to build an agent that could give insights of the project and have a chat about the project submission."
  >
    <!-- <ul class="pl-5 opacity-75 mt-3">
      <li>
        Initially built with Vue.js, transitioned to Svelte for faster
        development experience
      </li>
      <li>
        Utilized MongoDB for flexible data storage since the data was varying
      </li>
      <li>
        Implemented server-client architecture and Scaled the application to
        support 100-200 users DAU (approx)
      </li>
      <li>My contribution was majorly on the frontend side of things.</li>
    </ul> -->
  </ProjectCard>
</div>
