<script lang="ts">
  type Option = { label: string; value: string };

  export let options: [Option, Option, ...Option[]];
  export let selected: Option = options[0];
</script>

<div class="flex w-fit gap-2 rounded-form-elements bg-gray-100 px-2 py-1.5 text-xs">
  {#each options as option}
    <button
      class="cursor-pointer rounded-md px-4 py-1 duration-75"
      class:bg-accent-20={selected.value === option.value}
      on:click={() => {
        selected = option;
      }}>{option.label}</button
    >
  {/each}
</div>
