<script lang="ts">
  import * as Icon from 'svelte-ionicons';

  export let bookmarked = false;
  export let seen = false;
  export let extended = false;
</script>

<div class="flex flex-col gap-3 rounded-default bg-white px-3 py-2 text-xs">
  <div class="flex gap-2">
    <Icon.Reader size="18" />
    <span class="font-bold">راهنمای استفاده از سیستم</span>
    <a
      class="flex cursor-pointer items-center rounded bg-gray-200 px-2 text-[10px] text-gray-600"
      href="#"
    >
      ➲ MAN-0001/1
    </a>
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
    <button class="flex gap-1 hover:font-bold">
      <Icon.ChevronForwardCircleOutline size="15" />
      <span class="text-[12px]">نمایش </span>
    </button>
    <button class="flex gap-1 hover:font-bold">
      {#if bookmarked}
        <Icon.Bookmark class="text-accent-100" size="15" />
        <span class="text-[12px]">برداشتن نشان</span>
      {:else}
        <Icon.BookmarkOutline size="15" />
        <span class="text-[12px]">نشان کردن</span>
      {/if}
    </button>
    <button class="flex gap-1 hover:font-bold">
      <Icon.ShareSocialOutline size="15" />
      <span class="text-[12px]">به اشتراک گذاری</span>
    </button>
    {#if seen}
      <div class="absolute bottom-1 left-1 text-xs text-gray-400">دیده شده</div>
    {/if}
  </div>
</div>
