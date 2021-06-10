<script lang="ts">
import { afterUpdate, onMount } from 'svelte';


    import type { Message, Sender } from '../data-types/message'
    let message = ""
    let currentUser: Sender = {
        id: '0001',
        username: 'F404'
    }

    let currentUser2:Sender = {
        id: '0002',
        username: 'QWERTY43'
    }
  
    let messages: Array<Message> = [
        {
            id: 'ca58c682-c5d3-11eb-8cb9-000000000000',
            text: "Hello",
            sender: currentUser
        },
        {
            id: 'd897a1e4-c5d3-11eb-84a6-9078413a1e98',
            text: "Hey, how's it going?",
            sender: currentUser2
        },
        {
            id: 'e8f468f6-c5d3-11eb-84a6-9078413a1e98',
            text: "Oh, pretty good. How about you?",
            sender: currentUser
        }
    ]
    function getMessages() {
        return messages
    }
    async function loadChat() {
        const messages = await getMessages()
        return messages
    }
    function sendMessage() {
        messages = [...messages, {
            id: 'key',
            text: message,
            sender: currentUser,
            timestamp: new Date()
        }]
        loadingChat = loadChat()
        message = ""
    }
    let loadingChat = loadChat()
</script>


<div class="chat-box">
    <div class="chat-container">
        <div class="chat-window">
            {#await loadingChat}
                <p>loading chat...</p>
            {:then messages}
                <ul>
                <div class="chat-top">
                    <div class="divider"/>
                        <p>beginning of chat</p>
                    <div class="divider"/>
                </div>
                {#each messages as message}
                    <li class="{message.sender.id === currentUser.id ? 'user-message' : ''}">
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
            <textarea bind:value={message}></textarea>
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