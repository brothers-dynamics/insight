<script lang="ts">
  import { onMount } from 'svelte';

  let raw: string = `CKEditor brings hundreds of features that can transform your world of content editing. Discover which ones you need for your use case!
                     This demo showcases most of the CKEditor features along with some premium addons: Export to PDF/Word, Import from Word, and WProofreader.
                     See this demo live at ckeditor.com or read more about it in the CKEditor 5 documentation.`;
  let selectedRange: Range;

  const updateSelection = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      selectedRange = selection.getRangeAt(0);
    }
  };

  function isOrContainsStrongNode(node) {
    while (node && node.nodeName !== 'STRONG') {
      node = node.parentNode;
    }
    return node != null;
  }

  onMount(() => {
    document.addEventListener('selectionchange', updateSelection);
  });

  function toggleBold() {
    updateSelection();
    if (selectedRange) {
      const parent = selectedRange.commonAncestorContainer.parentNode;
      if (parent.nodeName === 'STRONG') {
        const textNode = document.createTextNode(parent.innerText);
        parent.parentNode.replaceChild(textNode, parent);

        // Restore selection
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(textNode);
        selection.removeAllRanges();
        selection.addRange(range);
      } else if (!isOrContainsStrongNode(selectedRange.commonAncestorContainer)) {
        const newNode = document.createElement('strong');
        newNode.appendChild(selectedRange.extractContents());
        selectedRange.insertNode(newNode);
      }
    }
  }
</script>

<div class="flex flex-col gap-2">
  <div class="flex gap-2">
    <button class="rounded-lg bg-black/10 px-3 py-1 hover:bg-black/20" on:click={toggleBold}
      >Bold</button
    >
  </div>

  <div
    class="prose !max-w-full rounded bg-white p-4 text-xs outline-none"
    contenteditable="true"
    bind:innerText={raw}
  />
</div>