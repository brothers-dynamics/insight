<svelte:options accessors />

<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* Svelte built-in libraries */
  import { fade } from 'svelte/transition';
  
  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';

  /* Actions */
  import { overClass } from '$lib/actions/elementEnhancements/OverClass';

  /* Components */
  import PickWithSuggestInput from './PickWithSuggestInput.svelte';

  /***********************
   * Implementation
   ***********************/

  let clazz = '';
  export { clazz as class };

  export let errorMessage = '';
  export function displayError(message: string) {
    errorMessage = message;
  }
  export function clearError() {
    errorMessage = '';
  }

  export let list: Array<{ label: string; value: string }>;
  export let values: Array<{ label: string; value: string }> = [];

  function removeTag(this: HTMLElement) {
    let selected = this.getAttribute('data-value') as string;
    values = values.filter((value) => value.value !== selected);
  }
</script>

<div class="flex flex-col gap-1">
  {#if errorMessage !== ''}
    <span class="text-xs text-red-500" in:fade={{ duration: 300 }} out:fade>{errorMessage}</span>
  {/if}
  <div class="flex flex-col gap-3 text-xs" use:overClass={clazz}>
    <PickWithSuggestInput
      class="w-full"
      icon={Icon.Pricetag}
      list={list.filter((item) => !Object.values(values).includes(item))}
      on:pick={({ detail }) => {
        values = [...values, detail.item];
      }}
    />
    <div class="flex flex-wrap gap-2">
      {#each values as value}
        <button
          class="flex cursor-pointer items-center gap-1 rounded-xl bg-accent-75 px-2 py-1 text-white opacity-80 hover:opacity-100"
          data-value={value.value}
          on:click={removeTag}
        >
          <span>{value.label}</span>
          <Icon.CloseCircle size="13" />
        </button>
      {/each}
    </div>
  </div>
</div>
