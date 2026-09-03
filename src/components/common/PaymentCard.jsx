import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Building2, Check, Copy, Download, QrCode, ShieldCheck, Smartphone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { payment, upiIntent } from '@/data/payment'
import { site } from '@/data/site'
import { cn, whatsappLink } from '@/lib/utils'

function useCopy() {
  const [copied, setCopied] = useState(false)

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      // Clipboard blocked (http / older browser) — fall back to a temporary input.
      const el = document.createElement('input')
      el.value = text
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      el.remove()
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return [copied, copy]
}

function CopyButton({ value, label = 'Copy' }) {
  const [copied, copy] = useCopy()
  return (
    <button
      type="button"
      onClick={() => copy(value)}
      aria-label={`Copy ${value}`}
      className={cn(
        'flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 text-[12.5px] font-bold transition-all duration-300',
        copied
          ? 'bg-teal-500 text-white'
          : 'bg-white text-navy-700 shadow-soft hover:bg-navy-800 hover:text-white',
      )}
    >
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      {copied ? 'Copied' : label}
    </button>
  )
}

function DetailRow({ field }) {
  const copyable = field.copy !== false
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-navy-100 bg-navy-50/70 p-2 pl-4">
      <span className="min-w-0 flex-1">
        <span className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-navy-400">
          {field.label}
        </span>
        <span
          className={cn(
            'mt-0.5 block truncate text-[14px] font-semibold text-navy-800',
            field.mono && 'font-mono tracking-tight',
          )}
        >
          {field.value}
        </span>
      </span>
      {copyable && <CopyButton value={field.value} />}
    </div>
  )
}

const tabs = [
  { id: 'upi', label: 'UPI / QR', icon: QrCode },
  { id: 'bank', label: 'Bank Transfer', icon: Building2 },
]

/**
 * The payment block — UPI QR + copyable VPA on one tab, bank account
 * details on the other. Used on the home page, contact page and hero modal.
 */
export function PaymentCard({ className, showBadge = true }) {
  const [tab, setTab] = useState('upi')

  return (
    <div
      className={cn(
        'overflow-hidden rounded-[2rem] border border-navy-100 bg-white shadow-card',
        className,
      )}
    >
      <div className="bg-navy-800 px-5 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-display text-[15px] font-bold text-white">Pay Duniya Dekho Travels</p>
            <p className="text-[12px] text-navy-200/80">Choose UPI or a direct bank transfer</p>
          </div>
          {showBadge && (
            <span className="hidden shrink-0 items-center gap-1.5 rounded-full bg-teal-500/15 px-3 py-1.5 text-[11px] font-semibold text-teal-200 ring-1 ring-inset ring-teal-400/30 sm:flex">
              <ShieldCheck className="size-3.5" />
              Secure
            </span>
          )}
        </div>

        <div className="mt-4 flex gap-1 rounded-2xl bg-white/8 p-1">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={cn(
                // `isolate` keeps the sliding pill above the tab strip's own background.
                'relative isolate flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2 text-[13px] font-semibold transition-colors duration-300',
                tab === id ? 'text-navy-900' : 'text-navy-100/80 hover:text-white',
              )}
            >
              {tab === id && (
                <motion.span
                  layoutId="payment-tab"
                  className="absolute inset-0 -z-10 rounded-xl bg-white"
                  transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                />
              )}
              <Icon className="size-4" />
              {label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {tab === 'upi' ? (
          <motion.div
            key="upi"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-6 p-5 sm:grid-cols-[auto_1fr] sm:items-center sm:p-6"
          >
            <div className="mx-auto w-full max-w-[13.5rem]">
              <div className="rounded-3xl border border-navy-100 bg-white p-3 shadow-soft">
                <img
                  src={payment.qr}
                  alt={`UPI QR code for ${payment.upiId}`}
                  width="540"
                  height="540"
                  loading="lazy"
                  className="w-full rounded-xl"
                />
              </div>
              <p className="mt-3 text-center text-[11.5px] font-medium text-navy-400">
                Powered by {payment.provider} · BHIM UPI
              </p>
            </div>

            <div className="min-w-0">
              <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-navy-400">
                UPI ID
              </span>
              <div className="mt-2 flex items-center gap-2 rounded-2xl border border-navy-100 bg-navy-50/70 p-2 pl-4">
                <code className="min-w-0 flex-1 truncate font-mono text-[13.5px] font-semibold text-navy-800">
                  {payment.upiId}
                </code>
                <CopyButton value={payment.upiId} />
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {payment.apps.map((app) => (
                  <span
                    key={app}
                    className="rounded-full bg-navy-50 px-2.5 py-1 text-[11.5px] font-medium text-navy-600"
                  >
                    {app}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-[13px] leading-relaxed text-navy-500">{payment.note}</p>

              <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                <Button asChild variant="navy" size="md" className="w-full sm:hidden">
                  <a href={upiIntent()}>
                    <Smartphone className="size-4" /> Open UPI App
                  </a>
                </Button>
                <Button asChild variant="primary" size="md" className="w-full">
                  <a
                    href={whatsappLink(
                      site.primaryPhone,
                      `Hi ${site.name}, I have made a payment to ${payment.upiId}. Sharing the screenshot here.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaWhatsapp className="size-4" /> Send Screenshot
                  </a>
                </Button>
                <Button asChild variant="outline" size="md" className="w-full">
                  <a href={payment.qr} download="duniya-dekho-travels-upi-qr.png">
                    <Download className="size-4" /> Save QR
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="bank"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="p-5 sm:p-6"
          >
            <div className="grid gap-2.5 sm:grid-cols-2">
              {payment.bank.fields.map((field) => (
                <DetailRow key={field.label} field={field} />
              ))}
            </div>

            <p className="mt-4 text-[13px] leading-relaxed text-navy-500">{payment.bank.note}</p>

            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
              <Button asChild variant="primary" size="md" className="w-full sm:w-auto">
                <a
                  href={whatsappLink(
                    site.primaryPhone,
                    `Hi ${site.name}, I have transferred the amount to your ${payment.bank.name} account. Sharing the reference number here.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp className="size-4" /> Share Reference No.
                </a>
              </Button>
              <Button variant="outline" size="md" className="w-full sm:w-auto" asChild>
                <a href={`tel:+91${site.primaryPhone}`}>Confirm On Call</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
