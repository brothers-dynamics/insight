<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* 3rd party libraries */
  import { graphql, cache } from '$houdini';
  import type { PageData } from './$houdini';
  import * as Icon from 'svelte-ionicons';

  /* Stores */
  import BlankModalStateManagerStore from '$lib/stores/modalStateManagers/BlankModalStateManagerStore';

  /* Components */
  import Section from '$lib/components/layer/Section.svelte';
  import TextInputWithIcon from '$lib/components/form/TextInputWithIcon.svelte';
  import MultiSelectInput from '$lib/components/form/MultiSelectInput.svelte';
  import UserListItem from './_components/UserListItem.svelte';
  import CreateUserButton from './_components/CreateUserButton.svelte';
  import CreateUserForm from './_components/CreateUserForm.svelte';

  /***********************
   * Implementation
   ***********************/

  export let data: PageData;

  $: ({ usersPageData } = data);
</script>

<div class="min-h-full p-3">
  <Section class="w-full " label="لیست کاربران" icon={Icon.PeopleCircleOutline}>
    <svelte:fragment slot="strip">
      <MultiSelectInput
        class="mt-2 h-full w-56 rounded-xl shadow-lg sm:mt-0"
        icon={Icon.WalletOutline}
        list={[
          { label: 'اپراتور', value: 'x2' },
          { label: 'طراح', value: 'x3' },
          { label: 'برنامه نویس', value: 'x4' },
          { label: 'پشتیبانی', value: 'x5' },
          { label: 'ناظر', value: 'x6' }
        ]}
        selected={['*']}
      />
      <TextInputWithIcon
        class="h-full w-56 rounded-xl shadow-lg"
        placeholder="جستوجوی نام کاربر"
        type="text"
        icon={Icon.PersonCircleOutline}
      />
    </svelte:fragment>
    <div class="flex flex-wrap gap-3 text-xs">
      <UserListItem />
      <UserListItem />
      <UserListItem />
      <UserListItem />
      <UserListItem />
      <UserListItem />
      <CreateUserButton
        on:click={() => {
          BlankModalStateManagerStore.open(CreateUserForm);
        }}
      />
    </div>
  </Section>
</div>
