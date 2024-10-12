<script>
  import { showModal } from "../../store/modal.store";
  let modalElement;

  // Use an effect to open the modal when $showModal changes
  $: $showModal ? modalElement?.showModal() : modalElement?.close();
</script>

<dialog
  bind:this={modalElement}
  id="my_modal_1"
  class="modal"
  on:cancel={() => showModal.set(false)}
>
  <div class="modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <button class="btn" on:click={() => showModal.set(false)}>Close</button>
    </div>
  </div>
</dialog>
