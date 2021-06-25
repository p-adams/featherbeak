<script lang="ts">
  import ChatBox from "./lib/ChatBox.svelte";
</script>

<main>
  <section>
    <h3>ChatBox Demo</h3>
  </section>
  <ChatBox />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    height: 100vh;
  }
  section {
    text-align: center;
  }
</style>
