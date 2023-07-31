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

<div class="| flex w-full flex-col justify-start bg-white/50 p-4 md:w-[300px]">
  <nav class="relative flex gap-2 rounded bg-white/70 py-6 pr-8 text-[13px] text-black shadow-sm">
    <div class="flex h-12 w-12 items-center justify-center rounded bg-accent-50 text-white">کط</div>
    <div class="flex flex-col gap-1">
      <p>کمیل طاهری</p>
      <p class="ltr text-right text-xs text-black/50">@komeitl</p>
    </div>
    <div
      class="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer text-black/60 hover:text-black"
    >
      <Icon.EllipsisVertical size="20" />
    </div>
  </nav>
  <nav class="flex h-fit flex-col py-5 pr-8 text-[13px]">
    <div class="my-4 font-bold">شخصی</div>
    <NavbarItem label="داشبورد" icon={Icon.GridOutline} path={'dashboard'} count={2} />
    <NavbarItem label="پروفایل" icon={Icon.PersonOutline} path={'profile'} />
    <NavbarItem label="پیام ها" icon={Icon.ChatbubbleEllipsesOutline} path={'messages'} count={6} />
    <NavbarItem label="تنظیمات" icon={Icon.SettingsOutline} path={'settings'} />
    <div class="my-4 font-bold">اسناد</div>
    <NavbarItem label="نوشتن" icon={Icon.ReceiptOutline} path={'create'} />
    <NavbarItem label="جستوجو" icon={Icon.SearchCircleOutline} path={'search'} />
    <NavbarItem label="کتابخانه" icon={Icon.LibraryOutline} path={'library'} />
    <div class="my-4 font-bold">مدیریت</div>
    <NavbarItem
      label="تایید اسناد"
      icon={Icon.CheckmarkCircleOutline}
      path={'approve'}
      count={12}
    />
    <NavbarItem label="تگ ها" icon={Icon.PricetagOutline} path={'tags'} />
    <NavbarItem label="کاربران" icon={Icon.PeopleOutline} path={'users'} />
    <NavbarItem label="نقش ها" icon={Icon.WalletOutline} path={'roles'} />
  </nav>
</div>

<div
  class="| relative max-h-[100vh] w-full grow overflow-y-auto p-4 sm:p-8 md:w-[calc(100%-250px)]"
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
