<script lang="ts">
  /***********************
   * Dependencies
   ***********************/
  /* Svelte built-in libraries */
  import type { ComponentType } from 'svelte';

  /* Actions */
  import { overClass } from '$lib/actions/elementEnhancements/OverClass';

  /***********************
   * Implementation
   ***********************/

  export let placeholder = '';
  export let icon: ComponentType;
  export let type: 'text' | 'password' = 'text';
  export let value = '';

  let clazz = '';
  export { clazz as class };
</script>

<div class="relative" use:overClass={clazz}>
  <svelte:component
    this={icon}
    size={18}
    class="absolute right-2 top-1/2 -translate-y-1/2 text-black/70"
  />
  {#if type === 'text'}
    <input
      class="h-full w-full rounded-form-elements border border-black/10 px-4 py-2 pr-8 text-xs outline-none"
      type="text"
      {placeholder}
      bind:value
    />
  {:else}
    <input
      class="h-full w-full rounded-form-elements border border-black/10 px-4 py-2 pr-8 text-xs outline-none"
      type="password"
      {placeholder}
      bind:value
    />
  {/if}
</div>
