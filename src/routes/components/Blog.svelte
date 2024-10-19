<script>
  import { onMount } from "svelte";

  import EditorJS from "@editorjs/editorjs";
  import Header from "@editorjs/header";

  export let isReadOnly = true;
  export let data = {};

  let editor;
  async function startEditor() {
    editor = new EditorJS({
      holder: "editorjs",
      readOnly: isReadOnly,
      data: data,
      tools: {
        header: Header,
      },
    });
  }

  onMount(startEditor);

  $: if (data && editor) {
    console.log(
      "Editor - Update - Update: " +
        ("Updating editor with " + JSON.stringify(data))
    );

    editor.isReady.then(() => {
      editor.clear();
      editor.render(data);
    });
  }
</script>

<div id="editorjs" class="editor"></div>

<style>
  .editor {
    margin-top: 1rem;
    border: 1px solid black;
    height: 500px;
  }
</style>
