<script lang="ts">
  export let onFabClick;
</script>

<div on:click={onFabClick} class="chat-fab-container" title="Open Live Chat">
  <span class="chat-logo">🦜</span>
</div>

<style lang="scss">
  .chat-fab-container {
    position: absolute;
    right: 0;
    bottom: 0;
    margin-right: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100px;
    width: 100px;
    border-radius: 100%;
    border: 1px solid lightgray;
    cursor: pointer;
    .chat-logo {
      font-size: 4rem;
    }
    &:hover {
      height: 110px;
      width: 110px;
      border-radius: 100%;
      box-shadow: 2px 5px 2px lightgray;
    }
  }
</style>
