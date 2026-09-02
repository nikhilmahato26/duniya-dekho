import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp, Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { site } from '@/data/site'
import { scrollToTop } from '@/hooks/useSmoothScroll'
import { whatsappLink } from '@/lib/utils'

export function FloatingActions() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Desktop / tablet rail */}
      <div className="fixed bottom-6 right-5 z-70 hidden flex-col items-end gap-3 sm:flex">
        <AnimatePresence>
          {show && (
            <motion.button
              key="top"
              initial={{ opacity: 0, scale: 0.6, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.6, y: 12 }}
              onClick={() => scrollToTop()}
              aria-label="Back to top"
              className="grid size-12 place-items-center rounded-full border border-navy-100 bg-white text-navy-700 shadow-card transition-colors hover:bg-navy-800 hover:text-white"
            >
              <ArrowUp className="size-5" />
            </motion.button>
          )}
        </AnimatePresence>

        <a
          href={whatsappLink(
            site.primaryPhone,
            'Hi Duniya Dekho Travels, I found you online and would like to plan a trip.',
          )}
          target="_blank"
          rel="noreferrer"
          className="group relative grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_34px_-12px_rgba(37,211,102,0.8)] transition-transform duration-300 hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:2.6s]" />
          <FaWhatsapp className="relative size-7" />
          <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-full bg-navy-800 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:right-[4.2rem] group-hover:opacity-100">
            Chat with us
          </span>
        </a>
      </div>

      {/* Mobile sticky call bar */}
      <div className="fixed inset-x-0 bottom-0 z-70 grid grid-cols-2 border-t border-navy-100 bg-white/95 backdrop-blur sm:hidden">
        <a
          href={`tel:+91${site.primaryPhone}`}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-navy-800"
        >
          <Phone className="size-4 text-teal-600" /> Call Now
        </a>
        <a
          href={whatsappLink(site.primaryPhone, 'Hi Duniya Dekho Travels, I would like to plan a trip.')}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] py-3.5 text-sm font-semibold text-white"
        >
          <FaWhatsapp className="size-4" /> WhatsApp
        </a>
      </div>
    </>
  )
}
