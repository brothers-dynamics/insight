<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';

  /* Actions */
  import { goto } from '$app/navigation';
  import { overClass } from '$lib/actions/elementEnhancements/OverClass';

  /***********************
   * Implementation
   ***********************/

  let clazz = '';
  export { clazz as class };
</script>

<div
  class="group relative flex w-full flex-col gap-3 rounded-xl bg-white p-2 px-3 text-xs shadow-lg lg:w-[calc((100%-0.75rem*1)/2)] xl:w-[calc((100%-0.75rem*2)/3)]"
  use:overClass={clazz}
>
  <div class="flex gap-3">
    <div class="flex gap-1 font-bold">
      <Icon.WalletOutline size="15" />
      <span>برنامه نویس</span>
    </div>
    <div class="mr-2 rounded bg-accent-60 px-2 text-[11px] text-white">8/15 کاربر فعال</div>
    <div class="mr-auto flex gap-3">
      <Icon.TrashBinOutline
        class="cursor-pointer text-[#F44336] opacity-50 duration-75 hover:opacity-100"
        size="13"
      />
      <Icon.CreateOutline
        class="cursor-pointer  opacity-50 duration-75 hover:opacity-100"
        size="13"
      />
    </div>
  </div>
  <div class="flex w-full flex-wrap gap-2 border-t border-dashed py-2">
    <div class="flex gap-1 rounded bg-black/5 px-2 py-0.5 text-[11px]">
      <Icon.MedicalOutline class="relative top-px" size="12" />
      <span>ساخت کاربر جدید</span>
    </div>
    <div class="flex gap-1 rounded bg-black/5 px-2 py-0.5 text-[11px]">
      <Icon.MedicalOutline class="relative top-px" size="12" />
      <span>ایجاد دانش</span>
    </div>
    <div class="flex gap-1 rounded bg-black/5 px-2 py-0.5 text-[11px]">
      <Icon.MedicalOutline class="relative top-px" size="12" />
      <span>ایجاد سیاست</span>
    </div>
    <div class="flex gap-1 rounded bg-black/5 px-2 py-0.5 text-[11px]">
      <Icon.MedicalOutline class="relative top-px" size="12" />
      <span>تایید دانش</span>
    </div>
  </div>
</div>
