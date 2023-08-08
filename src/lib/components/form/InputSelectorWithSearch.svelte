<script lang="ts">
  import { createEventDispatcher, type ComponentType } from 'svelte';
  import * as Icon from 'svelte-ionicons';
  import { twMerge } from 'tailwind-merge';

  import { clickOutside } from '$lib/actions/clickOutside';

  let clazz = '';
  export { clazz as class };

  const enum States {
    OPENED,
    CLOSED
  }

  const dispatch = createEventDispatcher();

  export let list: Array<{ label: string; value: string }>;
  export let selected: string;
  export let icon: ComponentType;
  let query: string = '';

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

  let filteredList: ListItem[];

  $: filteredList = list.filter((item) => item.label.includes(query));
</script>

<div class={twMerge('relative text-xs', clazz)} use:clickOutside on:clickOutside={close}>
  <button
    class="relative flex w-full gap-2 divide-x divide-x-reverse rounded-form-elements border bg-white p-2"
    on:click={toggle}
  >
    <svelte:component this={icon} size="15" />
    <div class="flex items-center gap-3">
      <div class="px-2 leading-4">{list.find((item) => item.value === selected)?.label}</div>
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
      class="absolute top-full z-10 flex max-h-80 w-full translate-y-2 flex-col overflow-hidden rounded-default border bg-white"
    >
      <div class="relative">
        <input
          class="w-full bg-black/5 p-2 outline-none"
          type="text"
          placeholder="جستوجو"
          bind:value={query}
        />
      </div>
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
