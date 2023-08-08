<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let placeholder = '';
  export let type = 'text';
  export let value = '';

  let clazz = '';
  export { clazz as class };
</script>

{#if type === 'text'}
  <input
    class={twMerge(
      'w-full rounded-form-elements border border-black/10 px-4 py-2 text-xs outline-none',
      clazz
    )}
    type="text"
    {placeholder}
    bind:value
  />
{:else}
  <input
    class={twMerge(
      'w-full rounded-form-elements border border-black/10 px-4 py-2 text-xs outline-none',
      clazz
    )}
    type="password"
    {placeholder}
    bind:value
  />
{/if}
