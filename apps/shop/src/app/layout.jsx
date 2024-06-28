import { Inter } from 'next/font/google'

import './globals.css'
import '@monorepo/ui/styles.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Create Turborepo',
	description: 'Generated by create turbo'
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
