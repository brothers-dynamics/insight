<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* Svelte built-in libraries */
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  /* 3rd party libraries */
  import { graphql } from '$houdini';
  import type { Role } from '$graphql/$kitql/graphqlTypes';
  import * as Icon from 'svelte-ionicons';

  /* Actions */
  import { overClass } from '$lib/actions/elementEnhancements/OverClass';

  /* Stores */
  import ConfirmModalStateManagerStore from '$lib/stores/modalStateManagers/ConfirmModalStateManagerStore';
  import NotificationsStateManagerStore from '$lib/stores/utils/NotificationsStateManagerStore';

  /***********************
   * Implementation
   ***********************/

  let clazz = '';
  export { clazz as class };

  export let data: Omit<Role, 'users'> & {
    users: number;
  };

  function callUpdateEvent() {
    dispatch('update', { id: data.id, name: data.name, privileges: data.privileges });
  }

  async function deleteRole() {
    const confirmation = await ConfirmModalStateManagerStore.prompt({
      message: `آیا مطمعنید که میخواهید نقش '${data.name}' را حذف کنید ؟`,
      label: 'حذف',
      accent: 'bg-red-500',
      sensitive: true
    });
    if (!confirmation) return;
    const deleteRole = graphql(`
      mutation DeleteRole($id: Int!) {
        roleDelete(id: $id) {
          role {
            id
            ...RolesList_remove
          }
          errors {
            code
            message
          }
        }
      }
    `);
    const result = await deleteRole.mutate({
      id: data.id
    });
    if (result.data?.roleDelete?.errors?.length === 0) {
      NotificationsStateManagerStore.notify({
        message: `تگ '${data.name}' با موفقیت حدف شد.`,
        type: 'Success'
      });
    } else {
      if (!result.data?.roleDelete?.errors[0]) return;
      NotificationsStateManagerStore.notify({
        message: result.data?.roleDelete?.errors[0].message,
        type: 'Error'
      });
    }
  }
</script>

<div
  class="group relative flex w-full flex-col gap-3 rounded-xl bg-white p-2 px-3 text-xs shadow-lg md:w-[calc((100%-0.75rem*1)/2)] xl:w-[calc((100%-0.75rem*1)/2)] 2xl:w-[calc((100%-0.75rem*2)/3)]"
  use:overClass={clazz}
>
  <div class="flex gap-3">
    <div class="flex gap-1.5 font-bold">
      <Icon.WalletOutline size="15" />
      <span>{data.name}</span>
    </div>
    <div class=" rounded bg-accent-50 px-2 text-[11px] text-white">{data.users} کاربر فعال</div>
    <div class="mr-auto flex gap-3">
      <Icon.TrashBinOutline
        class="cursor-pointer text-[#F44336] opacity-50 duration-75 hover:opacity-100"
        size="13"
        on:click={deleteRole}
      />
      <Icon.CreateOutline
        class="cursor-pointer  opacity-50 duration-75 hover:opacity-100"
        size="13"
        on:click={callUpdateEvent}
      />
    </div>
  </div>
  <div class="flex w-full flex-wrap gap-2 border-t border-dashed py-2">
    {#each data.privileges as privilege}
      <div class="flex gap-1 rounded bg-black/5 px-2 py-0.5 text-[11px]">
        <Icon.MedicalOutline class="relative top-px" size="12" />
        <span
          >{privilege
            .split('_')
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
            .join(' ')}</span
        >
      </div>
    {:else}
      <div class="flex gap-1 rounded bg-black/5 px-2 py-0.5 text-[11px]">
        <Icon.WineOutline class="relative top-px" size="12" />
        <span>این نقش دارای دسترسی خاصی نمیباشد.</span>
      </div>
    {/each}
  </div>
</div>
