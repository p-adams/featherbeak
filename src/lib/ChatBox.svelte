<script lang="ts">
  import type { Message } from "src/data-types/message";

  import { onMount } from "svelte";
  import {
    messages as messagesFromApi,
    currentUser,
    loadChat,
  } from "../api/message";
  let messages = messagesFromApi;
  let message = "";
  let textarea: HTMLTextAreaElement;
  let loadingChat: Promise<Message[]>;

  function handleKeyup(e) {
    if (e.code === "Enter") {
      sendMessage();
    }
  }
  function sendMessage() {
    messages = [
      ...messages,
      {
        id: "key",
        text: message,
        sender: currentUser,
        timestamp: new Date(),
      },
    ];
    loadingChat = loadChat();
    message = "";
  }
  onMount(() => {
    textarea.focus();
  });
  loadingChat = loadChat();

</script>

<div class="chat-box">
  <div class="chat-container">
    <div class="chat-window">
      {#await loadingChat}
        <p>loading chat...</p>
      {:then messages}
        <ul>
          <div class="chat-top">
            <div class="divider" />
            <p>beginning of chat</p>
            <div class="divider" />
          </div>
          {#each messages as message}
            <li
              class={message.sender.id === currentUser.id ? "user-message" : ""}
            >
              {#if message.sender.id !== currentUser.id}
                [{message.sender.username}]
              {/if}
              {message.text}
            </li>
          {/each}
        </ul>
      {:catch error}
        <p>something went wrong: {error.message}</p>
      {/await}
    </div>

    <div class="chat-controls">
      <textarea
        bind:this={textarea}
        bind:value={message}
        on:keyup={handleKeyup}
      />
      <button disabled={!message} on:click={sendMessage}>Send</button>
    </div>
  </div>
</div>

<style>
  .chat-box {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .chat-box .chat-container {
    border: 1px solid gray;
    border-radius: 4px;
    height: 450px;
    width: 524px;
  }
  .chat-container .chat-window {
    height: 75%;
    margin: 10px;
    border: 1px solid lightgray;
    background: whitesmoke;
  }
  .chat-window .chat-top {
    margin-bottom: 10px;
    color: gray;
  }
  .chat-top .divider {
    border-top: 1px dashed gray;
  }
  .chat-top p {
    text-align: center;
    padding: 0;
    margin: 0;
  }
  .chat-container .chat-controls {
    display: flex;
    justify-content: space-between;
    margin: 10px;
  }
  .chat-controls textarea {
    width: 84%;
    resize: none;
  }
  ul {
    list-style: none;
    padding: 8px;
  }
  ul li {
    margin-bottom: 10px;
  }
  .user-message {
    text-align: right;
  }

</style>
