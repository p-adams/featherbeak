<script lang="ts">
  export let onFabClick;
</script>

<div on:click={onFabClick} class="chat-fab-container" title="Open Live Chat">
  <span class="chat-logo">🦜</span>
</div>

<style lang="scss">
  .chat-fab-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100px;
    width: 100px;
    border-radius: 100%;
    background-color: #a5d6a7;
    opacity: 0.95;
    cursor: pointer;
    .chat-logo {
      font-size: 4rem;
    }
    &:hover {
      height: 110px;
      width: 110px;
      border-radius: 100%;
      box-shadow: 4px 4px 12px #43a047;
    }
  }
</style>
