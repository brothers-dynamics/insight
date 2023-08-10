<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';
  import { twMerge } from 'tailwind-merge';

  /* Components */
  import PickWithSuggestInput from './PickWithSuggestInput.svelte';

  /***********************
   * Implementation
   ***********************/

  let clazz = '';
  export { clazz as class };
</script>

<div class="flex flex-col gap-3 text-xs">
  <PickWithSuggestInput
    class={twMerge('w-full', clazz || '')}
    icon={Icon.Pricetag}
    list={[
      { label: 'سند', value: '9' },
      { label: 'جاوا', value: '8' },
      { label: 'آموزش', value: '7' },
      { label: 'راهنما', value: '6' },
      { label: 'ویژه', value: '5' },
      { label: 'مهم', value: '4' },
      { label: 'دستگاه CNC', value: '3' },
      { label: 'ایمنی', value: '2' },
      { label: 'ارتباطات', value: '1' }
    ]}
    on:pick={(x) => {
      console.log(x);
    }}
  />
  <div class="flex flex-wrap gap-2">
    <div
      class="flex cursor-pointer items-center gap-1 rounded-xl bg-accent-75 px-2 py-1 text-white opacity-80 hover:opacity-100"
    >
      <span>سند</span>
      <Icon.CloseCircle size="13" />
    </div>
    <div
      class="flex cursor-pointer items-center gap-1 rounded-xl bg-accent-75 px-2 py-1 text-white opacity-80 hover:opacity-100"
    >
      <span>جاوااسکریپت</span>
      <Icon.CloseCircle size="13" />
    </div>
    <div
      class="flex cursor-pointer items-center gap-1 rounded-xl bg-accent-75 px-2 py-1 text-white opacity-80 hover:opacity-100"
    >
      <span>برنامه نویسی</span>
      <Icon.CloseCircle size="13" />
    </div>
  </div>
</div>
