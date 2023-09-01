<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  import { page } from '$app/stores';

  /* 3rd party libraries */
  import '../app.css';

  /* Stores */
  import NavigationParams from '$lib/stores/core/NavigationParams';

  /* Components */
  import FakeProgressBar from '$lib/components/utils/FakeProgressBar.svelte';
  import { browser } from '$app/environment';

  /***********************
   * Implementation
   ***********************/

  if (browser) {
    page.subscribe(() => {
      NavigationParams.update(() => {
        const params: any = {};
        for (const key in history.state) {
          params[key] = history.state[key];
        }
        return params;
      });
    });
  }
</script>

<svelte:head>
  <title>Insight</title>
  <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
</svelte:head>

<FakeProgressBar />

<div class="global-wrapper relative flex h-full w-full flex-col overflow-hidden md:flex-row">
  <div class="fixed inset-0 -z-50 bg-shady" />
  <slot />
</div>
