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
    <div class="chat-header">
      <div class="hero-header">
        <span>🦜</span>
        <p>featherbeak</p>
      </div>
      <div>
        <button>-</button>
        <button>x</button>
      </div>
    </div>
    <div class="chat-window">
      <div class="sign-in-screen">
        <div class="container">
          <input placeholder="email" />
          <input placeholder="subject" />
          <textarea placeholder="enter details" />
          <button>Chat</button>
        </div>
      </div>
      <div class="chat-top">
        <p>beginning of chat</p>
        <div class="divider" />
      </div>
      <ul class="message-list">
        {#each activeMessages as message}
          <ChatMessage {message} {currentUser} />
        {/each}
      </ul>
    </div>

    <div class="chat-controls-container">
      <div class="chat-toolbar">toolbar</div>
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
</div>

<style>
  .chat-box {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .chat-box .chat-container {
    display: grid;
    border: 1px solid #ededed;
    height: 440px;
    width: 350px;
  }
  .chat-container .chat-window {
    display: grid;
    height: 300px;
    background: whitesmoke;
    overflow-y: auto;
  }
  .chat-window .sign-in-screen {
    position: absolute;
    z-index: 1;
    height: 390px;
    width: 350px;
    background: whitesmoke;
  }
  .sign-in-screen .container {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
  .chat-header {
    display: flex;
    justify-content: space-between;
    height: 50px;
    border-bottom: 1px solid lightgray;
    box-shadow: 0px 10px 16px lightgray;
    padding: 10px;
  }
  .chat-header .hero-header {
    display: flex;
  }

  .hero-header p {
    font-weight: bold;
    color: slategray;
    font-size: 12px;
    padding-left: 4px;
    margin: 0;
  }
  .chat-header button {
    border: none;
    cursor: pointer;
  }
  .chat-header button:hover {
    border: 1px solid lightskyblue;
  }
  .chat-window .chat-top {
    margin-top: 10px;
    margin-bottom: 10px;
    color: gray;
  }
  .chat-top .divider {
    margin-top: 2px;
    border-bottom: 1px dashed gray;
  }
  .chat-top p {
    text-align: center;
    padding: 0;
    margin: 0;
    font-size: 10px;
  }

  .chat-window .message-list {
    align-self: end;
  }
  .chat-container .chat-controls-container {
    align-self: end;
    border-top: 1px solid lightgray;
    box-shadow: 0px 10px 12px lightgray;
  }
  .chat-controls-container .chat-toolbar {
    padding: 4px;
  }
  .chat-controls-container .chat-controls {
    display: flex;
    justify-content: space-between;
    padding: 4px;
  }
  .chat-controls textarea {
    width: 84%;
    resize: none;
    border: none;
  }
  .chat-controls button {
    border: 1px solid lightgray;
  }
  ul {
    list-style: none;
    padding: 8px;
  }
</style>
