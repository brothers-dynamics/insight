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
  export let type: 'text' | 'password' = 'text';
  export let value = '';

  let clazz = '';
  export { clazz as class };
</script>

{#if type === 'text'}
  <input
    class="w-full rounded-form-elements border border-black/10 px-4 py-2 text-xs outline-none"
    type="text"
    tabindex="0"
    {placeholder}
    use:overClass={clazz}
    bind:value
  />
{:else}
  <input
    class="w-full rounded-form-elements border border-black/10 px-4 py-2 text-xs outline-none"
    type="password"
    tabindex="0"
    {placeholder}
    use:overClass={clazz}
    bind:value
  />
{/if}
