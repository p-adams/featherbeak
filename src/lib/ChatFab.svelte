<script lang="ts"></script>

<div class="chat-fab-container">
  <span class="chat-logo">🦜</span>
</div>

<style>
  .chat-fab-container {
    position: absolute;
    right: 0;
    bottom: 0;
    margin-right: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100px;
    width: 100px;
    border-radius: 100%;
    border: 1px solid lightgray;
    box-shadow: 2px 5px 2px lightgray;
    cursor: pointer;
  }
  .chat-fab-container .chat-logo {
    font-size: 4rem;
  }
  .chat-fab-container:hover {
    height: 110px;
    width: 110px;
    border-radius: 100%;
    border: 2px solid lightblue;
  }
</style>
