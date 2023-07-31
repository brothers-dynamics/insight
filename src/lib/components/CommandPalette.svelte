<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import * as Icon from 'svelte-ionicons';

  import { clickOutside } from '$lib/actions/clickOutside';
  import commandPalette from '$lib/stores/commandPalette';

  onMount(() => {
    input.focus();
  });

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
        $commandPalette = false;
      }
    },
    {
      id: 'GOTO:DASHBOARD',
      label: 'رفتن به داشبورد',
      keybinding: ['Alt', 'Ctrl', 'D'],
      action: () => {
        goto('/app/dashboard');
        $commandPalette = false;
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
      id: 'USER:LOGUT',
      label: 'کاربر: خروج',
      keybinding: ['Alt', 'Ctrl', 'L'],
      action: () => {
        console.log('hi');
      }
    }
  ];

  let filteredCommands: Command[];

  let query = '';
  let input: HTMLInputElement;

  $: filteredCommands = commands.filter((cmd) => cmd.label.includes(query));
</script>

<div
  class="fixed flex flex-col items-center inset-0 p-4 bg-gradient-to-bl from-black/60 to-accent-100/60 backdrop-blur-sm z-50"
>
  <div
    class="flex flex-col gap-4 bg-gray-100 p-4 text-xs rounded"
    use:clickOutside
    on:clickOutside={() => {
      $commandPalette = false;
    }}
  >
    <input
      class="bg-white w-[480px] px-3 py-2 outline-none rounded"
      type="text"
      placeholder="دستور مورد نظر را وارد کنید"
      tabindex="0"
      bind:this={input}
      bind:value={query}
    />
    <div class="flex flex-col gap-3">
      {#each filteredCommands as command, i (command.id)}
        <button
          class="group flex gap-1 text-gray-600 outline-none cursor-pointer"
          tabindex="0"
          on:click={command.action}
        >
          <Icon.ChevronBack size="15" tabindex="-1" />
          <span
            class="duration-75 group-hover:text-black group-hover:-translate-x-1 group-focus:text-black group-focus:-translate-x-1"
            >{command.label}</span
          >
          <div class="mr-auto ltr ubu">
            {#each command.keybinding as key, i}
              <span class="text-[10px] px-1 py-px rounded bg-gray-200">{key}</span>
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

<style>
  input {
    font-family: Vazir, Ubuntu;
  }
  .ubu {
    font-family: Ubuntu;
  }
</style>
