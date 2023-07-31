<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import type { ComponentType } from 'svelte';

  export let label: string;
  export let icon: ComponentType;
  export let path: string;
  export let count: number = 0;

  export let active: boolean = false;

  $: active = $page.url.pathname.includes(path);
</script>

<a
  class="relative flex items-center gap-2 h-6 py-5 rounded-3xl outline-none overflow-hidden cursor-pointer duration-75"
  class:text-gray-500={!active}
  class:text-accent-90={active}
  class:font-bold={active}
  class:hover:text-black={!active}
  href={'/app/' + path}
>
  {#if count}
    <div
      class="absolute left-0 translate-x-1/2 py-px px-2 rounded-md rounded-tr-none bg-accent-70 text-white text-center text-[11px]"
    >
      {count}
    </div>
  {/if}
  <svelte:component this={icon} size="18" tabindex="-1" />
  <span>{label}</span>
</a>
