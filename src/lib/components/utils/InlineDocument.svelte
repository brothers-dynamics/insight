<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* Actions */
  import { overClass } from '$lib/actions/elementEnhancements/OverClass';

  /***********************
   * Implementation
   ***********************/

  let clazz = '';
  export { clazz as class };

  export let document: { id: string; version?: number } = {
    id: 'MAN-00001',
    version: 1
  };
</script>

<a
  class="flex cursor-pointer items-center rounded bg-gray-200 px-2 font-mono text-[10px] text-gray-600"
  href="/app/document/{document.id + (document.version ? '/' + document.version : '')}"
  use:overClass={clazz}
>
  ➲ {document.id + (document.version ? '/' + document.version : '')}
</a>
