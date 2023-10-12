<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';

  /* Actions */
  import { outClick } from '$lib/actions/userInteractions/CustomEvents';

  /* Components */
  import ApprovalRequestItem from './_components/ApprovalRequestItem.svelte';
  import RevisionRequestItem from './_components/RevisionRequestItem.svelte';
  import ButtonWithIcon from '$lib/components/form/ButtonWithIcon.svelte';
  import NotificationsStateManagerStore from '$lib/stores/utils/NotificationsStateManagerStore';

  let revisionPopupState = true;
</script>

<div class="flex flex-col gap-2 lg:flex-row">
  <div class="h-fit min-h-[calc(100vh-4rem)] w-full bg-white p-3 lg:w-[calc(50%-0.25rem)]">
    <div class="mb-4 border-b pb-3 text-lg">اسناد در انتظار تایید</div>
    <div class="flex flex-wrap gap-2 divide-y">
      <ApprovalRequestItem />
      <ApprovalRequestItem />
      <ApprovalRequestItem />
      <ApprovalRequestItem />
      <ApprovalRequestItem />
      <ApprovalRequestItem />
      {#if false}
        <span class="mt-2 w-full text-center text-sm text-black/50"
          >هیچ سندی در انتظار تایید نمی‌باشد‌!</span
        >
      {/if}
    </div>
  </div>
  <div class="h-fit min-h-[calc(100vh-4rem)] w-full bg-white p-3 lg:w-[calc(50%-0.25rem)]">
    <div class="mb-4 border-b pb-3 text-lg">اسناد در انتظار تصحیح</div>
    <div class="flex flex-wrap gap-2 divide-y">
      <RevisionRequestItem />
      <RevisionRequestItem />
      <RevisionRequestItem />
      {#if false}
        <span class="mt-2 w-full text-center text-sm text-black/50"
          >هیچ سندی در انتظار تصحیح نمی‌باشد‌!</span
        >
      {/if}
    </div>
  </div>
</div>
