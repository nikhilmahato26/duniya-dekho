import * as React from 'react'
import { cn } from '@/lib/utils'

const base =
  'w-full rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm text-navy-800 shadow-[inset_0_1px_2px_rgba(11,37,69,0.04)] transition-colors placeholder:text-navy-300 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-100 disabled:opacity-60'

export const Input = React.forwardRef(function Input({ className, ...props }, ref) {
  return <input ref={ref} className={cn(base, className)} {...props} />
})

export const Textarea = React.forwardRef(function Textarea({ className, ...props }, ref) {
  return <textarea ref={ref} className={cn(base, 'min-h-32 resize-y', className)} {...props} />
})

export const Select = React.forwardRef(function Select({ className, children, ...props }, ref) {
  return (
    <select ref={ref} className={cn(base, 'cursor-pointer appearance-none pr-10', className)} {...props}>
      {children}
    </select>
  )
})

export function Field({ label, hint, required, children, className }) {
  return (
    <label className={cn('block', className)}>
      <span className="mb-1.5 flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-400">
        {label}
        {required && <span className="text-gold-500">*</span>}
      </span>
      {children}
      {hint && <span className="mt-1 block text-xs text-navy-400">{hint}</span>}
    </label>
  )
}
