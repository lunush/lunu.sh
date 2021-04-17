<script>
	import Avatar from '../assets/images/avatar.png';
</script>

<main class="grid place-items-center h-full w-full">
	<div class="flex flex-col sm:flex-row align-middle items-center">
		<img src={Avatar} alt="Avatar" class="h-60 mb-6 sm:mb-0 sm:mr-6" />
		<div class="flex flex-col items-center sm:items-start">
			<h1 class="text-3xl sm:text-4xl sm:mb-4">Hi there! <span class="wave">👋</span></h1>
			<h2 class="text-xl sm:text-2xl">I am a self-taught web developer</h2>
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
