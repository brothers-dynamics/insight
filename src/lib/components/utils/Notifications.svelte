<script lang="ts">
  // TODO: use svelte tweened for progress bar width change

  /***********************
   * Dependencies
   ***********************/

  /* Svelte built-in libraries */
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';

  /* Stores */
  import NotificationsStateManagerStore from '$lib/stores/utils/NotificationsStateManagerStore';

  /***********************
   * Implementation
   ***********************/

  const colorSchema = {
    Success: 'bg-accent-80',
    Error: 'bg-red-600/80'
  };
</script>

<div
  class="fixed right-0 top-2 z-50 flex w-full flex-col gap-2 px-2 text-sm sm:bottom-5 sm:right-5 sm:top-auto sm:px-0"
>
  {#each $NotificationsStateManagerStore.list as notification (notification)}
    <div
      class="relative flex w-full gap-2 overflow-hidden rounded p-3 text-white shadow-md backdrop-blur-sm sm:w-[500px] {colorSchema[
        notification.type
      ]}"
      transition:fly={{ delay: 250, duration: 300, x: 300, easing: quintOut }}
    >
      <div
        class="absolute bottom-0 right-0 h-1 w-full bg-black/30 duration-100"
        style="width: {notification.getRemainingPercentage()}%"
      />
      {#if notification.type === 'Success'}
        <Icon.CheckmarkCircle size="18" />
      {:else}
        <Icon.AlertCircle size="18" />
      {/if}
      <span>{notification.message}</span>
    </div>
  {/each}
</div>
