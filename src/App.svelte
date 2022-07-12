<script lang="ts">
  import LiveChat from "./lib/LiveChat/LiveChat.svelte";
</script>

<main>
  <section>
    <h3>ChatBox Demo</h3>
  </section>
  <LiveChat />
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
