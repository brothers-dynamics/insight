<script lang="ts">
  export let caption: string;
  export let date: Date;
  export let link: { label: string; href: string } = {
    label: '',
    href: ''
  };

  const persianDate: string = date.toLocaleDateString('fa-IR', {
    month: 'long',
    day: 'numeric',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric'
  });
</script>

<div class="relative flex gap-2 overflow-hidden rounded-default bg-white p-2 px-4">
  <div
    class="absolute -left-5 top-1/2 hidden aspect-square w-52 -translate-y-1/2 rounded-full bg-accent-70 xl:block"
  />
  <div class="text-xs">{caption}</div>
  {#if link.label !== ''}
    <a
      class="flex cursor-pointer items-center rounded-default bg-gray-200 px-2 text-[10px] text-gray-600"
      href={link.href}
    >
      ➲ {link.label}
    </a>
  {/if}
  <div
    class="absolute left-2 top-1/2 hidden -translate-y-1/2 px-3 py-1 text-xs text-white xl:block"
  >
    {persianDate}
  </div>
</div>
