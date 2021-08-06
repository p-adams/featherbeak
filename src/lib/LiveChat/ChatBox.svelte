<script lang="ts">
  import ChatMessage from "./ChatMessage.svelte";
  import type { Message } from "src/data-types/message";

  import { afterUpdate, onMount } from "svelte";
  import { currentUser, loadChat, dispatch, receive } from "../../api/message";
  let activeMessages: Message[] = [];
  let message = "";
  let textarea: HTMLTextAreaElement;
  let emailInput: HTMLInputElement;
  let chatWindowBottom: HTMLLIElement;
  let signInFailed = false;
  let errorMessage: {
    invalidEmail: string;
    emailRequired: string;
    subjectRequired: string;
  } = {
    invalidEmail: "invalid email",
    emailRequired: "email required*",
    subjectRequired: "subject required",
  };

  $: activeMessagesCount = activeMessages.length;

  onMount(async () => {
    textarea.focus();
    emailInput?.focus();
    let chat = await loadChat();
    activeMessages = [...chat];
    scrollToBottom();
  });

  afterUpdate(() => {
    if (activeMessagesCount && message === "") {
      scrollToBottom();
    }
  });

  function handleKeyup(e) {
    if (e.code === "Enter") {
      sendMessage();
    }
  }
  function sendMessage() {
    dispatch({
      text: message,
      sender: currentUser,
    }).then(async (id) => {
      activeMessages = [...activeMessages, await receive(id)];
      message = "";
    });
  }

  function scrollToBottom() {
    chatWindowBottom.scrollIntoView({ behavior: "smooth" });
  }
</script>

<div class="chat-box">
  <div class="chat-header">
    <div class="hero-header">
      <span>🦜</span>
      <p>Powered by featherbeak</p>
    </div>
    <div>
      <button>-</button>
      <button>x</button>
    </div>
  </div>

  <div class="chat-window">
    {#if false}
      <div class="sign-in-screen">
        {#if signInFailed}
          <div class="error-alert">
            <p>{errorMessage["emailRequired"]}</p>
          </div>
        {/if}
        <div class="container">
          <label for="email"> email </label>
          <input bind:this={emailInput} />
          <label for="subject">subject</label>
          <input />
          <label for="message">message</label>
          <textarea />
          <button>Chat</button>
        </div>
      </div>
    {/if}
    <div class="chat-top">
      <p>beginning of chat</p>
      <div class="divider" />
    </div>
    <ul class="message-list">
      {#each activeMessages as message}
        <ChatMessage {message} {currentUser} />
      {/each}
      <li class="dummy" bind:this={chatWindowBottom} />
    </ul>
  </div>
  <div class="chat-controls-container">
    <!-- TODO: impl for toolbar <div class="chat-toolbar">toolbar</div> -->
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

<style lang="scss">
  $chat-box-height: 500px;
  $chat-box-width: 400px;
  .chat-box {
    position: absolute;
    right: 10px;
    bottom: 120px;
    height: $chat-box-height;
    width: $chat-box-width;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "chat-header"
      "chat-window"
      "chat-action-footer";

    background-color: white;
    .chat-header {
      grid-area: chat-header;
      display: flex;
      justify-content: space-between;
      height: 35px;
      border-bottom: 1px solid lightgray;
      box-shadow: 0px 4px 12px lightgray;
      padding: 10px;
      .hero-header {
        display: flex;
        p {
          font-weight: bold;
          color: slategray;
          font-size: 12px;
          padding-left: 4px;
          margin: 0;
        }
      }
      button {
        border: none;
        cursor: pointer;
        &:hover {
          border: 1px solid lightskyblue;
        }
      }
    }

    .chat-window {
      grid-area: chat-window;
      display: grid;
      background: whitesmoke;
      overflow-y: auto;
      ul {
        list-style: none;
        padding: 8px;
      }
      .message-list {
        align-self: end;
      }
      .chat-top {
        margin-top: 10px;
        margin-bottom: 10px;
        color: gray;
        .divider {
          margin-top: 2px;
          border-bottom: 1px dashed gray;
        }
        p {
          text-align: center;
          padding: 0;
          margin: 0;
          font-size: 10px;
        }
      }
      .sign-in-screen {
        position: absolute;
        z-index: 1;
        height: $chat-box-height - 50px;
        width: $chat-box-width;
        background: whitesmoke;
        .container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 200px;
          padding: 10px;
          margin-top: 60px;
          button {
            margin-top: 40px;
          }
          textarea {
            resize: none;
          }
          label {
            color: gray;
            font-weight: bold;
            font-size: 10px;
            padding: 2px;
          }
        }
        .error-alert {
          border: 2px solid #990000;
          color: red;
          font-size: 10px;
          padding: 0 10px 0 10px;
        }
      }
    }

    .chat-controls-container {
      grid-area: chat-action-footer;

      border-top: 1px solid lightgray;
      box-shadow: 0px 10px 12px lightgray;
      .chat-controls {
        display: flex;
        justify-content: space-between;
        padding: 4px;
        button {
          border: 1px solid lightgray;
        }
      }
      textarea {
        width: 84%;
        resize: none;
        border: 1px solid lightgray;
        margin-right: 4px;
      }
    }
  }
</style>
