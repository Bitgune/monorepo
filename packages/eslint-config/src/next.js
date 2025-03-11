/** @type {import("eslint").Linter.Config} */

const { RULES } = require('./lib/utils')

const REACT_RULES = {
	'react/jsx-uses-react': RULES.OFF,
	'react/react-in-jsx-scope': RULES.OFF,
	'react/prop-types': RULES.OFF
}

const NEXT_RULES = {
	'@next/next/no-img-element': 'off'
}

const IMPORT_SORT_GROUPS = [
	// Side effect and polyfill imports.
	['^\\u0000'],
	// Built-in node dependencies
	[
		'^(node|assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)'
	],
	// Packages. `react` related packages come first.
	['^react'],
	// Packages. `next` related packages come second.
	['^next'],
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
	extends: [
		'standard',
		'standard-jsx',
		'standard-react',
		'plugin:@next/next/recommended',
		'plugin:prettier/recommended'
	],
	plugins: ['simple-import-sort', 'turbo'],
	globals: {
		React: true,
		JSX: true
	},
	env: {
		node: true,
		browser: true
	},
	ignorePatterns: [
		// Ignore dotfiles
		'.*.js',
		'node_modules/'
	],
	overrides: [
		{
			files: ['*.js?(x)']
		}
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	rules: {
		...REACT_RULES,
		...NEXT_RULES,
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
