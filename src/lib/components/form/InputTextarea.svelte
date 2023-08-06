<script lang="ts">
  export let placeholder = '';
  export let value = '';

  let clazz = '';
  export { clazz as class };
</script>

<textarea
  class="rounded-form-elements border p-3 outline-none {clazz || ''}"
  {placeholder}
  bind:value
/>
