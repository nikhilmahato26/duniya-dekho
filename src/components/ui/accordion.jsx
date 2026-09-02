import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

export const Accordion = AccordionPrimitive.Root

export const AccordionItem = React.forwardRef(function AccordionItem({ className, ...props }, ref) {
  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(
        'overflow-hidden rounded-2xl border border-navy-100 bg-white transition-colors data-[state=open]:border-teal-200 data-[state=open]:bg-teal-50/40',
        className,
      )}
      {...props}
    />
  )
})

export const AccordionTrigger = React.forwardRef(function AccordionTrigger(
  { className, children, ...props },
  ref,
) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          'group flex flex-1 items-center justify-between gap-4 px-5 py-5 text-left font-display text-[15px] font-semibold text-navy-800 transition-colors hover:text-teal-600 sm:px-6',
          className,
        )}
        {...props}
      >
        {children}
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-navy-50 text-navy-600 transition-all duration-300 group-hover:bg-teal-500 group-hover:text-white group-data-[state=open]:rotate-45 group-data-[state=open]:bg-teal-500 group-data-[state=open]:text-white">
          <Plus className="size-4" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
})

export const AccordionContent = React.forwardRef(function AccordionContent(
  { className, children, ...props },
  ref,
) {
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden text-sm data-[state=closed]:animate-[acc-up_240ms_ease] data-[state=open]:animate-[acc-down_240ms_ease]"
      {...props}
    >
      <div className={cn('px-5 pb-5 text-[15px] leading-relaxed text-navy-500 sm:px-6', className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
})
