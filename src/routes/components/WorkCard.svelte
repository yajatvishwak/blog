<script>
  export let title = "Partner Consultant";
  export let company = "Oracle (EDCS)";
  export let description = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
    dignissimos. Iure, vero similique dicta odit illum esse consequuntur
    provident facilis. Odit deserunt quasi nemo ducimus facilis illo fuga
    cupiditate earum.`;
  export let start = "Jan 2023";
  export let end = "Jan 2024";
</script>

<div class="flex flex-col gap-1">
  <div class="text-2xl">> {title} at {company}</div>
  <div class="text-sm">{start} - {end}</div>
  <div class="opacity-75">
    {description}
  </div>
  <slot />
</div>
