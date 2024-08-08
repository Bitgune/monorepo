import tailwindConfig from '@monorepo/tailwind-config'

const config = {
	content: ['./src/**/*.jsx'],
	// prefix: 'ui-',
	presets: [tailwindConfig]
}

export default config
