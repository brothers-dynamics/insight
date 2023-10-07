<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* 3rd party libraries */
  import type { Prisma } from '@prisma/client';
  import * as Icon from 'svelte-ionicons';

  /* Actions */
  import { goto } from '$app/navigation';
  import { overClass } from '$lib/actions/elementEnhancements/OverClass';

  /***********************
   * Implementation
   ***********************/

  let clazz = '';
  export { clazz as class };

  export let data: Prisma.TagGetPayload<{
    include: {
      documents: true;
    };
  }>;

  let mode: 'Read' | 'Write' = 'Read';
  let newName = data.name;
  let newDescription = data.description;
  let newNameElement: HTMLInputElement;

  $: newNameElement && newNameElement.focus();

  function changeModeToWrite() {
    mode = 'Write';
  }
  function cancelWriting() {
    mode = 'Read';
    newName = data.name;
    newDescription = data.description;
  }
  function updateTag() {
    // todo
    data.name = newName;
    data.description = newDescription;
    cancelWriting();
  }
  function deleteTag() {
    // todo
  }

  function searchForTagDocuments() {
    goto('/app/search', {
      state: {
        config: {
          title: data.name
        }
      }
    });
  }
</script>

<div
  class="relative flex h-24 w-full gap-3 overflow-hidden rounded-xl rounded-bl-none bg-accent-10 p-2 sm:w-[calc((100%-0.5rem)/2)] lg:w-[calc((100%-0.5rem*2)/3)] xl:w-[calc((100%-0.5rem*3)/4)]"
  use:overClass={clazz}
>
  <Icon.PricetagOutline size="100" class="absolute left-2 top-2 z-0 text-accent-5" />
  <div
    class="absolute bottom-2 right-2 flex shrink-0 items-center justify-center rounded-lg bg-accent-60 px-2 text-white"
  >
    <button class="z-10 flex gap-1 text-xs" on:click={searchForTagDocuments}>
      <Icon.DocumentTextOutline class="relative top-px" size="12" />
      <span>{data.documents.length + 12} سند </span>
    </button>
  </div>
  <div class="z-[1] flex w-full flex-col justify-between gap-1">
    <div class="flex w-full flex-col" class:gap-2={mode === 'Write'}>
      {#if mode === 'Read'}
        <span>
          {data.name}
        </span>
        <span class="line-clamp-2 text-xs text-black/70">
          {data.description}
        </span>
      {:else}
        <span class="w-full">
          <input
            class="w-full rounded-md bg-white/40 px-2 outline-none"
            type="text"
            bind:value={newName}
            bind:this={newNameElement}
          />
        </span>
        <span class="line-clamp-2 text-xs text-black/70">
          <input
            class="h-6 w-full rounded-md bg-white/40 px-2 outline-none"
            type="text"
            bind:value={newDescription}
          />
        </span>
      {/if}
    </div>
  </div>
  <div class="absolute bottom-0 left-2 z-10 flex translate-y-1/2 gap-2">
    <button
      class="relative cursor-pointer rounded-2xl bg-accent-50 px-3 py-5 duration-75 hover:bg-accent-70"
      on:click={mode === 'Read' ? changeModeToWrite : updateTag}
    >
      {#if mode === 'Read'}
        <Icon.CreateOutline
          class="absolute left-1/2 top-1.5 -translate-x-1/2 text-white"
          size="11"
        />
      {:else}
        <Icon.CheckmarkOutline
          class="absolute left-1/2 top-1.5 -translate-x-1/2 text-white"
          size="11"
        />
      {/if}
    </button>
    <button
      class="relative cursor-pointer rounded-2xl bg-rose-400 px-3 py-5 duration-75 hover:bg-rose-600"
      on:click={mode === 'Read' ? deleteTag : cancelWriting}
    >
      {#if mode === 'Read'}
        <Icon.TrashBinOutline
          class="absolute left-1/2 top-1.5 -translate-x-1/2 text-white"
          size="11"
        />
      {:else}
        <Icon.CloseOutline
          class="absolute left-1/2 top-1.5 -translate-x-1/2 text-white"
          size="11"
        />
      {/if}
    </button>
  </div>
</div>
