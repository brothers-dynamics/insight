<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* Svelte built-in libraries */
  import { writable } from 'svelte/store';
  import { createEventDispatcher, type ComponentType } from 'svelte';

  /* Actions */
  import { outClick } from '$lib/actions/userInteractions/CustomEvents';
  import {
    dropdownDirector,
    DropDirectionType
  } from '$lib/actions/elementEnhancements/DropDownDirector';
  import { overClass } from '$lib/actions/elementEnhancements/OverClass';

  /***********************
   * Implementation
   ***********************/

  let direction = writable(DropDirectionType.DOWN);

  let clazz = '';
  export { clazz as class };

  const enum States {
    OPENED,
    CLOSED
  }

  const dispatch = createEventDispatcher();

  export let list: Array<{ label: string; value: string }>;
  export let icon: ComponentType;
  let query: string = '';

  let state = States.CLOSED;
  function open(): void {
    state = States.OPENED;
  }
  function close(): void {
    state = States.CLOSED;
  }
  function select(this: HTMLDivElement) {
    let picked = this.getAttribute('data-value') as string;
    dispatch('pick', {
      item: list.find((item) => item.value === picked)
    });
    query = '';
    close();
  }

  let filteredList: Array<{ label: string; value: string }>;

  $: filteredList = list.filter((item) => item.label.includes(query));
</script>

<div
  class="relative text-xs"
  use:overClass={clazz}
  use:outClick={() => {
    close();
  }}
  use:dropdownDirector={{ threshold: 300, direction }}
>
  <div
    class="relative flex w-full divide-x divide-x-reverse overflow-hidden rounded-form-elements border bg-white"
  >
    <div class="flex aspect-square w-10 items-center justify-center">
      <div class="jus flex" />
      <svelte:component this={icon} size="15" />
    </div>
    <input
      class="w-full p-2 outline-none"
      type="text"
      placeholder="جستوجو..."
      on:focus={open}
      bind:value={query}
    />
  </div>
  {#if state === States.OPENED}
    <div
      class="absolute z-10 flex max-h-80 w-full flex-col overflow-hidden overflow-y-auto rounded-default border bg-white"
      class:top-full={$direction === DropDirectionType.DOWN}
      class:translate-y-2={$direction === DropDirectionType.DOWN}
      class:bottom-full={$direction === DropDirectionType.UP}
      class:-translate-y-2={$direction === DropDirectionType.UP}
    >
      <div class="flex flex-col">
        {#each filteredList as item}
          <div
            class="cursor-pointer px-2 py-2 hover:bg-accent-50 hover:text-white"
            on:click={select}
            on:keypress={select}
            role="button"
            tabindex="0"
            data-value={item.value}
          >
            {item.label}
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>