<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* Components */
  import RequestItem from './_components/RequestItem.svelte';
</script>

<div class="flex flex-col gap-2 lg:flex-row">
  <div class="w-full bg-white p-3 lg:w-[calc(50%-0.25rem)]">
    <div class="mb-4 border-b border-dashed pb-3 text-lg">اسناد در انتظار تایید</div>
    <div class="flex flex-wrap gap-2 divide-y">
      <RequestItem />
    </div>
  </div>
  <div class="w-full bg-white p-3 lg:w-[calc(50%-0.25rem)]">
    <div class="mb-4 border-b border-dashed pb-3 text-lg">اسناد در انتظار تصحیح</div>
    <div class="flex flex-wrap gap-2 divide-y">
      <div class="flex gap-2">hello</div>
    </div>
  </div>
</div>
