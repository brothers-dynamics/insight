<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';
</script>

<div class="relative flex flex-col gap-2 rounded-default bg-white px-3 py-2 text-sm">
  <div class="flex gap-1">
    <Icon.CheckmarkCircle class="text-green-600" size="20" />
    <div class="text-[#555]">
      سند ارسالی شما توسط <span class="text-accent-100">عبدالله طاهری</span> تایید شد
    </div>
  </div>
  <div class="mt-1 flex gap-3">
    <button class="flex gap-1 hover:font-bold">
      <Icon.OpenOutline class="relative top-0.5" size="15" />
      <span class="text-[12px]">جزییات</span>
    </button>
    <button class="flex gap-1 hover:font-bold">
      <Icon.RemoveCircleOutline class="relative top-0.5" size="15" />
      <span class="text-[12px]">پاک کردن</span>
    </button>
  </div>
  <div class="absolute bottom-2 left-3 text-xs text-gray-500">۱ ساعت پیش</div>
</div>
