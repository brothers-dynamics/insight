<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';

  /* Components */
  import TextInput from '$lib/components/form/TextInput.svelte';
  import SelectorInput from '$lib/components/form/SelectorInput.svelte';
  import MultiSelectInput from '$lib/components/form/MultiSelectInput.svelte';
  import TagSelectorInput from '$lib/components/form/TagSelectorInput.svelte';
  import DocumentItem from '$lib/components/items/DocumentItem.svelte';
  import SelectionButtonGroup from '$lib/components/utils/SelectionButtonGroup.svelte';
</script>

<div class="flex min-h-full flex-col gap-5 xl:flex-row">
  <div class="flex h-fit shrink-0 flex-col gap-6 bg-white p-6 text-xs lg:min-w-[400px]">
    <div class="flex flex-col gap-2">
      <div class="flex flex-col gap-1">
        <div class="font-bold text-black/60">عنوان سند</div>
      </div>
      <TextInput />
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex flex-col gap-1">
        <div class="font-bold text-black/60">نوع سند</div>
      </div>
      <SelectorInput
        icon={Icon.DocumentsOutline}
        list={[
          {
            label: 'همه',
            value: '*'
          }
        ]}
        selected="*"
      />
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex flex-col gap-1">
        <div class="font-bold text-black/60">تگ ها</div>
      </div>
      <TagSelectorInput />
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex flex-col gap-1">
        <div class="font-bold text-black/60">نویسنده</div>
      </div>
      <SelectorInput
        icon={Icon.PersonOutline}
        list={[
          {
            label: 'همه',
            value: '*'
          }
        ]}
        selected="*"
        class=""
      />
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex flex-col gap-1">
        <div class="font-bold text-black/60">دامنه</div>
      </div>
      <MultiSelectInput
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
  </div>
  <div class="flex min-h-full grow flex-col gap-3 bg-white p-6">
    <div class="border-b border-dashed p-2 text-sm">
      <div class="flex gap-2">
        <SelectionButtonGroup
          class="pt-0"
          options={[
            { label: 'جدید ترین', value: '1', icon: Icon.FlashOutline },
            { label: 'مفید ترین', value: '2', icon: Icon.StarOutline },
            { label: 'ترند', value: '3', icon: Icon.FlameOutline }
          ]}
          selected="1"
        />
      </div>
    </div>
    <div class="relative flex flex-col divide-y">
      {#if false}
        <div
          class="absolute inset-0 z-10 flex min-h-[400px] items-center justify-center bg-white/70 backdrop-blur-sm"
        >
          <Icon.CloudCircleOutline class="animate-pulse text-gray-700" size="40" />
        </div>
      {/if}
      <DocumentItem />
      <DocumentItem />
      <DocumentItem />
      <DocumentItem />
      <DocumentItem />
      <DocumentItem />
      <DocumentItem />
      <DocumentItem />
    </div>
    <div class="-mb-2 mt-auto border-t border-dashed pt-4">
      <SelectionButtonGroup
        options={[
          { label: '1', value: '1' },
          { label: '2', value: '2' },
          { label: '3', value: '3' },
          { label: '4', value: '4' }
        ]}
        selected="1"
      />
    </div>
  </div>
</div>
