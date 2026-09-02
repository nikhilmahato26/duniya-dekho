import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Thin Embla wrapper: slides in, arrows + dots out.
 * `slideClass` controls the responsive slide width.
 */
export function Carousel({
  children,
  slideClass = 'basis-full sm:basis-1/2 lg:basis-1/3',
  options = { align: 'start', loop: true },
  autoplay = false,
  className,
  controlsTone = 'light',
  showDots = true,
}) {
  const plugins = autoplay ? [Autoplay({ delay: 4200, stopOnInteraction: false, stopOnMouseEnter: true })] : []
  const [emblaRef, embla] = useEmblaCarousel(options, plugins)
  const [selected, setSelected] = useState(0)
  const [snaps, setSnaps] = useState([])

  const onSelect = useCallback(() => {
    if (!embla) return
    setSelected(embla.selectedScrollSnap())
  }, [embla])

  useEffect(() => {
    if (!embla) return
    setSnaps(embla.scrollSnapList())
    onSelect()
    embla.on('select', onSelect).on('reInit', onSelect)
  }, [embla, onSelect])

  const dark = controlsTone === 'dark'

  return (
    <div className={cn('relative', className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y gap-5">
          {children.map((child, i) => (
            <div key={i} className={cn('min-w-0 shrink-0 grow-0', slideClass)}>
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={() => embla?.scrollPrev()}
          aria-label="Previous"
          className={cn(
            'grid size-11 place-items-center rounded-full border transition-all duration-300 hover:-translate-x-0.5',
            dark
              ? 'border-white/20 text-white hover:bg-white hover:text-navy-900'
              : 'border-navy-200 text-navy-700 hover:border-navy-800 hover:bg-navy-800 hover:text-white',
          )}
        >
          <ChevronLeft className="size-5" />
        </button>

        {showDots && (
          <div className="flex items-center gap-2">
            {snaps.map((_, i) => (
              <button
                key={i}
                onClick={() => embla?.scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  'h-2 rounded-full transition-all duration-400',
                  i === selected
                    ? cn('w-7', dark ? 'bg-gold-400' : 'bg-teal-500')
                    : cn('w-2', dark ? 'bg-white/25 hover:bg-white/50' : 'bg-navy-200 hover:bg-navy-300'),
                )}
              />
            ))}
          </div>
        )}

        <button
          onClick={() => embla?.scrollNext()}
          aria-label="Next"
          className={cn(
            'grid size-11 place-items-center rounded-full border transition-all duration-300 hover:translate-x-0.5',
            dark
              ? 'border-white/20 text-white hover:bg-white hover:text-navy-900'
              : 'border-navy-200 text-navy-700 hover:border-navy-800 hover:bg-navy-800 hover:text-white',
          )}
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  )
}
