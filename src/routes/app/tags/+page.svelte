<script lang="ts">
  /***********************
   * Dependencies
   ***********************/

  /* 3rd party libraries */
  import { graphql } from '$houdini';
  import type { PageData } from './$houdini';
  import * as Icon from 'svelte-ionicons';

  /* Stores */
  import NotificationsStateManagerStore from '$lib/stores/utils/NotificationsStateManagerStore';

  /* Components */
  import Section from '$lib/components/layer/Section.svelte';
  import TextInput from '$lib/components/form/TextInput.svelte';
  import TextareaInput from '$lib/components/form/TextareaInput.svelte';
  import ButtonWithIcon from '$lib/components/form/ButtonWithIcon.svelte';
  import TagItem from './_components/TagItem.svelte';

  /***********************
   * Implementation
   ***********************/

  export let data: PageData;
  $: ({ tagsPageData } = data);

  let name: TextInput;
  let description: TextareaInput;

  async function createTag() {
    name.clearError();
    description.clearError();
    const createTag = graphql(`
      mutation CreateTag($fields: TagCreateFields!) {
        tagCreate(fields: $fields) {
          tag {
            id
            ...TagsList_insert
          }
          errors {
            code
            message
            extension
          }
        }
      }
    `);
    const result = await createTag.mutate({
      fields: {
        name: name.value || '',
        description: description.value || ''
      }
    });
    if (result.data?.tagCreate?.errors?.length === 0) {
      NotificationsStateManagerStore.notify({
        message: `تگ '${name.value}' با موفقیت ایجاد شد.`,
        type: 'Success'
      });
      name.value = '';
      description.value = '';
    } else {
      if (!result.data?.tagCreate?.errors[0]) return;
      result.data.tagCreate.errors.forEach((error) => {
        if (error.code === 'BAD_INPUT') {
          if (error.extension.field[0] === 'name') {
            if (name.errorMessage === '') name.displayError(error.message);
          }
          if (error.extension.field[0] === 'description') {
            if (description.errorMessage === '') description.displayError(error.message);
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
  <Section class="h-fit" label="لیست تگ ها" icon={Icon.AppsOutline}>
    <div class="flex flex-wrap gap-2 text-sm">
      {#if $tagsPageData.data}
        {#each $tagsPageData.data.tags as tag (tag.id)}
          <TagItem
            data={{
              id: tag.id,
              name: tag.name,
              description: tag.description,
              documents: tag.documents?.length || 0,
              createdAt: tag.createdAt,
              updatedAt: tag.updatedAt
            }}
          />
        {:else}
          <div class="text-black/50 bg-gray-50/50 px-4 py-2 rounded">
            هیچ تگی وجود ندارد, با استفاده از فرم زیر میتواند یک تگ جدید بسازید !
          </div>
        {/each}
      {/if}
    </div>
  </Section>
  <Section class="mt-8 h-fit" label="ساختن تگ جدید" icon={Icon.AddCircleOutline}>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <div class="flex gap-2 divide-x divide-x-reverse">
            <span class="text-black">نام تگ</span>
            <!-- <ButtonMicroWithIcon label="AI" icon={Icon.ColorWandOutline} /> -->
          </div>
          <div class="text-xs text-black/40">
            سعی کنید نام تگ را به گونه ای انتخاب کنید که طولانی و ابهام آمیز نباشد.
          </div>
        </div>
        <TextInput class="xl:w-128" bind:this={name} />
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <div class="flex gap-2 divide-x divide-x-reverse">
            <span class="text-black">توضیحات</span>
            <!-- <ButtonMicroWithIcon label="AI" icon={Icon.ColorWandOutline} /> -->
          </div>
          <div class="text-xs text-black/40">به صورت مختصر توضیحی برای این تگ بنویسید.</div>
        </div>
        <TextareaInput class="text-xs xl:w-128" bind:this={description} />
      </div>
      <ButtonWithIcon
        class="w-full gap-2 px-3 sm:w-fit"
        label="ساختن"
        icon={Icon.CreateOutline}
        on:click={({ detail: { done } }) => {
          setTimeout(async () => {
            await createTag();
            done();
          }, 1000);
        }}
      />
    </div>
  </Section>
</div>
