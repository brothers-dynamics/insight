<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* 3rd party libraries */
  import '../app.css';

  /* Components */
  import FakeProgressBar from '$lib/components/utils/FakeProgressBar.svelte';
</script>

<svelte:head>
  <title>Insight</title>
  <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
</svelte:head>

<FakeProgressBar />

<div class="global-wrapper relative flex min-h-full w-full flex-col md:flex-row">
  <div class="fixed inset-0 -z-50 bg-shady" />
  <slot />
</div>
