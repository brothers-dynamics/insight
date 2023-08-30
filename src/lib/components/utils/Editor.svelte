<script lang="ts">
  import type { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
  import { onDestroy, onMount, createEventDispatcher } from 'svelte';
  import debounce from 'just-debounce-it';

  const dispatch = createEventDispatcher();
  const INPUT_EVENT_DEBOUNCE_WAIT = 300;

  export let value = '';

  $: watchValue(value);

  function watchValue(x) {
    if (instance && x !== lastEditorData) {
      instance.setData(x);
    }
  }

  let instance: ClassicEditor | null = null;
  let lastEditorData = '';
  let editorElement: HTMLElement | null;

  onMount(async () => {
    let ClassicEditor = (await import('@ckeditor/ckeditor5-editor-classic')).ClassicEditor;
    let Essentials = (await import('@ckeditor/ckeditor5-essentials')).Essentials;
    let Bold = (await import('@ckeditor/ckeditor5-basic-styles')).Bold;
    let Italic = (await import('@ckeditor/ckeditor5-basic-styles')).Italic;
    let Alignment = (await import('@ckeditor/ckeditor5-alignment')).Alignment;
    editorElement = document.querySelector('#editor') as HTMLElement;
    if (editorElement) {
      ClassicEditor.create(editorElement, {
        language: 'fa',
        plugins: [Essentials, Bold, Italic, Alignment],
        toolbar: {
          items: ['bold', 'italic', '|', 'undo', 'redo', '|', 'alignment']
        }
      })
        .then((editor) => {
          // Save the reference to the instance for future use.
          instance = editor;
          // Let the world know the editor is ready.
          dispatch('ready', editor);
          setUpEditorEvents();
        })
        .catch((error) => {
          console.error(error);
        });
    }

    function setUpEditorEvents() {
      const emitInputEvent = (evt) => {
        // Cache the last editor data. This kind of data is a result of typing,
        // editor command execution, collaborative changes to the document, etc.
        // This data is compared when the component value changes in a 2-way binding.
        if (!instance) return;
        const data = (value = lastEditorData = instance.getData());
        dispatch('input', { data, evt, instance });
      };
      if (instance) {
        // Debounce emitting the #input event. When data is huge, instance#getData()
        // takes a lot of time to execute on every single key press and ruins the UX.
        instance.model.document.on(
          'change:data',
          debounce(emitInputEvent, INPUT_EVENT_DEBOUNCE_WAIT)
        );

        instance.editing.view.document.on('focus', (evt) => {
          dispatch('focus', { evt, instance });
        });

        instance.editing.view.document.on('blur', (evt) => {
          dispatch('blur', { evt, instance });
        });
      }
    }
  });
  onDestroy(() => {
    if (instance) {
      instance.destroy();
      instance = null;
    }

    // Note: By the time the editor is destroyed (promise resolved, editor#destroy fired)
    // the Vue component will not be able to emit any longer.
    // So emitting #destroy a bit earlier.
    dispatch('destroy', instance);
  });
</script>

<textarea id="editor" />
