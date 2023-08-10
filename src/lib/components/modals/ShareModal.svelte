<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* Svelte built-in libraries */
  import { fade } from 'svelte/transition';

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';

  /* Actions */
  import { outClick } from '$lib/actions/userInteractions/CustomEvents';

  /* Stores */
  import ShareStateManagerStore from '$lib/stores/modalStateManagers/ShareModalStateManagerStore';

  /***********************
   * Implementation
   ***********************/

  $: if (input) input.focus();

  let query = '';
  let input: HTMLInputElement;
</script>

{#if $ShareStateManagerStore.visible}
  <div
    class="fixed inset-0 z-50 flex flex-col items-center bg-gradient-to-bl from-black/60 to-accent-100/60 p-4 backdrop-blur-sm"
    transition:fade={{ duration: 100 }}
  >
    <div
      class="mx-1 flex w-full flex-col gap-4 rounded bg-gray-100 p-4 text-xs lg:w-fit"
      use:outClick={() => {
        ShareStateManagerStore.close();
      }}
    >
      <input
        class="w-full rounded bg-white px-3 py-2 outline-none lg:w-[480px]"
        type="text"
        placeholder="دستور مورد نظر را وارد کنید"
        tabindex="0"
        bind:this={input}
        bind:value={query}
      />
      <div class="flex flex-col gap-3">hello</div>
    </div>
  </div>
{/if}

<style>
  input {
    font-family: Vazir, Ubuntu;
  }
</style>
