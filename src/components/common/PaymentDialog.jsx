import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { PaymentCard } from './PaymentCard'

/**
 * Wraps any trigger (`children`) and opens the UPI payment card in a modal.
 * Used by the hero's "Pay Now" button.
 */
export function PaymentDialog({ children }) {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>{children}</DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-90 bg-navy-950/70 backdrop-blur-sm data-[state=closed]:animate-[fade-out_200ms_ease] data-[state=open]:animate-[fade-in_200ms_ease]" />

        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-100 max-h-[92dvh] w-[calc(100vw-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto outline-none data-[state=closed]:animate-[fade-out_180ms_ease] data-[state=open]:animate-[pop-in_260ms_cubic-bezier(0.22,1,0.36,1)]">
          <DialogPrimitive.Title className="sr-only">Pay Duniya Dekho Travels</DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">
            Scan the UPI QR code or copy the UPI ID to pay.
          </DialogPrimitive.Description>

          <PaymentCard showBadge={false} />

          <DialogPrimitive.Close className="absolute right-4 top-3.5 grid size-9 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/30">
            <X className="size-4.5" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
