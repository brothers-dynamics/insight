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

<div class="relative flex gap-2 p-2 px-4 bg-white rounded-default overflow-hidden">
  <div
    class="absolute -left-5 top-1/2 -translate-y-1/2 aspect-square w-48 rounded-full bg-accent-70"
  />
  <div class="text-xs">{caption}</div>
  {#if link.label !== ''}
    <a
      class="text-gray-600 bg-gray-200 text-[10px] flex items-center px-2 rounded-default cursor-pointer"
      href={link.href}
    >
      ➲ {link.label}
    </a>
  {/if}
  <div class="absolute top-1/2 -translate-y-1/2 left-2 text-xs px-3 py-1 text-white">
    {persianDate}
  </div>
</div>
