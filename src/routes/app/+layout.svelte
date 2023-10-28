<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* Svelte built-in libraries */
  import { onMount } from 'svelte';
  import { navigating } from '$app/stores';
  import { fade, fly } from 'svelte/transition';

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';

  /* Actions */
  import { outClick } from '$lib/actions/userInteractions/CustomEvents';
  import { draggable } from '$lib/actions/userInteractions/Draggable';

  /* Stores */
  import CommandPaletteModalStateManagerStore from '$lib/stores/modalStateManagers/CommandPaletteModalStateManagerStore';
  import LockDownModalStateManagerStore from '$lib/stores/modalStateManagers/LockDownModalStateManagerStore';

  /* Components */
  import CommandPaletteModal from '$lib/components/modals/CommandPaletteModal.svelte';
  import ShareModal from '$lib/components/modals/ShareModal.svelte';
  import LockDownModal from '$lib/components/modals/LockDownModal.svelte';
  import TextPromptModal from '$lib/components/modals/TextPromptModal.svelte';
  import ConfirmModal from '$lib/components/modals/ConfirmModal.svelte';
  import BlankModal from '$lib/components/modals/BlankModal.svelte';
  import Notifications from '$lib/components/utils/Notifications.svelte';
  import NavbarItem from './_components/NavbarItem.svelte';

  /***********************
   * Implementation
   ***********************/

  export let data;
  const navigationMenu: {
    state: 'Closed' | 'Opened';
    type: 'Static' | 'Hovering';
  } = {
    state: 'Opened',
    type: 'Static'
  };

  navigating.subscribe(async (value) => {
    if (value && navigationMenu.type === 'Hovering') {
      await value.complete;
      navigationMenu.state = 'Closed'
    } 
  })

  onMount(() => {
    document.onkeydown = (event: KeyboardEvent) => {
      if ($LockDownModalStateManagerStore.visible) return;
      if (event.code === 'F2') {
        CommandPaletteModalStateManagerStore.toggle();
        event.preventDefault();
      }
    };

    function handleMenuState() {
      if (window.innerWidth < 1024) {
        navigationMenu.type = 'Hovering';
        navigationMenu.state = 'Closed';
      } else {
        navigationMenu.type = 'Static';
      }
    }

    handleMenuState();
    window.addEventListener('resize', () => {
      handleMenuState();
    });
  });
</script>

{#if navigationMenu.type === 'Static' || navigationMenu.state === 'Opened'}
  <div
    class="ltr fixed z-20 h-full w-4/5 max-w-[300px] shrink-0 flex-col justify-start overflow-y-auto bg-white/80 p-4 shadow-lg backdrop-blur-md lg:static lg:flex lg:w-[300px] lg:bg-white/50 lg:shadow-none lg:backdrop-blur-0"
    transition:fly={{ x: 600, duration: 700, opacity: 0.7 }}
    use:outClick={() => {
      navigationMenu.state = 'Closed';
    }}
  >
    <nav
      class="rtl relative flex gap-2 rounded bg-white/70 py-6 pr-8 text-[13px] text-black shadow-sm"
    >
      <div class="flex h-12 w-12 items-center justify-center rounded bg-accent-50 text-white">
        کط
      </div>
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
    <nav class="rtl flex h-fit flex-col py-5 pr-8 text-[13px]">
      <div class="my-4 font-bold">شخصی</div>
      <NavbarItem label="داشبورد" icon={Icon.GridOutline} path={'dashboard'} count={2} />
      <NavbarItem label="پیش‌نویس ها" icon={Icon.CreateOutline} path={'drafts'} />
      <NavbarItem
        label="پیام ها"
        icon={Icon.ChatbubbleEllipsesOutline}
        path={'messages'}
        count={6}
      />
      <NavbarItem label="تنظیمات" icon={Icon.SettingsOutline} path={'settings'} />
      <div class="my-4 font-bold">اسناد</div>
      <NavbarItem label="نوشتن" icon={Icon.ReceiptOutline} path={'create'} />
      <NavbarItem label="جستوجو" icon={Icon.SearchCircleOutline} path={'search'} />
      <NavbarItem label="کتابخانه" icon={Icon.LibraryOutline} path={'library'} disabled />
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
{/if}

{#if navigationMenu.type === 'Hovering' && navigationMenu.state === 'Closed'}
  <button
    class="fixed bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-b-2xl rounded-t-lg bg-accent-50 text-white shadow-lg shadow-accent-50 backdrop-blur-sm lg:hidden"
    transition:fly={{ x: -100 }}
    on:click={() => {
      navigationMenu.state = 'Opened';
    }}
    use:draggable
  >
    <Icon.ReorderFourOutline />
  </button>
{/if}

<Notifications />

<div
  class="relative h-[100vh] w-full grow overflow-y-auto p-4 duration-700 sm:p-8"
  class:blur-md={navigationMenu.type === 'Hovering' && navigationMenu.state === 'Opened'}
>
  <CommandPaletteModal />
  <ShareModal />
  <LockDownModal />
  <TextPromptModal />
  <ConfirmModal />
  <BlankModal />
  {#key data.url}
    <main
      class="min-h-[calc(100vh-4rem)]"
      in:fade={{ duration: 150, delay: 200 }}
      out:fade={{ duration: 150 }}
    >
      <slot />
    </main>
  {/key}
</div>
