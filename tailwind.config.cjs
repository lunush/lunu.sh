// Vite doesn't work with jit
// https://github.com/tailwindlabs/tailwindcss/issues/4073
const { screens } = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['./public/**/*.html', './src/**/*.{js,ts,svelte}'],
	darkMode: false,
	theme: {
		screens: { xs: { min: '420px' }, ...screens },
		extend: {
			maxWidth: {
				'screen-3xl': '1920px'
			},
			maxHeight: { 'screen-3xl': '1080px' },
			minHeight: { '2/3': '66%' },
			spacing: {
				90: '22.5rem',
				120: '30rem',
				150: '37.5rem'
			}
		}
	},
	plugins: [require('tailwindcss-blend-mode')()]
};
