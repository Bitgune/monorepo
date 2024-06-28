import * as React from 'react'

import { cva } from 'class-variance-authority'
import { Loader2Icon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground hover:bg-primary/90',
				danger: 'bg-danger text-danger-foreground hover:bg-danger/90',
				outline:
					'border border-foreground bg-transparent hover:bg-foreground hover:text-background',
				'outline-primary':
					'border border-primary bg-transparent hover:bg-gradient-to-tr from-primary/20 to-primary/10 hover:text-accent-foreground',
				secondary:
					'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				terciary: 'bg-foreground text-background hover:bg-foreground/90',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline'
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 rounded-md px-3',
				lg: 'h-11 rounded-md px-8',
				xl: 'h-12 rounded-md px-10 text-md',
				icon: 'h-10 w-10'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
)

const Button = React.forwardRef(
	(
		{
			children,
			className,
			variant,
			size,
			asChild = false,
			isLoading,
			...props
		},
		ref
	) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				disabled={isLoading}
				{...props}
			>
				{isLoading ? (
					<>
						<Loader2Icon
							size={20}
							strokeWidth={1.5}
							className="mr-2 animate-spin"
						/>
						{children}
					</>
				) : (
					children
				)}
			</Comp>
		)
	}
)
Button.displayName = 'Button'

export { Button, buttonVariants }
