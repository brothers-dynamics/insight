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
  class="flex h-10 cursor-pointer items-center gap-3 rounded bg-green-600/80 px-6 py-3 text-white hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-70"
  {disabled}
  use:overClass={clazz}
  on:click={click}
>
  {#if waiting}
    <Waiting size="8" />
  {:else}
    <svelte:component this={icon} size={iconSize} />
  {/if}
  <span class="text-sm">{label}</span>
</button>
