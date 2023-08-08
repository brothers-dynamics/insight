<script lang="ts">
  import { Editor } from 'bytemd';
  import gfm from '@bytemd/plugin-gfm';

  let value: string;
  const plugins = [
    gfm()
    // Add more plugins here
  ];

  function handleChange(e) {
    value = e.detail.value;
  }
</script>

<div class="ltr prose prose-sm !max-w-full">
  <Editor {value} {plugins} on:change={handleChange} />
</div>
