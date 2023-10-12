<script lang="ts">
  // TODO: maybe create a custom click function that automatically set state to waiting and if the callback returns true show some message or reset

  /***********************
   * Dependencies
   ***********************/

  /* Svelte built-in libraries */
  import { createEventDispatcher, type ComponentType } from 'svelte';
  const dispatch = createEventDispatcher();

  /* Actions */
  import { overClass } from '$lib/actions/elementEnhancements/OverClass';

  /* Components */
  import Waiting from '$lib/components/utils/Waiting.svelte';

  /***********************
   * Implementation
   ***********************/

  let clazz = '';
  export { clazz as class };

  export let label: string;
  export let iconSize = 22;
  export let icon: ComponentType;
  export let disabled = false;
  export let waiting = false;

  function click() {
    disabled = true;
    waiting = true;
    dispatch('click', {
      done: () => {
        disabled = false;
        waiting = false;
      }
    });
  }
</script>

<button
  class="group relative flex h-10 cursor-pointer items-center gap-3 rounded bg-accent-60 px-7 py-3 text-xs text-white duration-75 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:opacity-50 sm:w-fit"
  {disabled}
  use:overClass={clazz}
  on:click={click}
>
  {#if waiting}
    <Waiting size="8" />
  {:else}
    <svelte:component this={icon} size={iconSize} class="group-active:scale-90" />
  {/if}
  <span class="text-sm">{label}</span>
  <slot />
</button>
