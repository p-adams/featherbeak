<script lang="ts">
  import ChatBox from "./ChatBox.svelte";
  import ChatFab from "./ChatFab.svelte";
  export let messages = [];
  export let session = null;
  // TODO: consider centralized data store for visibility state
  let show = false;
  let isMinimize = false;
  function showChat() {
    // if chat session exists
    // maximize chat box
    // otherwise, start a new chat session
    console.log("show");
  }
  function closeChat() {}
  function minimizeChat() {}
</script>

<ChatBox />
<ChatFab onFabClick={showChat} />
