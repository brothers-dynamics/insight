<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';

  /* Stores */
  import TextPromptModalStateManagerStore from '$lib/stores/modalStateManagers/TextPromptModalStateManagerStore';
  import ConfirmModalStateManagerStore from '$lib/stores/modalStateManagers/ConfirmModalStateManagerStore';

  /* Components */
  import InlineDocument from '$lib/components/utils/InlineDocument.svelte';

  /***********************
   * Implementation
   ***********************/
</script>

<div class="flex flex-col gap-3 rounded-default bg-white px-3 py-2 text-xs">
  <div class="flex gap-2">
    <Icon.PersonOutline size="18" />
    <span class="relative top-px text-xs">کمیل طاهری</span>
  </div>
  <div class="flex flex-wrap gap-2">
    <Icon.ReaderOutline size="18" />
    <span class="font-bold">راهنمای استفاده از سیستم</span>
    <InlineDocument
      document={{
        id: 'MAN0004'
      }}
    />
    <span class="rounded bg-green-300 px-2 py-0.5 text-black/50">تصحیح شده</span>
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
  <div class="relative flex flex-col gap-2 rounded-lg bg-gray-100 p-4">
    <div class="flex gap-1">
      <Icon.MailOutline size="15" />
      <span class="text-[12px]"
        >درخواست تصحیح توسط <strong>کمیل طاهری</strong> با پیام زیر صادر شده است :‌</span
      >
    </div>
    <div>
      <div class="text-[#555]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
        تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
      </div>
    </div>
  </div>
  <div class="relative mt-1 flex flex-wrap gap-3">
    <a class="flex gap-1 opacity-70 hover:opacity-100" href="/app/document/MAN-0001/1">
      <Icon.EyeOutline size="15" />
      <span class="text-[12px]">پیش نمایش </span>
    </a>
    <button
      class="flex gap-1 text-blue-500 opacity-70 hover:opacity-100"
      on:click={() => {
        ConfirmModalStateManagerStore.prompt({
          message: 'آیا مطمعنید که میخواهید سند را تایید کنید ؟'
        });
      }}
    >
      <Icon.CheckmarkCircleOutline size="15" />
      <span class="text-[12px]">تایید سند</span>
    </button>
    <button
      class="flex gap-1 text-orange-500 opacity-70 hover:opacity-100"
      on:click={() => {
        TextPromptModalStateManagerStore.prompt({
          type: 'Long',
          message: 'به طور واضح بنویسید چه نکاتی باید تصحیح و یا ویرایش شوند.'
        });
      }}
    >
      <Icon.CreateOutline size="15" />
      <span class="text-[12px]">درخواست تصحیح</span>
    </button>
    <button
      class="flex gap-1 text-red-500 opacity-70 hover:opacity-100"
      on:click={() => {
        ConfirmModalStateManagerStore.prompt({
          message: 'آیا مطمعنید که میخواهید سند را حذف کنید ؟',
          accent: 'bg-red-500',
          label: 'حذف',
          sensitive: true
        });
      }}
    >
      <Icon.CloseCircleOutline size="15" />
      <span class="text-[12px]">عدم تایید و حذف</span>
    </button>
  </div>
</div>
