<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* 3rd party libraries */
  import { graphql, cache, rolesPageDataStore } from '$houdini';
  import * as Icon from 'svelte-ionicons';

  /* Stores */
  import BlankModalStateManagerStore from '$lib/stores/modalStateManagers/BlankModalStateManagerStore';

  /* Components */
  import TextInput from '$lib/components/form/TextInput.svelte';
  import SwitchInput from '$lib/components/form/SwitchInput.svelte';
  import ButtonWithIcon from '$lib/components/form/ButtonWithIcon.svelte';
  import SelectorInput from '$lib/components/form/SelectorInput.svelte';

  /***********************
   * Implementation
   ***********************/

  let username: TextInput;
  let firstname: TextInput;
  let lastname: TextInput;
  let password: TextInput;
  let role: SelectorInput;
  let isActive: SwitchInput;

  const roles = new rolesPageDataStore();
  roles.setup();
  roles.fetch();

  function createUser() {
    username.clearError();
    firstname.clearError();
    lastname.clearError();
    password.clearError();
    role.clearError();
    isActive.clearError();
    const createUser = graphql(`
      mutation CreateUser($fields: UserCreateFields!) {
        userCreate(fields: $fields) {
          user {
            id
            ...UsersList_insert
          }
          errors {
            message
            code
            extension
          }
        }
      }
    `);
    const result = createUser.mutate({
      fields: {
        username: username.value || '',
        firstname: firstname.value || '',
        lastname: lastname.value || '',
        password: password.value || '',
        role: role.value || ''
      }
    });
  }
</script>

<div class="flex flex-col gap-2">
  <div class="flex flex-col gap-1">
    <div class="flex gap-2">
      <Icon.AtSharp tabindex="-1" size="18" />
      <span class="text-xs text-black">نام کاربری</span>
    </div>
  </div>
  <TextInput bind:this={username} />
</div>
<div class="flex flex-col gap-2">
  <div class="flex flex-col gap-1">
    <div class="flex gap-2">
      <Icon.PersonCircleOutline tabindex="-1" size="18" />
      <span class="text-xs text-black">نام</span>
    </div>
  </div>
  <TextInput bind:this={firstname} />
</div>
<div class="flex flex-col gap-2">
  <div class="flex flex-col gap-1">
    <div class="flex gap-2">
      <Icon.PersonCircleOutline tabindex="-1" size="18" />
      <span class="text-xs text-black">نام خوانوادگی</span>
    </div>
  </div>
  <TextInput bind:this={lastname} />
</div>
<div class="flex flex-col gap-2">
  <div class="flex flex-col gap-1">
    <div class="flex gap-2">
      <Icon.KeyOutline tabindex="-1" size="18" />
      <span class="text-xs text-black">رمز عبور</span>
    </div>
  </div>
  <TextInput bind:this={password} type="password" />
</div>
<div class="flex flex-col gap-2">
  <div class="flex flex-col gap-1">
    <div class="flex gap-2">
      <Icon.WalletOutline tabindex="-1" size="18" />
      <span class="text-xs text-black">نقش</span>
    </div>
  </div>
  <SelectorInput
    selected=""
    class=""
    list={$roles.data?.roles.map((role) => {
      return { value: role.name, label: role.name };
    }) || []}
    bind:this={role}
  />
</div>
<div class="flex flex-col gap-2">
  <div class="flex flex-col gap-1">
    <div class="flex gap-2">
      <Icon.ToggleOutline tabindex="-1" size="18" />
      <span class="text-xs text-black">وضعیت</span>
    </div>
  </div>
  <SwitchInput
    options={[
      {
        label: 'فعال',
        value: 'Active'
      },
      {
        label: 'غیر فعال',
        value: 'Inactive'
      }
    ]}
    bind:this={isActive}
  />
</div>
<div class="flex flex-wrap gap-4">
  <ButtonWithIcon
    class="w-full px-7 sm:w-fit"
    label="ثبت"
    icon={Icon.CheckmarkCircleOutline}
    on:click={({ detail: { done } }) => {
      done();
    }}
  />
  <ButtonWithIcon
    class="w-full bg-gray-500/80 px-7 text-xs hover:bg-gray-500 sm:w-fit"
    label="لغو"
    icon={Icon.CloseCircleOutline}
    on:click={({ detail: { done } }) => {
      done();
      BlankModalStateManagerStore.close();
    }}
  />
</div>
