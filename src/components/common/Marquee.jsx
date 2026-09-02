import { cn } from '@/lib/utils'

/** Infinite ticker. Children are duplicated so the loop is seamless. */
export function Marquee({ items, className, itemClassName, separator = '✦' }) {
  const row = (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((item, i) => (
        <span key={i} className={cn('flex items-center gap-10 whitespace-nowrap', itemClassName)}>
          {item}
          <span className="text-teal-400/70">{separator}</span>
        </span>
      ))}
    </div>
  )

  return (
    <div className={cn('mask-fade-x overflow-hidden', className)}>
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {row}
        {row}
      </div>
    </div>
  )
}
