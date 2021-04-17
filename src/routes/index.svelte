<script>
	import Avatar from '../assets/images/avatar.png';
	import { send, receive } from '../lib/utils/crossFade';
</script>

<main class="absolute grid place-items-center h-full w-full p-6">
	<div class="flex flex-col sm:flex-row items-center">
		<img
			out:send={{ key: 'avatar' }}
			in:receive={{ key: 'avatar' }}
			src={Avatar}
			alt="Avatar"
			class="h-60 mb-6 sm:mb-0 sm:mr-6"
		/>
		<div
			class="flex flex-col items-center sm:items-start bg-white p-4 border
    rounded-t-3xl rounded-b-3xl rounded-tl sm:rounded-tl-3xl sm:rounded-bl"
		>
			<h1 class="text-3xl sm:text-4xl mb-2 sm:mb-4">Hi there! <span class="wave">👋</span></h1>
			<h2 class="text-xl sm:text-2xl max-w-sm">
				I am a web developer interested in privacy and security
			</h2>
		</div>
	</div>
</main>

<style>
	.wave {
		animation: wave-animation 2.5s infinite;
		transform-origin: 70% 70%;
		display: inline-block;
	}

	@keyframes wave-animation {
		0% {
			transform: rotate(0deg);
		}
		10% {
			transform: rotate(14deg);
		}
		20% {
			transform: rotate(-8deg);
		}
		30% {
			transform: rotate(14deg);
		}
		40% {
			transform: rotate(-4deg);
		}
		50% {
			transform: rotate(10deg);
		}
		60% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>
