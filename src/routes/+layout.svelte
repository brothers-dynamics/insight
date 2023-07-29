<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Insight</title>
	<link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
</svelte:head>

<div class="relative flex flex-col w-full min-h-full | md:flex-row">
	<slot />
</div>

<style>
	:global(html) {
		min-height: 100%;
	}
	:global(body) {
		position: absolute;
		font-family: 'Vazir', 'Ubuntu';
		direction: rtl;
		height: 100%;
	}
	:global(svg) {
		outline: none;
	}
	:global(.ltr) {
		direction: ltr;
	}
	:global(*::-webkit-scrollbar-track) {
		-webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.3);
		@apply bg-accent-15;
	}

	:global(*::-webkit-scrollbar) {
		width: 4px;
		@apply bg-accent-15;
	}

	:global(*::-webkit-scrollbar-thumb) {
		@apply bg-accent-100;
	}
</style>
