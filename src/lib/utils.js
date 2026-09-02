import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Merge conditional class names with Tailwind conflict resolution. */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/** 12999 -> "12,999" (Indian digit grouping). */
export function formatINR(value) {
  return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(value)
}

/** Build a prefilled WhatsApp link. */
export function whatsappLink(phone, message) {
  const digits = String(phone).replace(/\D/g, '')
  const number = digits.length === 10 ? `91${digits}` : digits
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export function slugify(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}
