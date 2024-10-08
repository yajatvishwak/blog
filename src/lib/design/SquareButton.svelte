<script>
    export let classNames = "";
    export let onClick = () => {};
</script>

<button on:click={onClick} class="btn btn-square btn-primary {classNames}">
    <slot />
</button>
