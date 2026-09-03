import { PaymentCard } from './PaymentCard'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { cn } from '@/lib/utils'

/** Payment block used on both the home page and the contact page. */
export function PaymentSection({ className, id = 'payment' }) {
  return (
    <section id={id} className={cn('scroll-mt-28', className)}>
      <div className="container-page">
        <SectionHeading
          eyebrow="Payment Details"
          title="Pay by UPI or bank transfer"
          subtitle="Scan the QR with any UPI app, copy our UPI ID, or transfer straight to our slice Small Finance Bank account. Send the screenshot on WhatsApp and your booking is confirmed the same day."
        />

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl">
          <PaymentCard />
        </Reveal>

        <p className="mx-auto mt-6 max-w-2xl text-center text-[12.5px] leading-relaxed text-navy-400">
          Always confirm the UPI ID or account number above before paying. Duniya Dekho Travels
          never asks for OTPs, card PINs or payments to any personal account.
        </p>
      </div>
    </section>
  )
}
