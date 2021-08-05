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
    show = !show;
  }
  function closeChat() {}
  function minimizeChat() {}
</script>

<div class="live-chat-container">
  {#if show}
    <ChatBox />
  {/if}

  <ChatFab onFabClick={showChat} />
</div>

<style lang="scss">
  .live-chat-container {
    position: absolute;
    right: 0;
    bottom: 10px;
    margin-right: 25px;
  }
</style>
