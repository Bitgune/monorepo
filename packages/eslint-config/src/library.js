/** @type {import("eslint").Linter.Config} */

const { RULES } = require('./lib/utils')

const IMPORT_SORT_GROUPS = [
	// Side effect and polyfill imports.
	['^\\u0000'],
	// Built-in node dependencies
	[
		'^(node|assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)'
	],
	// Third-party packages.
	['^(@|@[^/]+/|[^./]+)'],
	// Monorepo's organization packages.
	['^@monorepo'],
	// Alias organization packages.
	['^@/(.*)'],
	// Relative imports. Put `./` last.
	[
		'^\\.\\.(?!/?$)',
		'^\\.\\./?$',
		'^\\./(?=.*/)(?!/?$)',
		'^\\.(?!/?$)',
		'^\\./?$'
	],
	// Style imports.
	['^.+\\.s?css$']
]

module.exports = {
	extends: ['standard', 'plugin:prettier/recommended'],
	plugins: ['simple-import-sort', 'turbo'],
	globals: {
		React: true,
		JSX: true
	},
	env: {
		node: true
	},
	ignorePatterns: [
		// Ignore dotfiles
		'.*.js',
		'node_modules/',
		'dist/'
	],
	overrides: [
		{
			files: ['*.js?(x)']
		}
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {
		'simple-import-sort/imports': [
			RULES.WARNING,
			{ groups: IMPORT_SORT_GROUPS }
		],

		'no-console':
			process.env.NODE_ENV === 'production' ? RULES.WARNING : RULES.OFF,
		'no-debugger':
			process.env.NODE_ENV === 'production' ? RULES.ERROR : RULES.OFF
	}
}
