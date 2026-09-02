import * as React from 'react'
import { cn } from '@/lib/utils'

export const Card = React.forwardRef(function Card({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        'group relative overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card transition-all duration-500',
        className,
      )}
      {...props}
    />
  )
})

export function CardBody({ className, ...props }) {
  return <div className={cn('p-6', className)} {...props} />
}

export function CardTitle({ className, ...props }) {
  return <h3 className={cn('font-display text-lg font-bold text-navy-800', className)} {...props} />
}

export function CardText({ className, ...props }) {
  return <p className={cn('text-sm leading-relaxed text-navy-500', className)} {...props} />
}
