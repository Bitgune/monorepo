import sharedConfig from '@monorepo/tailwind-config'

const config = {
	content: ['./src/**/*.jsx'],
	// prefix: 'ui-',
	presets: [sharedConfig]
}

export default config
