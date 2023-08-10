<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* 3rd party libraries */
  import { Editor } from 'bytemd';
  import gfm from '@bytemd/plugin-gfm';
  import mermaid from '@bytemd/plugin-mermaid';

  /***********************
   * Implementation
   ***********************/

  let value: string;
  const plugins = [gfm(), mermaid()];

  function handleChange(e) {
    value = e.detail.value;
  }
</script>

<div class="ltr prose prose-sm !max-w-full">
  <Editor
    {value}
    {plugins}
    uploadImages={() => {
      return [{ alt: 'a', url: 'https://picsum.photos/200/300', width: 300 }];
    }}
    previewDebounce={300}
    on:change={handleChange}
  />
</div>
