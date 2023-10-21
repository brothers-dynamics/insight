<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* Svelte built-in libraries */
  import { page } from '$app/stores';
  import type { ComponentType } from 'svelte';

  /***********************
   * Implementation
   ***********************/

  export let label: string;
  export let icon: ComponentType;
  export let path: string;
  export let count: number = 0;

  export let active: boolean = false;

  $: active = $page.url.pathname.includes(path);
</script>

<a
  class="relative flex h-6 cursor-pointer items-center gap-2 overflow-hidden rounded-3xl py-5 outline-none duration-75"
  class:text-gray-500={!active}
  class:text-accent-90={active}
  class:font-bold={active}
  class:hover:text-black={!active}
  href={'/app/' + path}
>
  {#if count}
    <div
      class="absolute left-0 rounded-md rounded-tr-none bg-accent-70 px-2 py-px text-center text-[11px] text-white"
    >
      {count}
    </div>
  {/if}
  <svelte:component this={icon} class="relative bottom-px" size="18" tabindex="-1" />
  <span>{label}</span>
</a>
