<script lang="ts">
  // TODO: create a input type hidden so i can use this component as form field (i can then use a svelte form action)

  /***********************
   * Dependencies
   ***********************/

  /* Svelte built-in libraries */
  import { writable } from 'svelte/store';
  import { createEventDispatcher, type ComponentType } from 'svelte';

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';

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
  export let selected: string[] = [];
  export let icon: ComponentType;

  let state = States.CLOSED;
  function toggle(): void {
    state = Number(!state);
  }
  function open(): void {
    state = States.OPENED;
  }
  function close(): void {
    state = States.CLOSED;
  }

  $: if (selected.includes('*')) {
    selected = list.map((item) => item.value);
  }
</script>

<div
  class="relative text-xs"
  use:overClass={clazz}
  use:outClick={() => {
    close();
  }}
  use:dropdownDirector={{ threshold: 300, direction }}
>
  <button
    class="relative flex h-full w-full gap-2 divide-x divide-x-reverse rounded-form-elements border bg-white p-2"
    on:click={toggle}
    class:border-b-transparent={state === States.OPENED && $direction === DropDirectionType.DOWN}
    class:border-t-transparent={state === States.OPENED && $direction === DropDirectionType.UP}
    class:z-20={state === States.OPENED && $direction === DropDirectionType.UP}
    class:rounded-b-none={state === States.OPENED && $direction === DropDirectionType.DOWN}
    class:rounded-t-none={state === States.OPENED && $direction === DropDirectionType.UP}
    class:shadow-lg={state === States.OPENED}
  >
    <svelte:component this={icon} class="h-full shrink-0" size="15" />
    <div class="flex h-full w-full items-center gap-3">
      <div class="line-clamp-1 px-2 text-right leading-4">
        {#if selected.length === list.length}
          همه
        {:else if selected.length === 0}
          هیچکدام
        {:else}
          {selected.map((value) => list.find((item) => item.value === value)?.label).join(', ')}
        {/if}
      </div>
      <Icon.ChevronBack
        class="mr-auto shrink-0 duration-100 {state === States.OPENED ? '-rotate-90' : ''}"
        size="13"
      />
    </div>
  </button>
  {#if state === States.OPENED}
    <div
      class="absolute z-10 flex w-full flex-col overflow-hidden rounded-form-elements border bg-white shadow-lg"
      class:top-full={$direction === DropDirectionType.DOWN}
      class:bottom-full={$direction === DropDirectionType.UP}
      class:rounded-t-none={$direction === DropDirectionType.DOWN}
      class:rounded-b-none={$direction === DropDirectionType.UP}
    >
      {#each list as item}
        <div
          class="cursor-pointer px-2 py-3 hover:bg-black/5"
          role="button"
          tabindex="0"
          data-value={item.value}
          on:click={() => {
            if (!selected.includes(item.value)) selected = [...selected, item.value];
            else selected = selected.filter((value) => value !== item.value);
          }}
          on:keypress={() => {
            'pass';
          }}
        >
          <div class="flex gap-2">
            <div
              class="aspect-square w-4 rounded-md bg-black/10 p-1"
              class:!bg-accent-60={selected.includes(item.value)}
            />
            <span>{item.label}</span>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
