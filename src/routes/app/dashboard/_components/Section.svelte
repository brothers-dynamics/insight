<script lang="ts">
	import type { ComponentType } from 'svelte';

	let clazz: string;
	export { clazz as class };

	export let label: string;
	export let icon: ComponentType;
</script>

<div class="flex flex-col gap-4 {clazz || ''}">
	<div class="flex gap-2 w-fit bg-[#fff] p-2 pl-6 rounded-2xl rounded-tr-none">
		<svelte:component this={icon} size="23" />
		<span>{label}</span>
	</div>
	<slot />
</div>
