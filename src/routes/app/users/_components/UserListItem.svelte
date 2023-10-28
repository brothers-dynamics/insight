<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';
</script>

<div
  class="relative flex w-full gap-3 rounded-xl bg-white p-4 pb-12 shadow-lg md:w-[calc((100%-0.75rem)/2)] lg:w-[calc((100%-0.75rem)/2)] xl:w-[calc((100%-0.75rem*2)/3)] 2xl:w-[calc((100%-0.75rem*3)/4)]"
>
  <div class="h-12 w-12 shrink-0 rounded-2xl bg-accent-50 text-center leading-[3rem] text-white">
    کط
  </div>
  <div class="flex flex-col justify-around">
    <div class="">کمیل طاهری</div>
    <div class="flex w-fit gap-1 rounded-md bg-[#00E67666] px-2 py-0.5 text-[#008846]">
      <Icon.Ellipse class="relative top-0.5" size="9" />
      <span class="text-[11px]">فعال</span>
    </div>
    <div class="absolute bottom-4 right-4 flex gap-2">
      <button class="flex gap-1 text-black/60 opacity-70 duration-75 hover:opacity-100">
        <Icon.SettingsOutline class="relative top-0.5" size="10" />
        <span class="text-[11px]">تنظیمات کاربر</span>
      </button>
      <button class="flex gap-1 text-[#F44336] opacity-70 duration-75 hover:opacity-100">
        <Icon.TrashOutline class="relative top-0.5" size="10" />
        <span class="text-[11px]">حذف کاربر</span>
      </button>
    </div>
    <div class="absolute bottom-4 left-4 flex gap-2">
      <div class="flex gap-1 text-black">
        <span class="text rounded border border-dashed border-black/30 px-2 py-1 font-bold"
          >برنامه نویس</span
        >
      </div>
    </div>
  </div>
  <div class="mr-auto h-fit rounded-lg bg-accent-20 px-2 py-1 text-[13px] text-black/60">5</div>
</div>
