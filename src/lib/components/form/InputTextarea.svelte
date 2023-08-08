<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let placeholder = '';
  export let value = '';

  let clazz = '';
  export { clazz as class };
</script>

<textarea
  class={twMerge('rounded-form-elements border p-3 outline-none', clazz)}
  {placeholder}
  bind:value
/>
