<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* Actions */
  import { overClass } from '$lib/actions/elementEnhancements/OverClass';

  /***********************
   * Implementation
   ***********************/

  export let placeholder = '';
  export let value = '';

  let clazz = '';
  export { clazz as class };
</script>

<textarea
  class="rounded-form-elements border p-3 outline-none"
  {placeholder}
  use:overClass={clazz}
  bind:value
/>
