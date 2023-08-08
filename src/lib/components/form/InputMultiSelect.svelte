<script lang="ts">
  import { writable } from 'svelte/store';
  import { createEventDispatcher, type ComponentType } from 'svelte';
  import * as Icon from 'svelte-ionicons';
  import { twMerge } from 'tailwind-merge';

  import { clickOutside } from '$lib/actions/clickOutside';
  import { dropdownDirection, DropDirectionType } from '$lib/actions/dropDownDirection';

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
  function close(): void {
    state = States.CLOSED;
  }

  $: if (selected.includes('*')) {
    selected = list.map((item) => item.value);
  }
</script>

<div
  class={twMerge('relative text-xs', clazz)}
  use:clickOutside
  use:dropdownDirection={{ threshold: 300, direction }}
  on:clickOutside={close}
>
  <button
    class="relative flex w-full gap-2 divide-x divide-x-reverse rounded-form-elements border bg-white p-2"
    on:click={toggle}
  >
    <svelte:component this={icon} size="15" />
    <div class="flex items-center gap-3">
      <div class="px-2 leading-4">
        {#if selected.length === list.length}
          همه
        {:else if selected.length === 0}
          هیچکدام
        {:else}
          {selected.map((value) => list.find((item) => item.value === value)?.label).join(', ')}
        {/if}
      </div>
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
      class="absolute z-10 flex w-full flex-col overflow-hidden rounded-default border bg-white py-2"
      class:top-full={$direction === DropDirectionType.DOWN}
      class:translate-y-2={$direction === DropDirectionType.DOWN}
      class:bottom-full={$direction === DropDirectionType.UP}
      class:-translate-y-2={$direction === DropDirectionType.UP}
    >
      {#each list as item}
        <div
          class="cursor-pointer px-4 py-3 hover:bg-black/5"
          role="button"
          tabindex="0"
          data-value={item.value}
          on:click={() => {
            if (!selected.includes(item.value)) selected = [...selected, item.value];
            else selected = selected.filter((value) => value !== item.value);
          }}
          on:keypress={() => {}}
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
