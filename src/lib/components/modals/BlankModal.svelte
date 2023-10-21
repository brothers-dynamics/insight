<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* Svelte built-in libraries */
  import { fade } from 'svelte/transition';

  /* Actions */
  import { outClick } from '$lib/actions/userInteractions/CustomEvents';

  /* Stores */
  import BlankModalStateManagerStore from '$lib/stores/modalStateManagers/BlankModalStateManagerStore';
</script>

{#if $BlankModalStateManagerStore.visible}
  <div
    class="fixed inset-0 z-[40] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
    transition:fade={{ duration: 100 }}
  >
    <div
      class="flex h-fit w-full flex-col gap-4 rounded bg-white p-5 sm:top-16"
      style="width: {$BlankModalStateManagerStore.width}px;"
      use:outClick={() => {
        BlankModalStateManagerStore.close();
      }}
    >
      <svelte:component this={$BlankModalStateManagerStore.body} />
    </div>
  </div>
{/if}
