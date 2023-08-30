<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* Svelte built-in libraries */
  import { fade } from 'svelte/transition';

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';

  /* Stores */
  import LockDownModalStateManagerStore from '$lib/stores/modalStateManagers/LockDownModalStateManagerStore';

  /* Components */
  import TextInput from '$lib/components/form/TextInput.svelte';
  import ButtonWithIcon from '$lib/components/form/ButtonWithIcon.svelte';

  /***********************
   * Implementation
   ***********************/

  $: if (input) input.focus();

  let input: HTMLInputElement;
</script>

{#if $LockDownModalStateManagerStore.visible}
  <div
    class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-bl from-black/60 to-accent-100/60 p-4 backdrop-blur-sm"
    transition:fade={{ duration: 100 }}
  >
    <div class="gap mx-1 flex w-full flex-col rounded bg-gray-100 p-6 text-xs lg:w-fit">
      <p>
        صفحه ی شما به دلیل عدم فعالیت قفل شده است, لطفا رمز عبور خود را وارد کنید تا ادامه دهید.
      </p>
      <div class="relative flex items-end gap-2 rounded pb-6 text-[13px] text-black">
        <div class="flex h-12 w-12 items-center justify-center rounded bg-accent-50 text-white">
          کط
        </div>
        <div class="flex flex-col gap-1">
          <p>کمیل طاهری</p>
          <p class="ltr text-right text-xs text-black/50">@komeitl</p>
        </div>
        <ButtonWithIcon class="mr-auto " label="باز کردن" icon={Icon.LockOpenOutline} />
      </div>
      <TextInput class="rounded-sm bg-white" type="password" placeholder="اینجا بنویسید" />
    </div>
  </div>
{/if}
