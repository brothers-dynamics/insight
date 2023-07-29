<script lang="ts">
	import { goto } from '$app/navigation';
	import { useMachine } from '@xstate/svelte';
	import * as Icon from 'svelte-ionicons';

	import CredentialInput from './_components/CredentialInput.svelte';
	import { Machine as LoginMachine, States as LoginStates } from './_machines/login';

	const { state, send } = useMachine(LoginMachine);

	let username: string, password: string;

	function submit() {
		send('LOGIN', {
			username,
			password
		});
	}

	$: if ($state.matches(LoginStates.LoggedIn)) {
		setTimeout(() => {
			goto('/');
		}, 1500);
	}
</script>

<div class="flex justify-center items-center w-full h-full overflow-hidden">
	<form class="relative flex flex-col gap-5 w-[20rem] text-sm" on:submit|preventDefault={submit}>
		<div class="flex flex-col gap-4 items-center">
			<svg
				width="64"
				height="64"
				viewBox="0 0 200 200"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clip-path="url(#clip0_234_854)">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M44 0H0V150C0 177.614 22.3858 200 50 200H94V50C94 22.3858 71.6142 0 44 0ZM156 0C128.386 0 106 22.3858 106 50V200H150C177.614 200 200 177.614 200 150V0H156Z"
						fill="url(#paint0_linear_234_854)"
					/>
				</g>
				<defs>
					<linearGradient
						id="paint0_linear_234_854"
						x1="100"
						y1="0"
						x2="100"
						y2="200"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#DF99F7" /> <stop offset="1" stop-color="#FFDBB0" />
					</linearGradient>
					<clipPath id="clip0_234_854"> <rect width="200" height="200" fill="white" /> </clipPath>
				</defs>
			</svg>
			<b class="text-2xl space-x-3 font-bold tracking-[5px]">INSIGHT</b>
			<sub class="-mt-3 mb-4 text-gray-400">Version 1.0</sub>
		</div>
		<CredentialInput
			placeholder="نام کاربری"
			icon={Icon.PersonSharp}
			invalid={$state.matches(LoginStates.InvalidCredentials)}
			bind:value={username}
		/>
		<CredentialInput
			placeholder="رمز عبور"
			icon={Icon.LockClosed}
			type="password"
			invalid={$state.matches(LoginStates.InvalidCredentials)}
			bind:value={password}
		/>
		<button
			class="group relative flex h-10 rounded-b-xl overflow-hidden bg-accent-60 cursor-pointer duration-100 hover:bg-accent-100"
			class:bg-green-700={$state.matches(LoginStates.LoggedIn)}
			class:hover:bg-green-700={$state.matches(LoginStates.LoggedIn)}
		>
			<div class="absolute left-0 top-0 w-10 h-full">
				<svelte:component
					this={$state.matches(LoginStates.LoggedIn) ? Icon.Checkmark : Icon.ArrowForward}
					class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 duration-200 group-active:scale-75"
					tabindex="-1"
				/>
			</div>
			<div class="items-center grow h-full text-left px-4 font-semibold load">
				{#if $state.matches(LoginStates.LoggedIn)}
					<div class="h-full leading-10 text-center">ورود موفقیت آمیز</div>
				{:else if $state.matches(LoginStates.LoggingIn)}
					<div class="flex gap-1 justify-center items-center h-full">
						<Icon.Ellipse
							class="animate-jump animate-infinite animate-duration-[600ms] animate-delay-100 animate-fill-both"
							tabindex="-1"
							size="10"
						/>
						<Icon.Ellipse
							class="animate-jump animate-infinite animate-duration-[600ms] animate-delay-200 animate-fill-both"
							tabindex="-1"
							size="10"
						/>
						<Icon.Ellipse
							class="animate-jump animate-infinite animate-duration-[600ms] animate-delay-300 animate-fill-both"
							tabindex="-1"
							size="10"
						/>
					</div>
				{:else}
					<div class="h-full leading-10 text-center">ورود</div>
				{/if}
			</div>
		</button>
	</form>
</div>

<style>
	:global(body) {
		@apply bg-[#111];
		@apply text-[#eee];
	}
</style>
