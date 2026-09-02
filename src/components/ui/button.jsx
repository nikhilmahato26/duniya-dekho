import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:scale-[0.97]',
  {
    variants: {
      variant: {
        primary:
          'bg-gold-400 text-navy-900 shadow-[0_10px_30px_-12px_rgba(245,172,0,0.9)] hover:bg-gold-300 hover:shadow-[0_16px_38px_-14px_rgba(245,172,0,0.95)] hover:-translate-y-0.5',
        navy: 'bg-navy-800 text-white hover:bg-navy-700 shadow-soft hover:-translate-y-0.5',
        teal: 'bg-teal-500 text-white hover:bg-teal-600 shadow-glow hover:-translate-y-0.5',
        outline:
          'border border-navy-200 bg-white text-navy-800 hover:border-teal-400 hover:text-teal-600 hover:-translate-y-0.5',
        ghost: 'text-navy-700 hover:bg-navy-50 hover:text-navy-900',
        glass:
          'border border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:-translate-y-0.5',
        link: 'text-teal-600 underline-offset-4 hover:underline rounded-none',
      },
      size: {
        sm: 'h-9 px-4 text-[13px] [&_svg]:size-4',
        md: 'h-11 px-6 text-sm [&_svg]:size-4',
        lg: 'h-13 px-8 text-[15px] [&_svg]:size-5',
        icon: 'size-11 [&_svg]:size-5',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

const Button = React.forwardRef(function Button(
  { className, variant, size, asChild = false, ...props },
  ref,
) {
  const Comp = asChild ? Slot : 'button'
  return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
})

export { Button, buttonVariants }
