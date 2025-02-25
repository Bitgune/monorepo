/** @type {import("eslint").Linter.Config} */
module.exports = {
	extends: ['@monorepo/eslint-config/react'],
	rules: {
		'no-redeclare': 'off'
	}
}
