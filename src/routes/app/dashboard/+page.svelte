<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';

  /* Components */
  import Section from '$lib/components/layer/Section.svelte';
  import DocumentItem from '$lib/components/items/DocumentItem.svelte';
  import ActivityItem from './_components/ActivityItem.svelte';
</script>

<div class="flex flex-wrap gap-4">
  <Section
    class="w-full lg:w-[calc(33.32%-.665rem)]"
    label="فعالیت های اخیر"
    icon={Icon.TimeOutline}
  >
    <div class="flex flex-col gap-3 text-[#444]">
      <ActivityItem caption="ایجاد حساب کاربری" date={new Date()} />
      <ActivityItem caption="ورود به سیستم" date={new Date()} />
      <ActivityItem caption="تغییر رمز عبور" date={new Date()} />
      <ActivityItem
        caption="ایجاد سند"
        link={{ label: 'KB-0049/1', href: '#' }}
        date={new Date()}
      />
      <ActivityItem
        caption="تایید خوانش سند"
        link={{ label: 'POL-0013', href: '#' }}
        date={new Date()}
      />
      <ActivityItem
        caption="تایید خوانش سند"
        link={{ label: 'POL-0013', href: '#' }}
        date={new Date()}
      />
      <ActivityItem
        caption="تایید خوانش سند"
        link={{ label: 'POL-0013', href: '#' }}
        date={new Date()}
      />
      <ActivityItem
        caption="تایید خوانش سند"
        link={{ label: 'POL-0013', href: '#' }}
        date={new Date()}
      />
      <ActivityItem
        caption="ایجاد سند"
        link={{ label: 'KB-0049/2', href: '#' }}
        date={new Date()}
      />
      <ActivityItem caption="خروج" date={new Date()} />
    </div>
    <div class="flex cursor-pointer gap-1 text-xs text-gray-600 duration-100 hover:text-black">
      <Icon.ChevronDownOutline size="15" />
      <span>مشاهده ی همه</span>
    </div>
  </Section>

  <Section
    class="w-full lg:w-[calc(33.32%-.665rem)]"
    label="اعلان ها"
    icon={Icon.NotificationsOutline}
  >
    <div class="flex flex-col gap-3">
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
      <div class="relative flex flex-col gap-2 rounded-default bg-white px-3 py-2 text-sm">
        <div class="flex gap-1">
          <Icon.CloseCircle class="text-rose-600" size="20" />
          <div class="text-[#555]">
            سند ارسالی شما توسط <span class="text-accent-100">عبدالله طاهری</span> رد شد
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
      <div class="relative flex flex-col gap-2 rounded-default bg-white px-3 py-2 text-sm">
        <div class="flex gap-1">
          <Icon.ChatbubbleEllipses class="text-blue-600" size="20" />
          <div class="text-[#555]">
            شما یک پیام از طرف <span class="text-accent-100">عبدالله طاهری</span> دارید
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
      <div class="relative flex flex-col gap-2 rounded-default bg-white px-3 py-2 text-sm">
        <div class="flex gap-1">
          <Icon.Receipt class="text-[#FF5722]" size="20" />
          <div class="text-[#555]">
            <span class="text-accent-100">عبدالله طاهری</span> سندی را برای شما ارسال کرده
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
    </div>
  </Section>

  <Section
    class="w-full lg:w-[calc(33.32%-.665rem)]"
    label="لیست خواندن"
    icon={Icon.FileTrayFullOutline}
  >
    <DocumentItem />
    <DocumentItem />
    <DocumentItem seen={true} />
    <DocumentItem />
  </Section>

  <Section
    class="w-full lg:w-[calc(33.32%-.665rem)] "
    label="اسناد دیده شده"
    icon={Icon.EyeOutline}
  >
    <div class="flex flex-col gap-3">
      <DocumentItem seen={true} />
      <DocumentItem seen={true} />
      <DocumentItem seen={true} />
      <DocumentItem seen={true} />
    </div>
  </Section>

  <Section
    class="w-full lg:w-[calc(33.32%-.665rem)] "
    label="نشان شده ها"
    icon={Icon.BookmarksOutline}
  >
    <DocumentItem bookmarked={true} />
    <DocumentItem bookmarked={true} />
    <DocumentItem bookmarked={true} />
    <DocumentItem bookmarked={true} />
  </Section>
  <Section
    class="w-full lg:w-[calc(33.32%-.665rem)] "
    label="اسناد پیشنهادی"
    icon={Icon.BarcodeOutline}
  >
    <DocumentItem />
    <DocumentItem />
    <DocumentItem />
    <DocumentItem />
  </Section>
</div>
