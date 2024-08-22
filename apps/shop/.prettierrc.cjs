const prettierConfig = require('@monorepo/eslint-config/prettier')

module.exports = {
	...prettierConfig,
	plugins: ['prettier-plugin-tailwindcss']
}
