<script lang="ts">
  import * as Icon from 'svelte-ionicons';
  import { page } from '$app/stores';

  import NavbarItem from './_components/NavbarItem.svelte';
</script>

<div class="flex flex-col gap-3 w-full bg-white border-l border-dashed | md:w-[250px]">
  <nav class="relative flex gap-2 h-fit p-4 py-5 border-b border-dashed text-[14px]">
    <div class="flex justify-center items-center w-12 h-12 bg-accent-70 text-white rounded-2xl">
      کط
    </div>
    <div class="flex flex-col gap-1">
      <p>کمیل طاهری</p>
      <p class="text-gray-500 text-xs text-right ltr">@komeitl</p>
    </div>
    <div
      class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer hover:text-black"
    >
      <Icon.EllipsisVertical size="20" />
    </div>
  </nav>
  <nav class="flex flex-col grow gap-2 h-fit p-4 py-5 text-[14px]">
    <NavbarItem label="داشبورد" icon={Icon.Speedometer} path={'dashboard'} />
    <NavbarItem label="نوشتن" icon={Icon.Receipt} path={'write'} />
    <NavbarItem label="جستوجو" icon={Icon.SearchCircle} path={'search'} />
    <NavbarItem label="کتابخانه" icon={Icon.Library} path={'library'} />
    <NavbarItem label="پیام ها" icon={Icon.ChatbubbleEllipses} path={'messages'} />
    <NavbarItem label="مدیریت" icon={Icon.Settings} path={'settings'} />
  </nav>
</div>

<div
  class="relative grow p-4 w-full max-h-[100vh] overflow-y-auto | sm:p-8 md:w-[calc(100%-250px)]"
>
  <div
    class="fixed inset-0 bg-[linear-gradient(#5E35B120,rgba(0,0,0,0.02)),url(/images/grid.svg)] -z-50"
  />
  <slot />
</div>

<style>
  :global(body) {
    width: 100%;
    background-color: white;
    color: black;
  }
</style>
