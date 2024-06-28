import sharedConfig from '@monorepo/tailwind-config'

const config = {
	content: [
		'./src/components/**/*.{js,jsx,mdx}',
		'./src/app/**/*.{js,jsx,mdx}'
	],
	presets: [sharedConfig]
}

export default config
