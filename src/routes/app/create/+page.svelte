<script lang="ts">
  import * as Icon from 'svelte-ionicons';

  import { createEditor } from 'svelte-editorjs';

  const { editor, data, isReady } = createEditor();
</script>

<div class="| flex min-h-full flex-col gap-5 xl:flex-row">
  <div class="| flex w-full flex-col gap-3 text-xs lg:w-96">
    <div
      class="flex cursor-pointer flex-col gap-2 overflow-hidden rounded-default bg-accent-70 p-3 px-5 text-white shadow-sm shadow-slate-700/10 duration-75 hover:scale-[1.015]"
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
      class="flex cursor-pointer flex-col gap-2 overflow-hidden rounded-default bg-white p-3 px-5 shadow-sm shadow-slate-700/10 duration-75 hover:scale-[1.015]"
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
      class="flex cursor-pointer flex-col gap-2 overflow-hidden rounded-default bg-white p-3 px-5 shadow-sm shadow-slate-700/10 duration-75 hover:scale-[1.015]"
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
      class="flex cursor-pointer flex-col gap-2 overflow-hidden rounded-default bg-white p-3 px-5 shadow-sm shadow-slate-700/10 duration-75 hover:scale-[1.015]"
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
      class="flex cursor-pointer flex-col gap-2 overflow-hidden rounded-default bg-white p-3 px-5 shadow-sm shadow-slate-700/10 duration-75 hover:scale-[1.015]"
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
  <div class="flex grow flex-col gap-2 bg-white p-9 text-sm shadow-xl shadow-slate-700/10">
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <div class="text-black/60">عنوان سند</div>
        <div class="text-xs text-black/40">
          عنوان سند را به گونه ای انتخاب کنید که کاملا واضح و رسا باشد
        </div>
      </div>
      <input class=" w-[500px] bg-black/5 px-4 py-2 text-xs outline-none" type="text" />
      <div class="" use:createEditor />
    </div>
  </div>
</div>
