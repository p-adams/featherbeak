<script lang="ts">
  import ChatMessage from "./ChatMessage.svelte";
  import type { Message } from "src/data-types/message";

  import { onMount } from "svelte";
  import {
    currentUser,
    loadChat,
    sendMessageToApi,
    getMessageById,
  } from "../api/message";
  let activeMessages: Message[] = [];
  let message = "";
  let textarea: HTMLTextAreaElement;
  let key = 0;

  onMount(async () => {
    textarea.focus();
    let chat = await loadChat();
    activeMessages = [...chat];
  });

  function handleKeyup(e) {
    if (e.code === "Enter") {
      sendMessage();
    }
  }
  function sendMessage() {
    let id = `key ${key++}`;
    sendMessageToApi({
      id,
      text: message,
      sender: currentUser,
      timestamp: new Date(),
    }).then(async () => {
      activeMessages = [...activeMessages, await getMessageById(id)];
      message = "";
    });
  }

</script>

<div class="chat-box">
  <div class="chat-container">
    <div class="chat-window">
      <div class="chat-top">
        <div class="divider" />
        <p>beginning of chat</p>
        <div class="divider" />
      </div>
      <ul>
        {#each activeMessages as message}
          <ChatMessage {message} {currentUser} />
        {/each}
      </ul>
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

</style>
