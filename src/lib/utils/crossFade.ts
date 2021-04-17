import { quintOut } from 'svelte/easing';
import { crossfade } from 'svelte/transition';

const DURATION = 1000;
const [send, receive] = crossfade({
	duration: (d) => Math.sqrt(d * DURATION),
	fallback(node) {
		const style = getComputedStyle(node);
		const transform = style.transform === 'none' ? '' : style.transform;

		return {
			duration: DURATION,
			easing: quintOut,
			css: (t) => `
                transform: ${transform} scale(${t});
                opacity: ${t}
            `
		};
	}
});

export { send, receive };
