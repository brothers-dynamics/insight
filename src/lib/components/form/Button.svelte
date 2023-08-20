<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* Svelte built-in libraries */
  // import { createEventDispatcher, type ComponentType } from 'svelte';

  /* Actions */
  import { overClass } from '$lib/actions/elementEnhancements/OverClass';

  /***********************
   * Implementation
   ***********************/

  let clazz = '';
  export { clazz as class };

  export let label: string;
  export let disabled = true;
</script>

<button
  class="cursor-pointer gap-2 rounded bg-green-600/80 px-6 py-3 text-white hover:bg-green-600"
  {disabled}
  use:overClass={clazz}
>
  {label}
</button>
