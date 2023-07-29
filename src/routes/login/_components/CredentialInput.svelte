<script lang="ts">
  import type { ComponentType } from 'svelte';

  export let placeholder: string;
  export let type = 'text';
  export let icon: ComponentType;
  export let invalid = true;

  export let value: string = '';
</script>

<div class="relative flex h-10 rounded-b-xl overflow-hidden">
  <div class="relative w-10 bg-accent-100">
    <svelte:component
      this={icon}
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      tabindex="-1"
    />
  </div>
  {#if type === 'text'}
    <input class="px-4 pt-1 grow text-black outline-none" type="text" {placeholder} bind:value />
  {:else}
    <input
      class="px-4 pt-1 grow text-black outline-none"
      type="password"
      {placeholder}
      bind:value
    />
  {/if}
  {#if invalid && !value}
    <div
      class="absolute left-3 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-red-600 origin-center animate-ping animate-duration-[2s] animate-once animate-fill-forwards"
    />
  {/if}
</div>
