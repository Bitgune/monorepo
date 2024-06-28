/** @type {import("eslint").Linter.Config} */

const { RULES } = require('./lib/utils')

const REACT_RULES = {
	'react/jsx-uses-react': RULES.OFF,
	'react/react-in-jsx-scope': RULES.OFF,
	'react/prop-types': RULES.OFF
}

const IMPORT_SORT_GROUPS = [
	// Side effect and polyfill imports.
	['^\\u0000'],
	// Built-in node dependencies
	[
		'^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)'
	],
	// Packages. `react` related packages come first.
	['^react'],
	// Standalone packages.
	['^\\w'],
	// Generic organization packages.
	['^@'],
	// Repo's organization packages.
	['^@monorepo'],
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
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/recommended',
		'turbo'
	],
	plugins: ['simple-import-sort'],
	globals: {
		React: true,
		JSX: true
	},
	env: {
		browser: true
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
