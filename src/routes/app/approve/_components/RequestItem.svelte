<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';

  /* Stores */

  /* Components */
  import InlineDocument from '$lib/components/utils/InlineDocument.svelte';
</script>

<div class="flex flex-wrap gap-2 divide-x divide-x-reverse text-xs">
  <div class="flex gap-2">
    <Icon.ReaderOutline size="18" />
    <span class=""> سند جدید : راهنمای استفاده از سیستم </span>
    <InlineDocument />
  </div>
  <div class="flex gap-2 pr-2">
    <Icon.LibraryOutline size="18" />
    <span class=""> سند مرجع : راهنمای استفاده از سیستم </span>
    <InlineDocument />
  </div>
  <div class="flex gap-2 pr-2">
    <Icon.LibraryOutline size="18" />
    <span class=""> سند مرجع : راهنمای استفاده از سیستم </span>
    <InlineDocument />
  </div>
</div>
