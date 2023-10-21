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
  export let icon: ComponentType | undefined = undefined;
  let query: string = '';

  let state = States.CLOSED;
  function open(): void {
    state = States.OPENED;
  }
  function close(): void {
    state = States.CLOSED;
  }
  function pick(this: HTMLDivElement) {
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
    class:border-b-transparent={state === States.OPENED && $direction === DropDirectionType.DOWN}
    class:border-t-transparent={state === States.OPENED && $direction === DropDirectionType.UP}
    class:z-20={state === States.OPENED && $direction === DropDirectionType.UP}
    class:rounded-b-none={state === States.OPENED && $direction === DropDirectionType.DOWN}
    class:rounded-t-none={state === States.OPENED && $direction === DropDirectionType.UP}
    class:shadow-lg={state === States.OPENED}
  >
    {#if icon}
      <div class="flex aspect-square w-10 items-center justify-center">
        <svelte:component this={icon} size="15" />
      </div>
    {/if}
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
      class="absolute z-10 flex w-full flex-col overflow-hidden rounded-form-elements border bg-white shadow-lg"
      class:top-full={$direction === DropDirectionType.DOWN}
      class:bottom-full={$direction === DropDirectionType.UP}
      class:rounded-t-none={$direction === DropDirectionType.DOWN}
      class:rounded-b-none={$direction === DropDirectionType.UP}
    >
      <div class="flex flex-col">
        {#each filteredList as item}
          <div
            class="cursor-pointer px-2 py-2 hover:bg-accent-50 hover:text-white"
            on:click={pick}
            on:keypress={pick}
            role="button"
            tabindex="0"
            data-value={item.value}
          >
            {item.label}
          </div>
        {:else}
          <span class="px-4 py-2 text-black/40">موردی یافت نشد.</span>
        {/each}
      </div>
    </div>
  {/if}
</div>
