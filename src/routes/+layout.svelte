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
