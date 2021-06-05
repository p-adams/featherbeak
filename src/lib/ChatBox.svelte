<script lang="ts">

    import type { Message } from '../data-types/message'
  
    let messages: Array<Message> = [
        {
            id: 'ca58c682-c5d3-11eb-8cb9-000000000000',
            text: "Hello",
            sender: {
                id: '0001',
                username: 'F404'
            }
        },
        {
            id: 'd897a1e4-c5d3-11eb-84a6-9078413a1e98',
            text: "Hey, how's it going?",
            sender: {
                id: '0002',
                username: 'QWERTY43'
            }
        },
        {
            id: 'e8f468f6-c5d3-11eb-84a6-9078413a1e98',
            text: "Oh, pretty good. How about you?",
            sender: {
                id: '0001',
                username: 'F404'
            }
        }
    ]
    function getMessages() {
        return messages
    }
    async function loadChat() {
        const messages = await getMessages()
        return messages
    }
   const loadingChat = loadChat()
</script>


<div class="chat-box">
    <div class="chat-container">
        <div class="chat-window">
            {#await loadingChat}
                <p>loading chat...</p>
            {:then messages}
                <ul>
                {#each messages as message}
                    <li>
                       [{message.sender.username}]: {message.text}
                    </li>
                {/each}
                </ul>
            {:catch error}
                <p>something went wrong: {error.message}</p>
            {/await}

        </div>
        <div class="chat-controls">
            <textarea></textarea>
            <button>Send</button>
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