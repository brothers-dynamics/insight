<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import * as Icon from 'svelte-ionicons';

  import { clickOutside } from '$lib/actions/clickOutside';

  let clazz: string;
  export { clazz as class };

  type ListItem = {
    label: string;
    value: string;
  };
  const enum States {
    OPENED,
    CLOSED
  }

  const dispatch = createEventDispatcher();

  export let list: ListItem[];
  export let selected: string;

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
        value: newSelected
      });
    }
    selected = newSelected;
  }
</script>

<div class="absolute text-xs {clazz || ''}">
  <button
    class="relative flex gap-2 w-full divide-x divide-x-reverse bg-white p-2 border rounded-lg"
    use:clickOutside
    on:click={toggle}
    on:clickOutside={close}
  >
    <Icon.GitMerge size="15" />
    <div class="flex gap-3 items-center">
      <div class="px-2 leading-4">{list.find((item) => item.value === selected)?.label}</div>
      <Icon.ChevronDown
        class="absolute left-2 top-1/2 -translate-y-1/2 duration-100 rotate-90 {state ===
        States.OPENED
          ? 'rotate-0'
          : ''}"
        size="13"
      />
    </div>
  </button>
  {#if state === States.OPENED}
    <div
      class="absoltue flex flex-col top-full translate-y-2 w-full bg-white border rounded-md overflow-hidden"
    >
      {#each list as item}
        <div
          class="px-2 py-2 cursor-pointer hover:bg-accent-50 hover:text-white"
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
