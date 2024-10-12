<script>
  import SquareButton from "../design/SquareButton.svelte";
  import { isMenuOpened } from "../../store/store";
  function toggleButton() {
    $isMenuOpened = !$isMenuOpened;
  }
</script>

<SquareButton onClick={toggleButton} classNames="menutoggle btn-secondary">
  {#if $isMenuOpened}
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
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  {:else}
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
        d="M3.75 9h16.5m-16.5 6.75h16.5"
      />
    </svg>
  {/if}
</SquareButton>
