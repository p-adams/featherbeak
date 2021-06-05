<script lang="ts">
  import ChatBox from './lib/ChatBox.svelte'
</script>

<main>
  <section>
    <h3>ChatBox</h3>
    <h5>Powered by featherbeak 🦜</h5>
  </section>
  <ChatBox/>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    height: 100vh;
  }
  section {
    text-align: center;
  }
</style>
