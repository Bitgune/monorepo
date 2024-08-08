import tailwindConfig from '@monorepo/tailwind-config'

const config = {
	content: [
		'./src/components/**/*.{js,jsx,mdx}',
		'./src/app/**/*.{js,jsx,mdx}'
	],
	presets: [tailwindConfig]
}

export default config
