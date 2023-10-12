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
  import ShareModalStateManagerStore from '$lib/stores/modalStateManagers/ShareModalStateManagerStore';

  /* Components */
  import InlineDocument from '$lib/components/utils/InlineDocument.svelte';
  import ButtonWithIcon from '$lib/components/form/ButtonWithIcon.svelte';

  /***********************
   * Implementation
   ***********************/

  $: if (input) input.focus();

  let query = '';
  let input: HTMLInputElement;
</script>

{#if $ShareModalStateManagerStore.visible}
  <div
    class="fixed inset-0 z-[40] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
    transition:fade={{ duration: 100 }}
  >
    <div
      class="mx-1 flex w-full flex-col gap-4 rounded bg-gray-100 p-4 text-xs lg:w-fit"
      use:outClick={() => {
        ShareModalStateManagerStore.close();
      }}
    >
      <div class="flex flex-col gap-2 border-b border-dashed border-black/10 pb-3">
        <div class="text-base font-bold">اشتراک گذاری</div>
        <div class="text-sm">
          شما در حال اشتراک گذاری سند <InlineDocument class="inline w-fit" /> هستید
        </div>
      </div>
      <div class="flex gap-4">
        <input
          class="w-full rounded-3xl bg-white px-3 py-2 outline-none lg:w-[280px]"
          type="text"
          placeholder="اسم کاربر را وارد کنید"
          tabindex="0"
          bind:this={input}
          bind:value={query}
        />
        <ButtonWithIcon
          class="h-9 rounded-3xl bg-accent-60 px-4 text-white hover:bg-accent-70"
          label="ارسال"
          icon={Icon.SendOutline}
          iconSize={18}
        />
      </div>
      <div class="flex flex-col gap-3">
        <div class="flex gap-2 rounded-3xl bg-white/50 p-2">
          <div
            class="flex aspect-square h-7 items-center justify-center rounded-full bg-accent-60 text-[10px] text-white"
          >
            کط
          </div>
          <div class="flex flex-col justify-center gap-1">
            <div class="text-xs">کمیل طاهری</div>
          </div>
          <div class="mr-auto">
            <Icon.CheckmarkCircleOutline
              class="relative top-px cursor-pointer rounded-full bg-accent-60 text-accent-60 text-white duration-100"
            />
          </div>
        </div>
        <div class="flex gap-2 rounded-3xl bg-white/50 p-2">
          <div
            class="flex aspect-square h-7 items-center justify-center rounded-full bg-accent-60 text-[10px] text-white"
          >
            کط
          </div>
          <div class="flex flex-col justify-center gap-1">
            <div class="text-xs">کمیل طاهری</div>
          </div>
          <div class="mr-auto">
            <Icon.CheckmarkCircleOutline
              class="relative top-px cursor-pointer rounded-full bg-accent-60 text-accent-60 text-white duration-100"
            />
          </div>
        </div>
        <div class="flex gap-2 rounded-3xl bg-white/50 p-2">
          <div
            class="flex aspect-square h-7 items-center justify-center rounded-full bg-accent-60 text-[10px] text-white"
          >
            کط
          </div>
          <div class="flex flex-col justify-center gap-1">
            <div class="text-xs">کمیل طاهری</div>
          </div>
          <div class="mr-auto">
            <Icon.CheckmarkCircleOutline
              class="relative top-px cursor-pointer rounded-full bg-accent-60 text-accent-60 text-white duration-100"
            />
          </div>
        </div>
        <div class="flex gap-2 rounded-3xl bg-white/50 p-2">
          <div
            class="flex aspect-square h-7 items-center justify-center rounded-full bg-accent-60 text-[10px] text-white"
          >
            کط
          </div>
          <div class="flex flex-col justify-center gap-1">
            <div class="text-xs">کمیل طاهری</div>
          </div>
          <div class="mr-auto">
            <Icon.CheckmarkCircleOutline
              class="relative top-px cursor-pointer rounded-full text-accent-60 duration-100 hover:bg-accent-60 hover:text-white"
            />
          </div>
        </div>
        <div class="flex gap-2 rounded-3xl bg-white/50 p-2">
          <div
            class="flex aspect-square h-7 items-center justify-center rounded-full bg-accent-60 text-[10px] text-white"
          >
            کط
          </div>
          <div class="flex flex-col justify-center gap-1">
            <div class="text-xs">کمیل طاهری</div>
          </div>
          <div class="mr-auto">
            <Icon.CheckmarkCircleOutline
              class="relative top-px cursor-pointer rounded-full text-accent-60 duration-100 hover:bg-accent-60 hover:text-white"
            />
          </div>
        </div>
        <div class="flex gap-2 rounded-3xl bg-white/50 p-2">
          <div
            class="flex aspect-square h-7 items-center justify-center rounded-full bg-accent-60 text-[10px] text-white"
          >
            کط
          </div>
          <div class="flex flex-col justify-center gap-1">
            <div class="text-xs">کمیل طاهری</div>
          </div>
          <div class="mr-auto">
            <Icon.CheckmarkCircleOutline
              class="relative top-px cursor-pointer rounded-full text-accent-60 duration-100 hover:bg-accent-60 hover:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  input {
    font-family: Vazir, Ubuntu;
  }
</style>
