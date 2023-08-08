<script>
  import '../app.css';
</script>

<svelte:head>
  <title>Insight</title>
  <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
</svelte:head>

<div class="global-wrapper relative flex min-h-full w-full flex-col md:flex-row">
  <div class="fixed inset-0 -z-50 bg-shady" />
  <slot />
</div>

<style>
  :global(html) {
    min-height: 100%;
  }
  :global(body) {
    position: absolute;
    font-family: 'Vazir', 'Ubuntu';
    direction: rtl;
    height: 100%;
  }
  :global(svg) {
    outline: none;
  }
  :global(*::-webkit-scrollbar-track) {
    -webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.3);
    @apply bg-accent-15;
  }
  :global(*::-webkit-scrollbar) {
    width: 4px;
    height: 4px;
    @apply bg-accent-15;
  }
  :global(*::-webkit-scrollbar-thumb) {
    @apply bg-accent-100;
  }
</style>
