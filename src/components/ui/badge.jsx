import { cn } from '@/lib/utils'

export function Badge({ className, tone = 'teal', ...props }) {
  const tones = {
    teal: 'bg-teal-50 text-teal-700 ring-teal-200',
    gold: 'bg-gold-50 text-gold-700 ring-gold-200',
    navy: 'bg-navy-50 text-navy-700 ring-navy-200',
    white: 'bg-white/15 text-white ring-white/30 backdrop-blur',
  }
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ring-1 ring-inset',
        tones[tone],
        className,
      )}
      {...props}
    />
  )
}
