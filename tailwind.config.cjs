const { screens } = require('tailwindcss/defaultTheme');

module.exports = {
	purge: [],
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
	variants: {
		extend: {
			textColor: ['visited']
		}
	},
	plugins: [require('tailwindcss-blend-mode')()]
};
