<script lang="ts">
  import * as Icon from 'svelte-ionicons';

  import InputText from '$lib/components/form/InputText.svelte';
  import InputSelector from '$lib/components/form/InputSelector.svelte';
  import InputMultiSelect from '$lib/components/form/InputMultiSelect.svelte';
  import InputTagSelector from '$lib/components/form/InputTagSelector.svelte';
  import DocumentItem from '$lib/components/DocumentItem.svelte';
  import SelectionButtonGroup from '$lib/components/SelectionButtonGroup.svelte';
</script>

<div class="flex min-h-full flex-col gap-5 xl:flex-row">
  <div class="flex h-fit flex-col gap-6 bg-white p-6 text-xs lg:w-1/4">
    <div class="flex flex-col gap-2">
      <div class="flex flex-col gap-1">
        <div class="font-bold text-black/60">عنوان سند</div>
      </div>
      <InputText />
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex flex-col gap-1">
        <div class="font-bold text-black/60">نوع سند</div>
      </div>
      <InputSelector
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
      <InputTagSelector />
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex flex-col gap-1">
        <div class="font-bold text-black/60">نویسنده</div>
      </div>
      <InputSelector
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
      <InputMultiSelect
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
    <div class="flex flex-col gap-5 -space-y-4 divide-y">
      <DocumentItem extended />
      <DocumentItem extended />
      <DocumentItem extended />
      <DocumentItem extended />
      <DocumentItem extended />
      <DocumentItem extended />
      <DocumentItem extended />
      <DocumentItem extended />
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
