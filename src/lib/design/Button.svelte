<script>
  export let classNames = "";
  export let onClick = () => {};
</script>

<button on:click={onClick} class="btn {classNames} outline-none border-none">
  <slot />
</button>
