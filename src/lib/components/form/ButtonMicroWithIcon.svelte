<script lang="ts">
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

<button class="flex h-5 gap-2 text-black/60" {disabled} use:overClass={clazz} on:click={click}>
  <span
    class="flex items-center gap-1 rounded-lg px-3 text-[10px] font-bold text-black/50 hover:text-black"
    class:py-2={waiting}
  >
    {#if waiting}
      <Waiting size="6" />
    {:else}
      <span class="relative top-[0.5px]">{label}</span>
      <svelte:component this={icon} size="10" />
    {/if}
  </span>
</button>
