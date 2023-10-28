<svelte:options accessors />

<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* Svelte built-in libraries */
  import { fade } from 'svelte/transition';

  /* Actions */
  import { overClass } from '$lib/actions/elementEnhancements/OverClass';

  /***********************
   * Implementation
   ***********************/

  export let name = '';
  export let placeholder = '';
  export let value = '';

  let clazz = '';
  export { clazz as class };

  export let errorMessage = '';
  export function displayError(message: string) {
    errorMessage = message;
  }
  export function clearError() {
    errorMessage = '';
  }
</script>

<div class="flex flex-col gap-1">
  {#if errorMessage !== ''}
    <span class="text-xs text-red-500" in:fade={{ duration: 300 }} out:fade>{errorMessage}</span>
  {/if}
  <textarea
    class="rounded-form-elements border p-3 outline-none"
    {name}
    {placeholder}
    use:overClass={clazz}
    bind:value
  />
</div>
