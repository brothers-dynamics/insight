<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* 3rd party libraries */
  import * as Icon from 'svelte-ionicons';

  /* Components */
  import Section from '$lib/components/layer/Section.svelte';
  import UserListItem from './_components/UserListItem.svelte';
</script>

<div class="min-h-full p-3">
  <Section class="w-full " label="لیست کاربران" icon={Icon.PeopleCircleOutline}>
    <div class="flex flex-wrap gap-3 text-xs">
      <UserListItem />
      <UserListItem />
      <UserListItem />
      <UserListItem />
      <UserListItem />
      <UserListItem />
    </div>
  </Section>
</div>
