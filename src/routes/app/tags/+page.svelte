<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';

  /* Stores */
  import NotificationsStateManagerStore from '$lib/stores/utils/NotificationsStateManagerStore';

  /* Components */
  import Section from '$lib/components/layer/Section.svelte';
  import TextInput from '$lib/components/form/TextInput.svelte';
  import TextareaInput from '$lib/components/form/TextareaInput.svelte';
  import ButtonWithIcon from '$lib/components/form/ButtonWithIcon.svelte';
  import TagItem from './_components/TagItem.svelte';

  import { graphql } from '$houdini';

  const data = graphql(`
    query Tags1 {
      tags {
        id
        name
        description
        documents {
          id
        }
        createdAt
      }
    }
  `);
</script>

<div class="min-h-full p-3">
  <Section class="h-fit" label="لیست تگ ها" icon={Icon.AppsOutline}>
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
  </Section>
  <Section class="mt-8 h-fit" label="ساختن تگ جدید" icon={Icon.AddCircleOutline}>
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
        <TextareaInput class="text-xs xl:w-128" />
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
  </Section>
</div>
