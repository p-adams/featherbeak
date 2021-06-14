<script lang="ts">
  import type { Message, Sender } from "src/data-types/message";

  export let message: Message;
  export let currentUser: Sender;

</script>

<li class={message.sender.id === currentUser.id ? "current-user-message" : ""}>
  {#if message.sender.id !== currentUser.id}
    [{message.sender.username}]
  {/if}
  {message.text}
</li>

<style>
  li {
    font-size: 12px;
    margin-bottom: 10px;
    border: 1px solid lightgray;
    border-radius: 6px;
    padding: 4px;
  }
  .current-user-message {
    text-align: right;
  }

</style>
