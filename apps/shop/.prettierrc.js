const prettierConfig = require('@monorepo/eslint-config/prettier.js')

module.exports = {
	...prettierConfig,
	plugins: ['prettier-plugin-tailwindcss']
}
