import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Tailwind CSS classnames
export function cn(...inputs) {
	return twMerge(clsx(inputs))
}
