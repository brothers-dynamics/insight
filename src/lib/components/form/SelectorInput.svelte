<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* Svelte built-in libraries */
  import { writable } from 'svelte/store';
  import { createEventDispatcher, type ComponentType } from 'svelte';

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';
  import type { Maybe } from 'houdini';

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

  type Option = {
    label: string;
    value: string;
  };

  const dispatch = createEventDispatcher();

  export let list: Option[];
  export let selected: string;
  export let icon: Maybe<ComponentType> = undefined;

  let state = States.CLOSED;
  function toggle(): void {
    state = Number(!state);
  }
  function close(): void {
    state = States.CLOSED;
  }
  function select(this: HTMLDivElement) {
    let newSelected = this.getAttribute('data-value') as string;
    if (selected !== newSelected) {
      dispatch('change', {
        item: list.find((item) => item.value === newSelected)
      });
    }
    selected = newSelected;
    close();
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
    class="relative flex min-h-[34px] w-full gap-2 divide-x divide-x-reverse rounded-form-elements border bg-white p-2"
    on:click={toggle}
    class:border-b-transparent={state === States.OPENED && $direction === DropDirectionType.DOWN}
    class:border-t-transparent={state === States.OPENED && $direction === DropDirectionType.UP}
    class:z-20={state === States.OPENED && $direction === DropDirectionType.UP}
    class:rounded-b-none={state === States.OPENED && $direction === DropDirectionType.DOWN}
    class:rounded-t-none={state === States.OPENED && $direction === DropDirectionType.UP}
    class:shadow-lg={state === States.OPENED}
  >
    {#if icon}
      <svelte:component this={icon} size="15" />
    {/if}
    <div class="flex items-center gap-3">
      <div class="px-2 leading-4">{list.find((item) => item.value === selected)?.label || ''}</div>
      <Icon.ChevronBack
        class="absolute left-2 top-1/2 -translate-y-1/2  duration-100 {state === States.OPENED
          ? '-rotate-90'
          : ''}"
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
  {/if}
</div>
