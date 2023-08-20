<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';
  import { twMerge } from 'tailwind-merge';

  /* Components */
  import PickWithSuggestInput from './PickWithSuggestInput.svelte';

  /***********************
   * Implementation
   ***********************/

  let clazz = '';
  export { clazz as class };

  export let list: Array<{ label: string; value: string }>;
  export let tags: Array<{ label: string; value: string }> = [];

  function removeTag() {
    let selected = this.getAttribute('data-value') as string;
    tags = tags.filter((tag) => tag.value !== selected);
  }
</script>

<div class="flex flex-col gap-3 text-xs">
  <PickWithSuggestInput
    class={twMerge('w-full', clazz || '')}
    icon={Icon.Pricetag}
    list={list.filter((item) => !Object.values(tags).includes(item))}
    on:pick={({ detail }) => {
      tags = [...tags, detail.item];
    }}
  />
  <div class="flex flex-wrap gap-2">
    {#each tags as tag}
      <button
        class="flex cursor-pointer items-center gap-1 rounded-xl bg-accent-75 px-2 py-1 text-white opacity-80 hover:opacity-100"
        data-value={tag.value}
        on:click={removeTag}
      >
        <span>{tag.label}</span>
        <Icon.CloseCircle size="13" />
      </button>
    {/each}
  </div>
</div>
