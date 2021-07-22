<script lang="ts">
  import ChatBox from "./ChatBox.svelte";
  import ChatFab from "./ChatFab.svelte";
  // TODO: consider centralized data store
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
