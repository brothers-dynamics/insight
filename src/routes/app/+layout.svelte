<script lang="ts">
  import * as Icon from 'svelte-ionicons';
  import { onMount } from 'svelte';
  import commandPalette from '$lib/stores/commandPalette';

  import CommandPalette from '$lib/components/CommandPalette.svelte';
  import NavbarItem from './_components/NavbarItem.svelte';

  onMount(() => {
    document.onkeydown = (event: KeyboardEvent) => {
      if (event.code === 'F2') {
        $commandPalette = !$commandPalette;
        event.preventDefault();
      }
    };
  });
</script>

<div class="flex flex-col gap-3 justify-start pt-8 w-full bg-white/50 | md:w-[250px]">
  <nav class="relative flex gap-2 p-4 py-5 border-dashed text-[14px]">
    <div class="flex justify-center items-center w-12 h-12 bg-accent-70 text-white rounded-2xl">
      کط
    </div>
    <div class="flex flex-col gap-1">
      <p>کمیل طاهری</p>
      <p class="text-gray-500 text-xs text-right ltr">@komeitl</p>
    </div>
    <div
      class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer hover:text-black"
    >
      <Icon.EllipsisVertical size="20" />
    </div>
  </nav>
  <nav class="flex flex-col gap-2 h-fit py-5 text-[14px]">
    <NavbarItem label="داشبورد" icon={Icon.GridOutline} path={'dashboard'} />
    <NavbarItem label="نوشتن" icon={Icon.ReceiptOutline} path={'create'} />
    <NavbarItem label="جستوجو" icon={Icon.SearchCircleOutline} path={'search'} />
    <NavbarItem label="کتابخانه" icon={Icon.LibraryOutline} path={'library'} />
    <NavbarItem label="پیام ها" icon={Icon.ChatbubbleEllipsesOutline} path={'messages'} />
    <NavbarItem label="مدیریت" icon={Icon.SettingsOutline} path={'settings'} />
  </nav>
</div>

<div
  class="relative grow p-4 w-full max-h-[100vh] overflow-y-auto | sm:p-8 md:w-[calc(100%-250px)]"
>
  {#if $commandPalette}
    <CommandPalette />
  {/if}
  <slot />
</div>

<style>
  :global(body) {
    width: 100%;
    background-color: white;
    color: black;
  }
</style>
