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
  <div class="flex flex-col flex-wrap md:flex-row md:items-end lg:h-[40px]">
    <div class="flex gap-2 rounded bg-white p-2 pl-6 shadow-md lg:w-fit">
      <svelte:component this={icon} size="23" />
      <span>{label}</span>
    </div>
    <div class="mt-3 flex flex-col flex-wrap gap-2 md:mr-auto md:flex-row lg:mt-0 lg:h-full">
      <slot name="strip" />
    </div>
  </div>
  <slot />
</div>
