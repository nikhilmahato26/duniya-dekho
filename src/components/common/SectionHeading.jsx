import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'

/** The repeating "rule — title — subtitle" section header from the brand layout. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  tone = 'light',
  className,
}) {
  const isCenter = align === 'center'
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-3',
        isCenter ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em]',
            tone === 'dark' ? 'text-teal-300' : 'text-teal-600',
          )}
        >
          <span className={cn('h-px w-8', tone === 'dark' ? 'bg-teal-300/60' : 'bg-teal-400/70')} />
          {eyebrow}
          {isCenter && (
            <span className={cn('h-px w-8', tone === 'dark' ? 'bg-teal-300/60' : 'bg-teal-400/70')} />
          )}
        </span>
      )}
      <h2
        className={cn(
          'font-display text-3xl font-extrabold leading-[1.12] sm:text-4xl lg:text-[2.75rem]',
          tone === 'dark' ? 'text-white' : 'text-navy-800',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'max-w-2xl text-[15px] leading-relaxed sm:text-base',
            tone === 'dark' ? 'text-navy-100/80' : 'text-navy-500',
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
