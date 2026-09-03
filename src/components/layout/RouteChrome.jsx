import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToElement, scrollToTop } from '@/hooks/useSmoothScroll'

/** Resets scroll on navigation and honours #hash deep links. */
export function RouteChrome() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      scrollToTop(true)
      return
    }

    const id = hash.slice(1)
    let cancelled = false

    // Lazy routes and late-loading images shift the page, so re-aim at the
    // target a few times until its position stops moving.
    const aim = (attempt = 0) => {
      if (cancelled) return
      const el = document.getElementById(id)

      if (!el) {
        if (attempt < 8) setTimeout(() => aim(attempt + 1), 100)
        else scrollToTop(true)
        return
      }

      scrollToElement(el)
      if (attempt < 5) setTimeout(() => aim(attempt + 1), 220)
    }

    const frame = requestAnimationFrame(() => aim())

    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
    }
  }, [pathname, hash])

  return null
}
