<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* 3rd party libraries */
  import { graphql, cache } from '$houdini';
  import type { PageData } from './$houdini';
  import * as Icon from 'svelte-ionicons';
  import { Privileges } from '$houdini';

  /* Stores */
  import ConfirmModalStateManagerStore from '$lib/stores/modalStateManagers/ConfirmModalStateManagerStore';
  import NotificationsStateManagerStore from '$lib/stores/utils/NotificationsStateManagerStore';

  /* Components */
  import Section from '$lib/components/layer/Section.svelte';
  import RoleListItem from './_components/RoleListItem.svelte';
  import ButtonWithIcon from '$lib/components/form/ButtonWithIcon.svelte';
  import TextInput from '$lib/components/form/TextInput.svelte';
  import TagSelectorInput from '$lib/components/form/TagSelectorInput.svelte';

  /***********************
   * Implementation
   ***********************/

  export let data: PageData;
  $: ({ rolesPageData } = data);

  let formMode: 'Create' | 'Update' = 'Create';
  let updatingRole: {
    id: number;
    name: string;
    privileges: (typeof Privileges)[];
  };

  function changeFormModeToUpdate({ detail: role }: { detail: typeof updatingRole }) {
    name.clearError();
    privileges.clearError();
    updatingRole = role;
    name.value = updatingRole.name;
    privileges.values = updatingRole.privileges.map((value) => {
      return {
        value: value + '',
        label:
          (value + '')
            .split('_')
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
            .join(' ') + ''
      };
    });
    formMode = 'Update';
  }

  function changeFormModeToCreate() {
    formMode = 'Create';
    name.value = '';
    privileges.values = [];
    name.clearError();
    privileges.clearError();
  }

  let name: TextInput;
  let privileges: TagSelectorInput;

  async function createRole() {
    name.clearError();
    privileges.clearError();
    const createRole = graphql(`
      mutation CreateRole($fields: RoleCreateFields!) {
        roleCreate(fields: $fields) {
          role {
            id
            ...RolesList_insert
          }
          errors {
            code
            message
            extension
          }
        }
      }
    `);
    const result = await createRole.mutate({
      fields: {
        name: name.value || '',
        privileges:
          privileges.values?.map(
            (privilege) => Privileges[privilege.value as keyof typeof Privileges]
          ) || []
      }
    });

    if (result.data?.roleCreate?.errors?.length === 0) {
      NotificationsStateManagerStore.notify({
        message: `نقش '${name.value}' با موفقیت ایجاد شد.`,
        type: 'Success'
      });
      name.value = '';
      privileges.values = [];
    } else {
      if (!result.data?.roleCreate?.errors[0]) return;
      result.data.roleCreate.errors.forEach((error) => {
        if (error.code === 'BAD_INPUT') {
          if (error.extension.field[0] === 'name') {
            if (name.errorMessage === '') name.displayError(error.message);
          }
          if (error.extension.field[0] === 'privileges') {
            if (privileges.errorMessage === '') privileges.displayError(error.message);
          }
        } else {
          NotificationsStateManagerStore.notify({
            message: error.message,
            type: 'Error'
          });
        }
      });
    }
  }

  async function updateRole() {
    const confirmation = await ConfirmModalStateManagerStore.prompt({
      message: `آیا مطمعنید که میخواهید نقش '${updatingRole.name}' را ویرایش کنید ؟`,
      label: 'ویرایش'
    });
    if (!confirmation) return;
    const updateRole = graphql(`
      mutation UpdateRole($id: Int!, $fields: RoleUpdateFields!) {
        roleUpdate(id: $id, fields: $fields) {
          role {
            id
          }
          errors {
            code
            message
            extension
          }
        }
      }
    `);
    const result = await updateRole.mutate({
      id: updatingRole.id,
      fields: {
        name: name.value,
        privileges:
          privileges.values?.map(
            (privilege) => Privileges[privilege.value as keyof typeof Privileges]
          ) || []
      }
    });
    if (result.data?.roleUpdate?.errors?.length === 0) {
      NotificationsStateManagerStore.notify({
        message: `نقش '${updatingRole.name}' با موفقیت ویرایش شد.`,
        type: 'Success'
      });
      const updatedRole = cache.get('Role', { id: updatingRole.id });
      updatedRole.write({
        fragment: graphql(`
          fragment RoleInfo on Role {
            name
            privileges
          }
        `),
        data: {
          name: name.value || '',
          privileges:
            privileges.values?.map(
              (privilege) => Privileges[privilege.value as keyof typeof Privileges]
            ) || []
        }
      });
      name.value = '';
      privileges.values = [];
      formMode = 'Create';
    } else {
      if (!result.data?.roleUpdate?.errors[0]) return;
      result.data.roleUpdate.errors.forEach((error) => {
        if (error.code === 'BAD_INPUT') {
          if (error.extension.field[0] === 'name') {
            if (name.errorMessage === '') name.displayError(error.message);
          }
          if (error.extension.field[0] === 'privileges') {
            if (privileges.errorMessage === '') privileges.displayError(error.message);
          }
        } else {
          NotificationsStateManagerStore.notify({
            message: error.message,
            type: 'Error'
          });
        }
      });
    }
  }
</script>

<div class="min-h-full p-3">
  <Section class="w-full " label="لیست نقش ها" icon={Icon.WalletOutline}>
    <div class="flex flex-wrap gap-3">
      {#if $rolesPageData.data}
        {#each $rolesPageData.data.roles as role (role.id)}
          <RoleListItem
            data={{
              id: role.id,
              name: role.name,
              privileges: role.privileges || [],
              users: role.users?.length || 0,
              createdAt: role.createdAt,
              updatedAt: role.updatedAt
            }}
            on:update={changeFormModeToUpdate}
          />
        {:else}
          <div class="text-black/50 bg-gray-50/50 px-4 py-2 rounded">
            هیچ نقشی وجود ندارد, با استفاده از فرم زیر میتواند یک نقش جدید بسازید !
          </div>
        {/each}
      {/if}
    </div>
  </Section>
  <Section
    class="mt-8 w-full"
    label={formMode === 'Create' ? 'ساختن نقش جدید' : `ویرایش ${updatingRole.name}`}
    icon={Icon.CreateOutline}
  >
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <div class="flex gap-2 divide-x divide-x-reverse">
            <span class="text-black">نام نقش</span>
            <!-- <ButtonMicroWithIcon label="AI" icon={Icon.ColorWandOutline} /> -->
          </div>
          <div class="text-xs text-black/40">
            نامی که ارائه می‌دهید باید وظایف و اختیارات مرتبط با این نقش را بازتاب دهد, همچنین واضح
            و مختصر باشید.
          </div>
        </div>
        <TextInput class="xl:w-128" bind:this={name} />
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <div class="flex gap-2 divide-x divide-x-reverse">
            <span class="text-black">دسترسی ها</span>
            <!-- <ButtonMicroWithIcon label="AI" icon={Icon.ColorWandOutline} /> -->
          </div>
          <div class="text-xs text-black/40">
            با دقت دسترسی‌های مورد نیاز برای این نقش را انتخاب کنید. مطمئن شوید که با وظایف و
            مسئولیت‌های این نقش هماهنگی دارند.
          </div>
        </div>
        <TagSelectorInput
          class="xl:w-128"
          list={Object.keys(Privileges).map((privilege) => {
            return {
              label: privilege
                .split('_')
                .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
                .join(' '),
              value: privilege
            };
          })}
          bind:this={privileges}
        />
      </div>
      {#if formMode === 'Create'}
        <ButtonWithIcon
          class="w-full gap-2 px-3 sm:w-fit"
          label="ساختن"
          icon={Icon.CreateOutline}
          on:click={({ detail: { done } }) => {
            setTimeout(async () => {
              await createRole();
              done();
            }, 1000);
          }}
        />
      {:else}
        <div class="flex gap-2">
          <ButtonWithIcon
            class="w-full gap-2 px-3 sm:w-fit"
            label="ویرایش"
            icon={Icon.CreateOutline}
            on:click={async ({ detail: { done } }) => {
              await updateRole();
              done();
            }}
          />
          <ButtonWithIcon
            class="w-full gap-2 bg-gray-500 px-3 sm:w-fit"
            label="لغو"
            icon={Icon.CloseCircleOutline}
            on:click={({ detail: { done } }) => {
              changeFormModeToCreate();
              done();
            }}
          />
        </div>
      {/if}
    </div>
  </Section>
</div>
