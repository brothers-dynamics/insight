<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';

  /* Actions */
  import { overClass } from '$lib/actions/elementEnhancements/OverClass';

  /* Stores */
  import ShareModalStateManagerStore from '$lib/stores/modalStateManagers/ShareModalStateManagerStore';

  /***********************
   * Implementation
   ***********************/

  let clazz = '';
  export { clazz as class };

  export let bookmarked = false;
  export let seen = false;
</script>

<div class="flex flex-col gap-3 rounded-xl bg-white px-3 py-2 text-xs shadow-lg" use:overClass={clazz}>
  <div class="flex gap-2">
    <Icon.ReaderOutline size="18" />
    <span class="font-bold">راهنمای استفاده از سیستم</span>
    <span class="mr-auto shrink-0 font-mono text-[11px] text-black/40">MAN-00001</span>
  </div>
  <div>
    <div class="line-clamp-2 text-[#555]">
      این راهنما، یک منبع جامع برای یادگیری استفاده از سیستم مدیریت دانش ما است. در این راهنما،
      تمامی جنبه‌های کار با سیستم، از ورود اولیه و ایجاد حساب کاربری تا جستجوی پیشرفته و مشارکت در
      گروه‌های تعاونی، به طور کامل توضیح داده شده است.
      <br />
      این راهنما، یک منبع جامع برای یادگیری استفاده از سیستم مدیریت دانش ما است. در این راهنما، تمامی
      جنبه‌های کار با سیستم، از ورود اولیه و ایجاد حساب کاربری تا جستجوی پیشرفته و مشارکت در گروه‌های
      تعاونی، به طور کامل توضیح داده شده است.
    </div>
  </div>
  <div class="flex gap-3">
    <div
      class="cursor-pointer rounded bg-accent-75 px-3 text-white opacity-80 duration-100 hover:opacity-100"
    >
      سند
    </div>
    <div
      class="cursor-pointer rounded bg-accent-75 px-3 text-white opacity-80 duration-100 hover:opacity-100"
    >
      آموزش
    </div>
    <div
      class="cursor-pointer rounded bg-accent-75 px-3 text-white opacity-80 duration-100 hover:opacity-100"
    >
      سیستم
    </div>
  </div>
  <div class="relative mt-1 flex gap-3">
    <a class="flex gap-1 opacity-60 hover:opacity-100" href="/app/document/MAN-0001/1">
      <Icon.ChevronForwardCircleOutline size="15" />
      <span class="text-[12px]">نمایش </span>
    </a>
    <button class="flex gap-1 opacity-60 hover:opacity-100">
      {#if bookmarked}
        <Icon.Bookmark class="text-accent-100" size="15" />
        <span class="text-[12px]">برداشتن نشان</span>
      {:else}
        <Icon.BookmarkOutline size="15" />
        <span class="text-[12px]">نشان کردن</span>
      {/if}
    </button>
    <button
      class="flex gap-1 opacity-60 hover:opacity-100"
      on:click={() => {
        ShareModalStateManagerStore.share('12');
      }}
    >
      <Icon.ShareSocialOutline size="15" />
      <span class="text-[12px]">به اشتراک گذاری</span>
    </button>
    {#if seen}
      <Icon.CheckmarkDoneCircleOutline
        class="absolute bottom-1 left-1 text-xs text-gray-400"
        size="18"
      />
    {/if}
  </div>
</div>
