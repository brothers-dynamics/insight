<script lang="ts">
  import * as Icon from 'svelte-ionicons';

  import Section from './_components/Section.svelte';
  import RecentActivity from './_components/RecentActivity.svelte';
  import DocumentItem from '$lib/components/DocumentItem.svelte';
</script>

<div class="flex flex-wrap gap-4">
  <Section
    class="w-full | lg:w-[calc(33.32%-.665rem)]"
    label="فعالیت های اخیر"
    icon={Icon.TimeOutline}
  >
    <div class="flex flex-col gap-3 text-[#444]">
      <RecentActivity caption="ایجاد حساب کاربری" date={new Date()} />
      <RecentActivity caption="ورود به سیستم" date={new Date()} />
      <RecentActivity caption="تغییر رمز عبور" date={new Date()} />
      <RecentActivity
        caption="ایجاد سند"
        link={{ label: 'KB-0049/1', href: '#' }}
        date={new Date()}
      />
      <RecentActivity
        caption="تایید خوانش سند"
        link={{ label: 'POL-0013', href: '#' }}
        date={new Date()}
      />
      <RecentActivity
        caption="تایید خوانش سند"
        link={{ label: 'POL-0013', href: '#' }}
        date={new Date()}
      />
      <RecentActivity
        caption="تایید خوانش سند"
        link={{ label: 'POL-0013', href: '#' }}
        date={new Date()}
      />
      <RecentActivity
        caption="تایید خوانش سند"
        link={{ label: 'POL-0013', href: '#' }}
        date={new Date()}
      />
      <RecentActivity
        caption="ایجاد سند"
        link={{ label: 'KB-0049/2', href: '#' }}
        date={new Date()}
      />
      <RecentActivity caption="خروج" date={new Date()} />
    </div>
    <div class="flex gap-1 text-gray-600 text-xs cursor-pointer duration-100 hover:text-black">
      <Icon.ChevronDownOutline size="15" />
      <span>مشاهده ی همه</span>
    </div>
  </Section>

  <Section
    class="w-full | lg:w-[calc(33.32%-.665rem)]"
    label="اعلان ها"
    icon={Icon.NotificationsOutline}
  >
    <div class="flex flex-col gap-3">
      <div class="relative flex flex-col gap-2 px-3 py-2 text-sm bg-white rounded-default">
        <div class="flex gap-1">
          <Icon.CheckmarkCircle class="text-green-600" size="20" />
          <div class="text-[#555]">
            سند ارسالی شما توسط <span class="text-accent-100">عبدالله طاهری</span> تایید شد
          </div>
        </div>
        <div class="flex gap-3 mt-1">
          <button class="flex gap-1 hover:font-bold">
            <Icon.OpenOutline class="relative top-0.5" size="15" />
            <span class="text-[12px]">جزییات</span>
          </button>
          <button class="flex gap-1 hover:font-bold">
            <Icon.RemoveCircleOutline class="relative top-0.5" size="15" />
            <span class="text-[12px]">پاک کردن</span>
          </button>
        </div>
        <div class="absolute left-3 bottom-2 text-xs text-gray-500">۱ ساعت پیش</div>
      </div>
      <div class="relative flex flex-col gap-2 px-3 py-2 text-sm bg-white rounded-default">
        <div class="flex gap-1">
          <Icon.CloseCircle class="text-rose-600" size="20" />
          <div class="text-[#555]">
            سند ارسالی شما توسط <span class="text-accent-100">عبدالله طاهری</span> رد شد
          </div>
        </div>
        <div class="flex gap-3 mt-1">
          <button class="flex gap-1 hover:font-bold">
            <Icon.OpenOutline class="relative top-0.5" size="15" />
            <span class="text-[12px]">جزییات</span>
          </button>
          <button class="flex gap-1 hover:font-bold">
            <Icon.RemoveCircleOutline class="relative top-0.5" size="15" />
            <span class="text-[12px]">پاک کردن</span>
          </button>
        </div>
        <div class="absolute left-3 bottom-2 text-xs text-gray-500">۱ ساعت پیش</div>
      </div>
      <div class="relative flex flex-col gap-2 px-3 py-2 text-sm bg-white rounded-default">
        <div class="flex gap-1">
          <Icon.ChatbubbleEllipses class="text-blue-600" size="20" />
          <div class="text-[#555]">
            شما یک پیام از طرف <span class="text-accent-100">عبدالله طاهری</span> دارید
          </div>
        </div>
        <div class="flex gap-3 mt-1">
          <button class="flex gap-1 hover:font-bold">
            <Icon.OpenOutline class="relative top-0.5" size="15" />
            <span class="text-[12px]">جزییات</span>
          </button>
          <button class="flex gap-1 hover:font-bold">
            <Icon.RemoveCircleOutline class="relative top-0.5" size="15" />
            <span class="text-[12px]">پاک کردن</span>
          </button>
        </div>
        <div class="absolute left-3 bottom-2 text-xs text-gray-500">۱ ساعت پیش</div>
      </div>
      <div class="relative flex flex-col gap-2 px-3 py-2 text-sm bg-white rounded-default">
        <div class="flex gap-1">
          <Icon.Receipt class="text-[#FF5722]" size="20" />
          <div class="text-[#555]">
            <span class="text-accent-100">عبدالله طاهری</span> سندی را برای شما ارسال کرده
          </div>
        </div>
        <div class="flex gap-3 mt-1">
          <button class="flex gap-1 hover:font-bold">
            <Icon.OpenOutline class="relative top-0.5" size="15" />
            <span class="text-[12px]">جزییات</span>
          </button>
          <button class="flex gap-1 hover:font-bold">
            <Icon.RemoveCircleOutline class="relative top-0.5" size="15" />
            <span class="text-[12px]">پاک کردن</span>
          </button>
        </div>
        <div class="absolute left-3 bottom-2 text-xs text-gray-500">۱ ساعت پیش</div>
      </div>
    </div>
  </Section>

  <Section
    class="w-full | lg:w-[calc(33.32%-.665rem)]"
    label="لیست خواندن"
    icon={Icon.FileTrayFullOutline}
  >
    <DocumentItem />
    <DocumentItem />
    <DocumentItem seen={true} />
    <DocumentItem />
  </Section>

  <Section
    class="w-full | lg:w-[calc(33.32%-.665rem)] "
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
    class="w-full | lg:w-[calc(33.32%-.665rem)] "
    label="نشان شده ها"
    icon={Icon.BookmarksOutline}
  >
    <DocumentItem bookmarked={true} />
    <DocumentItem bookmarked={true} />
    <DocumentItem bookmarked={true} />
    <DocumentItem bookmarked={true} />
  </Section>
  <Section
    class="w-full | lg:w-[calc(33.32%-.665rem)] "
    label="اسناد پیشنهادی"
    icon={Icon.BarcodeOutline}
  >
    <DocumentItem />
    <DocumentItem />
    <DocumentItem />
    <DocumentItem />
  </Section>
</div>
