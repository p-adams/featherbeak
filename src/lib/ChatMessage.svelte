<script lang="ts">
  import type { Message, Sender } from "src/data-types/message";

  export let message: Message;
  export let currentUser: Sender;

</script>

<li class={message.sender.id === currentUser.id ? "user-message" : ""}>
  {#if message.sender.id !== currentUser.id}
    [{message.sender.username}]
  {/if}
  {message.text}
</li>

<style>
  li {
    margin-bottom: 10px;
  }
  .user-message {
    text-align: right;
  }

</style>
