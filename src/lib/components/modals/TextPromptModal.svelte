<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* Svelte built-in libraries */
  import { fade } from 'svelte/transition';

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';

  /* Actions */
  import { outClick } from '$lib/actions/userInteractions/CustomEvents';

  /* Stores */
  import TextPromptModalStateManagerStore from '$lib/stores/modalStateManagers/TextPromptModalStateManagerStore';

  /* Components */
  import ButtonWithIcon from '$lib/components/form/ButtonWithIcon.svelte';

  /***********************
   * Implementation
   ***********************/

  $: if (input) input.focus();

  let text: string;
  let input: HTMLTextAreaElement | HTMLInputElement;

  $: $TextPromptModalStateManagerStore.text = text;

  function load() {
    text = '';
  }
</script>

{#if $TextPromptModalStateManagerStore.visible}
  <div
    class="fixed inset-0 z-[40] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
    transition:fade={{ duration: 100 }}
    on:introstart={() => {
      load();
    }}
  >
    <div
      class="flex h-fit w-full flex-col gap-4 rounded bg-white p-5 sm:top-16 sm:w-[600px]"
      use:outClick={() => {
        TextPromptModalStateManagerStore.cancel();
        text = '';
      }}
    >
      <div class="flex gap-1 text-sm">
        <Icon.AlertCircleOutline size="18" />
        <span>{$TextPromptModalStateManagerStore.message}</span>
      </div>
      {#if $TextPromptModalStateManagerStore.type === 'Long'}
        <textarea
          class="min-h-[120px] border border-dashed border-black/20 bg-white p-2 text-xs outline-none"
          bind:this={input}
          bind:value={text}
        />
      {:else}
        <input
          class="min-h-[40px] rounded-md border border-black/20 bg-white p-2 text-xs outline-none"
          bind:this={input}
          bind:value={text}
        />
      {/if}
      <div class="flex flex-wrap gap-4">
        <ButtonWithIcon
          class="w-full px-7 sm:w-fit"
          label="ثبت"
          icon={Icon.CheckmarkCircleOutline}
          on:click={({ detail: { done } }) => {
            TextPromptModalStateManagerStore.submit();
            done();
          }}
        />
        <ButtonWithIcon
          class="w-full bg-gray-500/80 px-7 text-xs hover:bg-gray-500 sm:w-fit"
          label="لغو"
          icon={Icon.CloseCircleOutline}
          on:click={({ detail: { done } }) => {
            TextPromptModalStateManagerStore.cancel();
            done();
          }}
        />
      </div>
    </div>
  </div>
{/if}
