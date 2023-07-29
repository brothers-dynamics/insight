<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import type { ComponentType } from 'svelte';

  export let label: string;
  export let icon: ComponentType;
  export let path: string;

  export let active: boolean = false;

  $: active = $page.url.pathname.includes(path);
</script>

<a
  class="relative flex items-center gap-2 h-6 py-6 pr-6 rounded-e-3xl overflow-hidden cursor-pointer duration-100"
  class:text-gray-700={!active}
  class:text-accent-90={active}
  class:bg-accent-5={active}
  class:font-bold={active}
  class:hover:bg-gray-50={!active}
  href={'/app/' + path}
>
  {#if active}
    <div class="absolute right-0 translate-x-1/2 aspect-square w-5 rounded bg-accent-70" />
  {/if}
  <svelte:component this={icon} size="20" tabindex="-1" />
  <span>{label}</span>
</a>
