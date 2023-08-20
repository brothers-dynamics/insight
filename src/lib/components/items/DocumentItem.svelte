<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';

  /* Stores */
  import ShareModalStateManagerStore from '$lib/stores/modalStateManagers/ShareModalStateManagerStore';

  /* Components */
  import InlineDocument from '$lib/components/utils/InlineDocument.svelte';

  /***********************
   * Implementation
   ***********************/

  export let bookmarked = false;
  export let seen = false;
</script>

<div class="flex flex-col gap-3 rounded-default bg-white px-3 py-2 text-xs">
  <div class="flex gap-2">
    <Icon.Reader size="18" />
    <span class="font-bold">راهنمای استفاده از سیستم</span>
    <InlineDocument />
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
    <a class="flex gap-1 hover:font-bold" href="/view/MAN-0001/1">
      <Icon.ChevronForwardCircleOutline size="15" />
      <span class="text-[12px]">نمایش </span>
    </a>
    <button class="flex gap-1 hover:font-bold">
      {#if bookmarked}
        <Icon.Bookmark class="text-accent-100" size="15" />
        <span class="text-[12px]">برداشتن نشان</span>
      {:else}
        <Icon.BookmarkOutline size="15" />
        <span class="text-[12px]">نشان کردن</span>
      {/if}
    </button>
    <button
      class="flex gap-1 hover:font-bold"
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
