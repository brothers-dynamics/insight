<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* Svelte built-in libraries */
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';

  /***********************
   * Implementation
   ***********************/

  function click() {
    dispatch('click');
  }
</script>

<button
  class="group relative flex max-h-[112px] w-full cursor-pointer items-center justify-center gap-3 rounded-xl border-2 border-dashed border-accent-15 bg-shady p-9 pb-9 shadow-lg backdrop-blur-sm duration-75 hover:bg-accent-10 md:w-[calc((100%-0.75rem)/2)] lg:w-[calc((100%-0.75rem)/2)] xl:w-[calc((100%-0.75rem*2)/3)] 2xl:w-[calc((100%-0.75rem*3)/4)]"
  on:click={click}
>
  <div
    class="flex flex-col items-center justify-center gap-2 text-accent-80 duration-75 group-active:scale-95"
  >
    <Icon.PersonAddOutline size="30" />
    <span class="text-sm drop-shadow-xl">کاربر جدید</span>
  </div>
</button>
