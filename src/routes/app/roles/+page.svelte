<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';

  /* Components */
  import Section from '$lib/components/layer/Section.svelte';
  import TextInputWithIcon from '$lib/components/form/TextInputWithIcon.svelte';
  import MultiSelectInput from '$lib/components/form/MultiSelectInput.svelte';
  import RoleListItem from './_components/RoleListItem.svelte';
  import ButtonWithIcon from '$lib/components/form/ButtonWithIcon.svelte';
  import TextareaInput from '$lib/components/form/TextareaInput.svelte';
  import TextInput from '$lib/components/form/TextInput.svelte';
  import PickWithSuggestInput from '$lib/components/form/PickWithSuggestInput.svelte';
  import TagSelectorInput from '$lib/components/form/TagSelectorInput.svelte';
</script>

<div class="min-h-full p-3">
  <Section class="w-full " label="لیست نقش ها" icon={Icon.WalletOutline}>
    <div class="flex flex-wrap gap-3">
      <RoleListItem />
      <RoleListItem />
      <RoleListItem />
      <RoleListItem />
      <RoleListItem />
      <RoleListItem />
    </div>
  </Section>
  <Section class="mt-8 w-full" label="ساختن نقش جدید" icon={Icon.CreateOutline}>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <div class="flex gap-2 divide-x divide-x-reverse">
            <span class="text-black">نام نقش</span>
            <!-- <ButtonMicroWithIcon label="AI" icon={Icon.ColorWandOutline} /> -->
          </div>
          <div class="text-xs text-black/40">
            نامی که ارائه می‌دهید باید وظایف و اختیارات مرتبط با این نقش را بازتاب دهد, همچنین واضح
            و مختصر باشید.
          </div>
        </div>
        <TextInput class="xl:w-128" />
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <div class="flex gap-2 divide-x divide-x-reverse">
            <span class="text-black">دسترسی ها</span>
            <!-- <ButtonMicroWithIcon label="AI" icon={Icon.ColorWandOutline} /> -->
          </div>
          <div class="text-xs text-black/40">
            با دقت دسترسی‌های مورد نیاز برای این نقش را انتخاب کنید. مطمئن شوید که با وظایف و
            مسئولیت‌های این نقش هماهنگی دارند.
          </div>
        </div>
        <TagSelectorInput
          class="xl:w-128"
          list={[
            { label: 'مشاهده کلید‌ها', value: 'view_keys' },
            { label: 'اضافه کردن کلید جدید', value: 'add_new_key' },
            { label: 'ویرایش کلید', value: 'edit_key' },
            { label: 'حذف کلید', value: 'delete_key' },
            { label: 'مشاهده دسترسی‌ها', value: 'view_permissions' },
            { label: 'تنظیم دسترسی‌ها', value: 'set_permissions' },
            { label: 'مشاهده گزارش‌ها', value: 'view_reports' },
            { label: 'ساخت گزارش جدید', value: 'create_report' },
            { label: 'ویرایش گزارش', value: 'edit_report' },
            { label: 'حذف گزارش', value: 'delete_report' },
            { label: 'مشاهده تنظیمات', value: 'view_settings' },
            { label: 'ویرایش تنظیمات', value: 'edit_settings' },
            { label: 'خروجی‌گیری اطلاعات', value: 'export_data' }
          ]}
        />
      </div>
      <ButtonWithIcon
        class="w-full gap-2 px-3 sm:w-fit"
        label="ساختن"
        icon={Icon.CreateOutline}
        on:click={({ detail: { done } }) => {
          setTimeout(() => {
            done();
          }, 3000);
        }}
      />
    </div>
  </Section>
</div>
