<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* Svelte built-in libraries */
  import { fade } from 'svelte/transition';

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';

  /* Actions */
  import { outClick } from '$lib/actions/userInteractions/CustomEvents';

  /* Stores */
  import ConfirmModalStateManagerStore from '$lib/stores/modalStateManagers/ConfirmModalStateManagerStore';

  /* Components */
  import ButtonWithIcon from '$lib/components/form/ButtonWithIcon.svelte';

  /***********************
   * Implementation
   ***********************/

  let cooldown: number;
  let countdown: ReturnType<typeof setInterval>;

  function load() {
    cooldown = 0;
    if ($ConfirmModalStateManagerStore.sensitive) {
      cooldown = 3;
      countdown = setInterval(() => {
        cooldown--;
        if (cooldown === 0) clearInterval(countdown);
      }, 1000);
    }
  }

  function unload() {
    clearInterval(countdown);
  }
</script>

{#if $ConfirmModalStateManagerStore.visible}
  <div
    class="fixed inset-0 z-[40] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
    transition:fade={{ duration: 100 }}
    on:introstart={load}
    on:outrostart={unload}
  >
    <div
      class="flex h-fit w-full flex-col items-center gap-4 rounded bg-white p-8 sm:top-16 sm:w-fit sm:p-16"
      use:outClick={() => {
        ConfirmModalStateManagerStore.cancel();
      }}
    >
      <Icon.AlertCircleOutline size="84" class="text-black/70" />
      <div class="flex gap-1 text-sm">
        <span class="text-center">{$ConfirmModalStateManagerStore.message}</span>
      </div>
      <div class="flex flex-wrap gap-4">
        <ButtonWithIcon
          class="overflow-hidden text-xs opacity-90 hover:opacity-100 sm:w-fit {$ConfirmModalStateManagerStore.accent}"
          label={cooldown ? `${cooldown} ثانیه تا فعال شدن` : $ConfirmModalStateManagerStore.label}
          icon={Icon.CheckmarkCircleOutline}
          on:click={({ detail: { done } }) => {
            setTimeout(() => {
              done();
              ConfirmModalStateManagerStore.confirm();
            }, 2500);
          }}
          disabled={Boolean(cooldown)}
        />
        <ButtonWithIcon
          class="bg-gray-500 text-xs opacity-90 hover:opacity-100 sm:w-fit"
          label="لغو"
          icon={Icon.CloseCircleOutline}
          on:click={({ detail: { done } }) => {
            ConfirmModalStateManagerStore.cancel();
            done();
          }}
        />
      </div>
    </div>
  </div>
{/if}
