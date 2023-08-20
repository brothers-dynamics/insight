<script lang="ts">
  // TODO: waiting and disabled mode must be implemented

  /***********************
   * Dependencies
   ***********************/

  /* Svelte built-in libraries */
  import { createEventDispatcher, type ComponentType } from 'svelte';

  /* Actions */
  import { overClass } from '$lib/actions/elementEnhancements/OverClass';

  /***********************
   * Implementation
   ***********************/

  let clazz = '';
  export { clazz as class };

  export let label: string;
  export let description: string;
  export let icon: ComponentType;
  export let disabled = true;
</script>

<button
  class="mt-5 flex cursor-pointer gap-3 rounded bg-green-600/80 px-6 py-3 text-white hover:bg-green-600"
  {disabled}
  use:overClass={clazz}
>
  <div class="flex h-full">
    <svelte:component this={icon} size="40" />
  </div>
  <div class="flex flex-col text-right">
    <span class="text-base">{label}</span>
    <span class="text-white/80">{description}</span>
  </div>
</button>
