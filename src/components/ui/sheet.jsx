import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export const Sheet = DialogPrimitive.Root
export const SheetTrigger = DialogPrimitive.Trigger
export const SheetClose = DialogPrimitive.Close

export const SheetContent = React.forwardRef(function SheetContent(
  { className, children, title = 'Menu', ...props },
  ref,
) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-90 bg-navy-950/50 backdrop-blur-sm data-[state=closed]:animate-[fade-out_200ms_ease] data-[state=open]:animate-[fade-in_200ms_ease]" />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          'fixed inset-y-0 right-0 z-100 flex w-[86%] max-w-sm flex-col bg-white shadow-2xl outline-none data-[state=closed]:animate-[sheet-out_260ms_cubic-bezier(0.32,0.72,0,1)] data-[state=open]:animate-[sheet-in_320ms_cubic-bezier(0.32,0.72,0,1)]',
          className,
        )}
        {...props}
      >
        <DialogPrimitive.Title className="sr-only">{title}</DialogPrimitive.Title>
        <DialogPrimitive.Description className="sr-only">
          Site navigation and contact details
        </DialogPrimitive.Description>
        {children}
        <DialogPrimitive.Close className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-navy-50 text-navy-600 transition hover:bg-navy-100 hover:text-navy-900">
          <X className="size-5" />
          <span className="sr-only">Close menu</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
})
