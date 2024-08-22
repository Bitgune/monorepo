import tailwindConfig from '@monorepo/tailwind-config'

const config = {
	presets: [
		{
			...tailwindConfig,
			content: [
				'./src/components/**/*.{js,jsx}',
				'./src/app/**/*.{js,jsx}',
				'../../packages/ui/src/**/*.{js,jsx}' // Allow Tailwind to watch the UI package
			]
		}
	]
}

export default config
