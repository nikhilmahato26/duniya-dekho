import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { PageHero } from '@/components/common/PageHero'
import { CtaBanner } from '@/components/home/CtaBanner'
import { galleryFilters, galleryItems } from '@/data/content'
import { IMG, photo } from '@/data/images'
import { cn } from '@/lib/utils'

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const visible =
    filter === 'All' ? galleryItems : galleryItems.filter((item) => item.tag === filter)

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox((i) => (i + 1) % visible.length)
      if (e.key === 'ArrowLeft') setLightbox((i) => (i - 1 + visible.length) % visible.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, visible.length])

  return (
    <>
      <PageHero
        image={IMG.maldives}
        eyebrow="Gallery"
        title="Glimpses of happy journeys"
        subtitle="Photos from trips we planned — mountains, beaches, skylines and everything between."
        crumbs={[{ label: 'Gallery' }]}
      />

      <section className="py-16 lg:py-20">
        <div className="container-page">
          <div className="flex flex-wrap justify-center gap-2">
            {galleryFilters.map((f) => (
              <button
                key={f}
                onClick={() => {
                  setFilter(f)
                  setLightbox(null)
                }}
                className={cn(
                  'relative rounded-full px-5 py-2.5 text-[13.5px] font-semibold transition-colors duration-300',
                  filter === f ? 'text-white' : 'text-navy-600 hover:text-navy-900',
                )}
              >
                {filter === f && (
                  <motion.span
                    layoutId="gallery-filter"
                    className="absolute inset-0 -z-10 rounded-full bg-navy-800"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                {f}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
            <AnimatePresence mode="popLayout">
              {visible.map((item, i) => (
                <motion.button
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setLightbox(i)}
                  className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl"
                >
                  <img
                    src={photo(item.id, { w: 700, q: 70 })}
                    alt={item.label}
                    loading="lazy"
                    className={cn(
                      'w-full object-cover transition-transform duration-[900ms] group-hover:scale-110',
                      i % 5 === 0 ? 'aspect-[3/4]' : i % 3 === 0 ? 'aspect-square' : 'aspect-[4/3]',
                    )}
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-left">
                    <span className="font-display text-[15px] font-bold text-white">{item.label}</span>
                    <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/85 backdrop-blur">
                      {item.tag}
                    </span>
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 grid place-items-center bg-navy-950/92 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X className="size-5" />
            </button>

            <button
              className="absolute left-4 grid size-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-8"
              onClick={(e) => {
                e.stopPropagation()
                setLightbox((i) => (i - 1 + visible.length) % visible.length)
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="size-6" />
            </button>

            <motion.figure
              key={visible[lightbox].id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] w-full max-w-4xl"
            >
              <img
                src={photo(visible[lightbox].id, { w: 1600, q: 80 })}
                alt={visible[lightbox].label}
                className="max-h-[76vh] w-full rounded-2xl object-contain"
              />
              <figcaption className="mt-4 text-center font-display text-lg font-bold text-white">
                {visible[lightbox].label}
                <span className="ml-2 text-[13px] font-medium text-navy-300">
                  · {visible[lightbox].tag}
                </span>
              </figcaption>
            </motion.figure>

            <button
              className="absolute right-4 grid size-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-8"
              onClick={(e) => {
                e.stopPropagation()
                setLightbox((i) => (i + 1) % visible.length)
              }}
              aria-label="Next image"
            >
              <ChevronRight className="size-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <CtaBanner />
    </>
  )
}
