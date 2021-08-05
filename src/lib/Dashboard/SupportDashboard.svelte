<script>
</script>

<div class="support-dashboard">
  <div class="insights-container">insights</div>
  <div class="chat-list">chat-list</div>
  <div class="chat-box">
    <!-- TODO: implement tabbed chat window  -->chat-box
  </div>
</div>

<style lang="scss">
  .support-dashboard {
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-template-rows: 150px 1fr 330px;
    grid-template-areas:
      "insights insights"
      "chat-list chat-box"
      "chat-list chat-box";
    gap: 10px;
    > * {
      border: 1px solid grey;
    }
    .insights-container {
      grid-area: insights;
    }

    .chat-list {
      grid-area: chat-list;
    }
    .chat-box {
      grid-area: chat-box;
    }
  }
</style>
