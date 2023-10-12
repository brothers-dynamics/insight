<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';

  /* Components */
  import Section from '$lib/components/layer/Section.svelte';
  import ApprovalRequestItem from './_components/ApprovalRequestItem.svelte';
  import RevisionRequestItem from './_components/RevisionRequestItem.svelte';
</script>

<div class="flex flex-col gap-2 lg:flex-row">
  <Section
    class="h-fit min-h-[calc(100vh-4rem)] w-full p-3 lg:w-[calc(50%-0.25rem)]"
    label="اسناد در انتظار تایید"
    icon={Icon.CheckboxOutline}
  >
    <div class="flex flex-wrap gap-3">
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
  </Section>
  <Section
    class="h-fit min-h-[calc(100vh-4rem)] w-full p-3 lg:w-[calc(50%-0.25rem)]"
    label="اسناد در انتظار تصحیح"
    icon={Icon.CreateOutline}
  >
    <div class="flex flex-wrap gap-3">
      <RevisionRequestItem />
      <RevisionRequestItem />
      <RevisionRequestItem />
      {#if false}
        <span class="mt-2 w-full text-center text-sm text-black/50"
          >هیچ سندی در انتظار تصحیح نمی‌باشد‌!</span
        >
      {/if}
    </div>
  </Section>
</div>
