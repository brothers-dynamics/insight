<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';

  /* Actions */
  import { overClass } from '$lib/actions/elementEnhancements/OverClass';

  /***********************
   * Implementation
   ***********************/

  let clazz = '';
  export { clazz as class };

  export let size = '10';
</script>

<div class="flex h-full items-center justify-center gap-1" use:overClass={clazz}>
  <Icon.Ellipse
    class="animate-jump animate-delay-100 animate-duration-[600ms] animate-fill-both animate-infinite"
    tabindex="-1"
    {size}
  />
  <Icon.Ellipse
    class="animate-jump animate-delay-200 animate-duration-[600ms] animate-fill-both animate-infinite"
    tabindex="-1"
    {size}
  />
  <Icon.Ellipse
    class="animate-jump animate-delay-300 animate-duration-[600ms] animate-fill-both animate-infinite"
    tabindex="-1"
    {size}
  />
</div>
