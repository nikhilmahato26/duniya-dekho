import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Gentle vertical parallax driven by ScrollTrigger.
 * Returns a ref to attach to the element that should drift.
 */
export function useGsapParallax({ distance = 90, start = 'top bottom', end = 'bottom top' } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { yPercent: -distance / 20 },
        {
          yPercent: distance / 20,
          ease: 'none',
          scrollTrigger: { trigger: el.parentElement || el, start, end, scrub: true },
        },
      )
    })
    return () => ctx.revert()
  }, [distance, start, end])

  return ref
}
