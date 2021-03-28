module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2019
	},
	plugins: ['svelte3', '@typescript-eslint', 'clean-regex', 'promise', 'import'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:clean-regex/recommended',
		'plugin:promise/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'prettier'
	],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	ignorePatterns: ['.eslintrc.js'],
	settings: {
		'svelte3/typescript': require('typescript')
	},
	rules: {
		'import/no-unresolved': 'off'
	}
};
