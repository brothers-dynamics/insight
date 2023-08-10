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

  let clazz: string;
  export { clazz as class };

  export let label: string;
  export let icon: ComponentType;
</script>

<div class="flex flex-col gap-4" use:overClass={clazz}>
  <div class="flex w-fit gap-2 rounded bg-white p-2 pl-6">
    <svelte:component this={icon} size="23" />
    <span>{label}</span>
  </div>
  <slot />
</div>
