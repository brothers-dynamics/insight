<script lang="ts">
  import * as Icon from 'svelte-ionicons';

  import InputText from '$lib/components/form/InputText.svelte';
  import InputSelector from '$lib/components/form/InputSelector.svelte';
  import InputMultiSelect from '$lib/components/form/InputMultiSelect.svelte';
  import InputTagSelector from '$lib/components/form/InputTagSelector.svelte';
</script>

<div class="flex min-h-full flex-col gap-5 xl:flex-row">
  <div class="flex flex-col gap-6 bg-white p-6 text-xs lg:w-96">
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
        class=""
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

  <div
    class="flex min-h-full grow flex-col gap-5 rounded-default bg-white p-6 xl:flex-row xl:gap-0"
  >
    hello
  </div>
</div>
