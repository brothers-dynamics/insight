<script lang="ts">
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

  const dispatch = createEventDispatcher();

  let clazz = '';
  export { clazz as class };

  export let options: Array<{ label: string; value: string | number; icon?: ComponentType }>;
  export let selected: string | number;

  function select(this: HTMLButtonElement) {
    let newSelected = this.getAttribute('data-value') as string;
    if (selected !== newSelected) {
      dispatch('change', {
        item: options.find((item) => item.value === newSelected)
      });
    }
    selected = newSelected;
  }
</script>

<div class="flex gap-2 text-xs" use:overClass={clazz}>
  {#each options as option, i (i)}
    <button
      class="flex gap-1 rounded-lg px-2 py-1 text-black duration-75"
      class:bg-accent-80={selected === option.value}
      class:text-white={selected === option.value}
      class:cursor-default={selected === option.value}
      class:hover:bg-accent-50={selected !== option.value}
      class:hover:text-white={selected !== option.value}
      class:bg-accent-10={selected !== option.value}
      data-value={option.value}
      on:click={select}
    >
      {#if option.icon}
        <svelte:component this={option.icon} size="14" />
      {/if}
      <span>{option.label}</span>
    </button>
  {/each}
</div>
