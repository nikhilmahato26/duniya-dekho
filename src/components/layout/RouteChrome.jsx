import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToElement, scrollToTop } from '@/hooks/useSmoothScroll'

/** Resets scroll on navigation and honours #hash deep links. */
export function RouteChrome() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) scrollToElement(el)
        else scrollToTop(true)
      })
      return
    }
    scrollToTop(true)
  }, [pathname, hash])

  return null
}
