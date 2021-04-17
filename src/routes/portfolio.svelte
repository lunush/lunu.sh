<script>
	import Avatar from '../assets/images/avatar.png';
	import { send, receive } from '../lib/utils/crossFade';
</script>

<main class="absolute flex justify-center w-full">
	<img
		out:send={{ key: 'avatar' }}
		in:receive={{ key: 'avatar' }}
		src={Avatar}
		alt="Avatar"
		class="h-60"
	/>
</main>
