import tailwindConfig from '@monorepo/tailwind-config'

const config = {
	// prefix: 'ui-',
	presets: [
		{
			...tailwindConfig,
			content: ['./src/**/*.{js,jsx}']
		}
	]
}

export default config
