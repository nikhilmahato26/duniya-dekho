import { useEffect, useRef, useState } from 'react'

/** Counts from 0 to `end` the first time the element scrolls into view. */
export function useCountUp(end, duration = 1800) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          setValue(end)
          return
        }

        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(Math.round(end * eased))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return [ref, value]
}
