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
    display: table;
    font-size: 12px;
    text-align: left;
    margin-bottom: 10px;
    border-radius: 6px;
    padding: 4px;
    background: lightgray;
  }
  .current-user-message {
    background: skyblue;
    color: white;
    margin-left: auto;
    margin-right: 0;
  }

</style>
