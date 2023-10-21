<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';

  /* Stores */
  import BlankModalStateManagerStore from '$lib/stores/modalStateManagers/BlankModalStateManagerStore';

  /* Components */
  import TextInput from '$lib/components/form/TextInput.svelte';
  import PickWithSuggestInput from '$lib/components/form/PickWithSuggestInput.svelte';
  import SwitchInput from '$lib/components/form/SwitchInput.svelte';
  import ButtonWithIcon from '$lib/components/form/ButtonWithIcon.svelte';
</script>

<div class="flex flex-col gap-2">
  <div class="flex flex-col gap-1">
    <div class="flex gap-2">
      <Icon.AtSharp tabindex="-1" size="18" />
      <span class="text-xs text-black">نام کاربری</span>
    </div>
  </div>
  <TextInput />
</div>
<div class="flex flex-col gap-2">
  <div class="flex flex-col gap-1">
    <div class="flex gap-2">
      <Icon.PersonCircleOutline tabindex="-1" size="18" />
      <span class="text-xs text-black">نام</span>
    </div>
  </div>
  <TextInput />
</div>
<div class="flex flex-col gap-2">
  <div class="flex flex-col gap-1">
    <div class="flex gap-2">
      <Icon.PersonCircleOutline tabindex="-1" size="18" />
      <span class="text-xs text-black">نام خوانوادگی</span>
    </div>
  </div>
  <TextInput />
</div>
<div class="flex flex-col gap-2">
  <div class="flex flex-col gap-1">
    <div class="flex gap-2">
      <Icon.KeyOutline tabindex="-1" size="18" />
      <span class="text-xs text-black">رمز عبور</span>
    </div>
  </div>
  <TextInput type="password" />
</div>
<div class="flex flex-col gap-2">
  <div class="flex flex-col gap-1">
    <div class="flex gap-2">
      <Icon.WalletOutline tabindex="-1" size="18" />
      <span class="text-xs text-black">نقش</span>
    </div>
  </div>
  <PickWithSuggestInput
    list={[
      {
        label: 'برنامه نویس',
        value: 'برنامه نویس'
      }
    ]}
  />
</div>
<div class="flex flex-col gap-2">
  <div class="flex flex-col gap-1">
    <div class="flex gap-2">
      <Icon.ToggleOutline tabindex="-1" size="18" />
      <span class="text-xs text-black">وضعیت</span>
    </div>
  </div>
  <SwitchInput
    options={[
      {
        label: 'فعال',
        value: 'Active'
      },
      {
        label: 'غیر فعال',
        value: 'Inactive'
      }
    ]}
  />
</div>
<div class="flex flex-wrap gap-4">
  <ButtonWithIcon
    class="w-full px-7 sm:w-fit"
    label="ثبت"
    icon={Icon.CheckmarkCircleOutline}
    on:click={({ detail: { done } }) => {
      done();
    }}
  />
  <ButtonWithIcon
    class="w-full bg-gray-500/80 px-7 text-xs hover:bg-gray-500 sm:w-fit"
    label="لغو"
    icon={Icon.CloseCircleOutline}
    on:click={({ detail: { done } }) => {
      done();
      BlankModalStateManagerStore.close();
    }}
  />
</div>
