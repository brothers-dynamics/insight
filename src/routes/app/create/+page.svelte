<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';

  /* Stores */
  import NotificationsStateManagerStore from '$lib/stores/utils/NotificationsStateManagerStore';

  /* Components */
  import Editor from '$lib/components/utils/Editor.svelte';
  import TextInput from '$lib/components/form/TextInput.svelte';
  import TextareaInput from '$lib/components/form/TextareaInput.svelte';
  import TagSelectorInput from '$lib/components/form/TagSelectorInput.svelte';
  import MultiSelectInput from '$lib/components/form/MultiSelectInput.svelte';
  import ButtonWithIcon from '$lib/components/form/ButtonWithIcon.svelte';
  // import ButtonMicroWithIcon from '$lib/components/form/ButtonMicroWithIcon.svelte';
</script>

<div class="flex min-h-full flex-col gap-5 xl:flex-row">
  <div class="flex w-full shrink-0 flex-col gap-3 text-xs xl:w-[400px]">
    <div
      class="flex cursor-pointer flex-col gap-2 overflow-hidden rounded-xl bg-accent-70 p-3 px-5 text-white shadow-xl shadow-slate-700/10 duration-75 hover:scale-[1.015]"
    >
      <div class="flex gap-2 text-sm">
        <Icon.DocumentTextOutline class="text-white" size="20" />
        <span>دانش</span>
      </div>
      <div class="text-justify text-xs text-white/80">
        دانش شامل اطلاعاتی است که کاربران با تجربه و تحقیقات خود جمع‌آوری کرده‌اند و مطالب آن به
        صورت مختصر و مفید ارائه می‌شود.
      </div>
    </div>
    <div
      class="flex cursor-pointer flex-col gap-2 overflow-hidden rounded-xl bg-white p-3 px-5 shadow-xl shadow-slate-700/10 duration-75 hover:scale-[1.015]"
    >
      <div class="flex gap-2 text-sm text-accent-70">
        <Icon.Book class="" size="20" />
        <span>راهنما</span>
      </div>
      <div class="text-justify text-xs text-black/60">
        دانش شامل اطلاعاتی است که کاربران با تجربه و تحقیقات خود جمع‌آوری کرده‌اند و مطالب آن به
        صورت مختصر و مفید ارائه می‌شود.
      </div>
    </div>
    <div
      class="flex cursor-pointer flex-col gap-2 overflow-hidden rounded-xl bg-white p-3 px-5 shadow-xl shadow-slate-700/10 duration-75 hover:scale-[1.015]"
    >
      <div class="flex gap-2 text-sm text-accent-70">
        <Icon.PlayCircle class="" size="20" />
        <span>فرایند</span>
      </div>
      <div class="text-justify text-xs text-black/60">
        دانش شامل اطلاعاتی است که کاربران با تجربه و تحقیقات خود جمع‌آوری کرده‌اند و مطالب آن به
        صورت مختصر و مفید ارائه می‌شود.
      </div>
    </div>
    <div
      class="flex cursor-pointer flex-col gap-2 overflow-hidden rounded-xl bg-white p-3 px-5 shadow-xl shadow-slate-700/10 duration-75 hover:scale-[1.015]"
    >
      <div class="flex gap-2 text-sm text-accent-70">
        <Icon.Shield class="" size="20" />
        <span>سیاست</span>
      </div>
      <div class="text-justify text-xs text-black/60">
        دانش شامل اطلاعاتی است که کاربران با تجربه و تحقیقات خود جمع‌آوری کرده‌اند و مطالب آن به
        صورت مختصر و مفید ارائه می‌شود.
      </div>
    </div>
    <div
      class="flex cursor-pointer flex-col gap-2 overflow-hidden rounded-xl bg-white p-3 px-5 shadow-xl shadow-slate-700/10 duration-75 hover:scale-[1.015]"
    >
      <div class="flex gap-2 text-sm text-accent-70">
        <Icon.Receipt class="" size="20" />
        <span>گزارش</span>
      </div>
      <div class="text-justify text-xs text-black/60">
        دانش شامل اطلاعاتی است که کاربران با تجربه و تحقیقات خود جمع‌آوری کرده‌اند و مطالب آن به
        صورت مختصر و مفید ارائه می‌شود.
      </div>
    </div>
  </div>
  <div
    class="flex w-full grow flex-col gap-4 rounded-xl bg-white p-9 text-sm shadow-xl shadow-slate-700/10 xl:w-[calc(100%-25%-1.25rem)]"
  >
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <div class="flex gap-2 divide-x divide-x-reverse">
          <span class="text-black">عنوان سند</span>
          <!-- <ButtonMicroWithIcon label="AI" icon={Icon.ColorWandOutline} /> -->
        </div>
        <div class="text-xs text-black/40">
          عنوان سند را به گونه ای انتخاب کنید که کاملا واضح و منتاسب باشد.
        </div>
      </div>
      <TextInput class="xl:w-128" />
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <div class="text-black">محتوا</div>
        <div class="text-xs text-black/40">
          برای نوشتن محتوا مطمعن شوید از <a
            class="text-accent-60 underline"
            href="/app/help#foramts">فرمت درست</a
          > استفاده میکنید.
        </div>
      </div>
      <div class="flex flex-col text-xs">
        <Editor />
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <div class="flex gap-2 divide-x divide-x-reverse">
          <span class="text-black">خلاصه</span>
          <!-- <ButtonMicroWithIcon label="AI" icon={Icon.ColorWandOutline} /> -->
        </div>
        <div class="text-xs text-black/40">
          برای نوشتن محتوا مطمعن شوید از <a
            class="text-accent-60 underline"
            href="/app/help#foramts">فرمت درست</a
          > استفاده میکنید.
        </div>
      </div>
      <div class="flex flex-col text-xs">
        <TextareaInput class="min-h-[100px] xl:w-128" />
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <div class="flex gap-2 divide-x divide-x-reverse">
          <span class="text-black">دامنه</span>
          <!-- <ButtonMicroWithIcon label="AI" icon={Icon.ColorWandOutline} /> -->
        </div>
        <div class="text-xs text-black/40">
          برای نوشتن محتوا مطمعن شوید از <a
            class="text-accent-60 underline"
            href="/app/help#foramts">فرمت درست</a
          > استفاده میکنید.
        </div>
      </div>
      <MultiSelectInput
        class="xl:w-128"
        icon={Icon.GolfOutline}
        list={[
          { label: 'اپراتور', value: 'x2' },
          { label: 'طراح', value: 'x3' },
          { label: 'برنامه نویس', value: 'x4' },
          { label: 'پشتیبانی', value: 'x5' },
          { label: 'ناظر', value: 'x6' }
        ]}
        selected={['*']}
      />
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <div class="flex gap-2 divide-x divide-x-reverse">
          <span class="text-black">تگ</span>
          <!-- <ButtonMicroWithIcon label="AI" icon={Icon.ColorWandOutline} /> -->
        </div>
        <div class="text-xs text-black/40">
          برای نوشتن محتوا مطمعن شوید از <a
            class="text-accent-60 underline"
            href="/app/help#foramts">فرمت درست</a
          > استفاده میکنید.
        </div>
      </div>
      <TagSelectorInput
        class="xl:w-128"
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
      />
    </div>
    <div class="flex flex-wrap gap-4">
      <ButtonWithIcon
        class="w-full px-7 sm:w-fit"
        label="ارسال"
        icon={Icon.PushOutline}
        on:click={({ detail: { done } }) => {
          setTimeout(() => {
            done();
            NotificationsStateManagerStore.notify({
              type: 'Success',
              message: 'سند با موفقیت ارسال شد.'
            });
          }, 3000);
        }}
      />
      <ButtonWithIcon
        class="w-full bg-blue-600/80 px-7 hover:bg-blue-600 sm:w-fit"
        label="ذخیره در پیشنویس"
        icon={Icon.CreateOutline}
      />
    </div>
  </div>
</div>
