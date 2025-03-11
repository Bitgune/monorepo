/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: ['@monorepo/eslint-config/react'],
	rules: {
		'no-redeclare': 'off'
	}
}
