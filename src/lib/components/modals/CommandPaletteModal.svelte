<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* Svelte built-in libraries */
  import { fade } from 'svelte/transition';
  import { goto } from '$app/navigation';

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';

  /* Actions */
  import { outClick } from '$lib/actions/userInteractions/CustomEvents';

  /* Stores */
  import CommandPaletteModalStateManagerStore from '$lib/stores/modalStateManagers/CommandPaletteModalStateManagerStore';

  /***********************
   * Implementation
   ***********************/

  $: if (input) input.focus();

  type Command = {
    id: string;
    label: string;
    keybinding: string[];
    action: () => void;
  };

  const commands: Command[] = [
    {
      id: 'CREATE:NEW-DOC',
      label: 'ساخت سند جدید',
      keybinding: ['Alt', 'Ctrl', 'N'],
      action: () => {
        goto('/app/create');
        CommandPaletteModalStateManagerStore.close();
      }
    },
    {
      id: 'GOTO:DASHBOARD',
      label: 'رفتن به داشبورد',
      keybinding: ['Alt', 'Ctrl', 'D'],
      action: () => {
        goto('/app/dashboard');
        CommandPaletteModalStateManagerStore.close();
      }
    },
    {
      id: 'GOTO:SETTINGS',
      label: 'رفتن به تنظیمات',
      keybinding: ['Alt', ','],
      action: () => {
        console.log('hi');
      }
    },
    {
      id: 'CURRENT-DOC:CREATE-NEW-VERSION',
      label: 'سند فعلی: ساخت نسخه ی جدید',
      keybinding: ['Alt', 'Ctrl', 'V'],
      action: () => {
        console.log('hi');
      }
    },
    {
      id: 'CURRENT-DOC:NEXT-VERSION',
      label: 'سند فعلی: نسخه بعدی',
      keybinding: ['Alt', ']'],
      action: () => {
        console.log('hi');
      }
    },
    {
      id: 'CURRENT-DOC:PREV-VERSION',
      label: 'سند فعلی: نسخه قبلی',
      keybinding: ['Alt', '['],
      action: () => {
        console.log('hi');
      }
    },
    {
      id: 'CURRENT-DOC:BOOKMARK',
      label: 'سند فعلی: نشان کردن',
      keybinding: ['Alt', 'Ctrl', 'B'],
      action: () => {
        console.log('hi');
      }
    },
    {
      id: 'CURRENT-DOC:SUMMERIZE',
      label: 'سند فعلی: خلاصه کردن',
      keybinding: ['Alt', 'Ctrl', 'S'],
      action: () => {
        console.log('hi');
      }
    },
    {
      id: 'CURRENT-DOC:COPY-ADDRESS',
      label: 'سند فعلی: کپی کردن آدرس',
      keybinding: ['Alt', 'Ctrl', 'C'],
      action: () => {
        console.log('hi');
      }
    },
    {
      id: 'CURRENT-DOC:COPY-ID',
      label: 'سند فعلی: کپی کردن شناسه',
      keybinding: ['Alt', 'Ctrl', 'I'],
      action: () => {
        console.log('hi');
      }
    },
    {
      id: 'USER:LOGOUT',
      label: 'کاربر: خروج',
      keybinding: ['Alt', 'Ctrl', 'L'],
      action: () => {
        goto('/login');
        CommandPaletteModalStateManagerStore.close();
      }
    }
  ];

  let filteredCommands: Command[];

  let query = '';
  let input: HTMLInputElement;

  $: filteredCommands = commands.filter((cmd) => cmd.label.includes(query));
</script>

{#if $CommandPaletteModalStateManagerStore.visible}
  <div
    class="fixed inset-0 z-50 flex flex-col items-center bg-gradient-to-bl from-black/60 to-accent-100/60 p-4 backdrop-blur-sm"
    transition:fade={{ duration: 100 }}
  >
    <div
      class="mx-1 flex w-full flex-col gap-4 rounded bg-gray-100 p-4 text-xs lg:w-fit"
      use:outClick={() => {
        CommandPaletteModalStateManagerStore.close();
      }}
    >
      <input
        class="w-full rounded bg-white px-3 py-2 outline-none lg:w-[480px]"
        type="text"
        placeholder="دستور مورد نظر را وارد کنید"
        tabindex="0"
        bind:this={input}
        bind:value={query}
      />
      <div class="flex flex-col gap-3">
        {#each filteredCommands as command (command.id)}
          <button
            class="group flex cursor-pointer gap-1 text-gray-600 outline-none"
            tabindex="0"
            on:click={command.action}
          >
            <Icon.ChevronBack size="15" tabindex="-1" />
            <span
              class="duration-75 group-hover:-translate-x-1 group-hover:text-black group-focus:-translate-x-1 group-focus:text-black"
              >{command.label}</span
            >
            <div class="ltr ubu mr-auto">
              {#each command.keybinding as key, i}
                <span class="rounded bg-gray-200 px-1 py-px text-[10px]">{key}</span>
                {#if i < command.keybinding.length - 1}
                  <span class="px-0.5 pr-1">+</span>
                {/if}
              {/each}
            </div>
          </button>
        {/each}
      </div>
    </div>
  </div>
{/if}

<style>
  input {
    font-family: Vazir, Ubuntu;
  }
  .ubu {
    font-family: Ubuntu;
  }
</style>
