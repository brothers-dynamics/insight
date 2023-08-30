<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';

  /* Stores */
  import NotificationsStateManagerStore from '$lib/stores/utils/NotificationsStateManagerStore';

  /* Components */
  import TagItem from './_components/TagItem.svelte';
  import TextInput from '$lib/components/form/TextInput.svelte';
  import TextareaInput from '$lib/components/form/TextareaInput.svelte';
  import ButtonWithIcon from '$lib/components/form/ButtonWithIcon.svelte';
</script>

<div class="min-h-full bg-white p-3">
  <div class="mb-4 border-b border-dashed pb-3 text-lg">لیست تگ ها</div>
  <div class="flex flex-wrap gap-2 text-sm">
    <TagItem
      data={{
        id: 1,
        name: 'دستگاه CNC',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
        documents: [],
        createdAt: new Date(),
        updatedAt: new Date()
      }}
    />
    <TagItem
      data={{
        id: 1,
        name: 'ایمنی',
        description: 'اسناد مربوط به دستگاه CNC',
        documents: [],
        createdAt: new Date(),
        updatedAt: new Date()
      }}
    />
    <TagItem
      data={{
        id: 1,
        name: 'مهم',
        description: 'اسناد مربوط به دستگاه CNC',
        documents: [],
        createdAt: new Date(),
        updatedAt: new Date()
      }}
    />
    <TagItem
      data={{
        id: 1,
        name: 'برنامه نویسی',
        description: 'اسناد مربوط به دستگاه CNC',
        documents: [],
        createdAt: new Date(),
        updatedAt: new Date()
      }}
    />
    <TagItem
      data={{
        id: 1,
        name: 'نکات تجربی',
        description: 'اسناد مربوط به دستگاه CNC',
        documents: [],
        createdAt: new Date(),
        updatedAt: new Date()
      }}
    />
    <TagItem
      data={{
        id: 1,
        name: 'نکته',
        description: 'اسناد مربوط به دستگاه CNC',
        documents: [],
        createdAt: new Date(),
        updatedAt: new Date()
      }}
    />
  </div>
  <div class="my-4 border-b border-dashed pb-3 text-lg">ساختن تگ جدید</div>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <div class="flex gap-2 divide-x divide-x-reverse">
          <span class="text-black">نام تگ</span>
          <!-- <ButtonMicroWithIcon label="AI" icon={Icon.ColorWandOutline} /> -->
        </div>
        <div class="text-xs text-black/40">
          سعی کنید نام تگ را به گونه ای انتخاب کنید که طولانی و ابهام آمیز نباشد.
        </div>
      </div>
      <TextInput class="xl:w-128" />
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <div class="flex gap-2 divide-x divide-x-reverse">
          <span class="text-black">توضیحات</span>
          <!-- <ButtonMicroWithIcon label="AI" icon={Icon.ColorWandOutline} /> -->
        </div>
        <div class="text-xs text-black/40">به صورت مختصر توضیحی برای این تگ بنویسید.</div>
      </div>
      <TextareaInput class="xl:w-128" />
    </div>
    <ButtonWithIcon
      class="w-full gap-2 px-3 sm:w-fit"
      label="ساختن"
      icon={Icon.CreateOutline}
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
  </div>
</div>
