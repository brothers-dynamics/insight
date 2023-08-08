<script lang="ts">
  import type { ComponentType } from 'svelte';

  export let placeholder: string;
  export let type = 'text';
  export let icon: ComponentType;
  export let invalid = true;

  export let value: string = '';
</script>

<div class="relative flex h-10 overflow-hidden rounded-b-xl">
  <div class="relative w-10 bg-accent-100">
    <svelte:component
      this={icon}
      size="18"
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      tabindex="-1"
    />
  </div>
  {#if type === 'text'}
    <input class="grow px-4 pt-1 text-black outline-none" type="text" {placeholder} bind:value />
  {:else}
    <input
      class="grow px-4 pt-1 text-black outline-none"
      type="password"
      {placeholder}
      bind:value
    />
  {/if}
  {#if invalid && !value}
    <div
      class="absolute left-3 top-1/2 h-1 w-1 origin-center -translate-y-1/2 animate-ping rounded-full bg-red-600 animate-duration-[2s] animate-fill-forwards animate-once"
    />
  {/if}
</div>
