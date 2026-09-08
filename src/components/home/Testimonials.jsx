import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Quote, Play, X, ChevronLeft, ChevronRight, ArrowRight, Video, MessageSquare } from 'lucide-react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Carousel } from '@/components/common/Carousel'
import { Stars } from '@/components/common/Stars'
import { Reveal } from '@/components/common/Reveal'
import { testimonials, videoReviews } from '@/data/content'
import { cn } from '@/lib/utils'

function initials(name) {
  return name
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

export function Testimonials() {
  const [activeTab, setActiveTab] = useState('all') // 'all' | 'videos' | 'written'
  const [activeVideoIndex, setActiveVideoIndex] = useState(null)

  // Keyboard navigation & body scroll lock for video modal
  useEffect(() => {
    if (activeVideoIndex === null) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveVideoIndex(null)
      } else if (e.key === 'ArrowRight') {
        setActiveVideoIndex((prev) => (prev + 1) % videoReviews.length)
      } else if (e.key === 'ArrowLeft') {
        setActiveVideoIndex((prev) => (prev - 1 + videoReviews.length) % videoReviews.length)
      }
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeVideoIndex])

  const activeVideo = activeVideoIndex !== null ? videoReviews[activeVideoIndex] : null

  const handleNavigateVideo = (direction) => {
    if (activeVideoIndex === null) return
    setActiveVideoIndex(
      (prev) => (prev + direction + videoReviews.length) % videoReviews.length,
    )
  }

  return (
    <section id="reviews" className="relative overflow-hidden bg-gradient-to-b from-white via-teal-50/50 to-white py-20 lg:py-28">
      {/* Background ambient accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-teal-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 size-96 rounded-full bg-navy-200/20 blur-3xl" />

      <div className="container-page relative z-10">
        <SectionHeading
          eyebrow="What Our Clients Say"
          title="Trusted By Thousands Of Happy Travellers"
          subtitle="Watch real video experiences and read authentic reviews from travellers across Agra, Delhi, Lucknow and beyond."
        />

        {/* Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={cn(
              'flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 shadow-xs',
              activeTab === 'all'
                ? 'bg-navy-800 text-white shadow-soft'
                : 'border border-navy-100 bg-white text-navy-600 hover:border-teal-300 hover:text-navy-900',
            )}
          >
            All Reviews
            <span
              className={cn(
                'rounded-full px-2 py-0.5 text-[11px] font-bold',
                activeTab === 'all' ? 'bg-white/20 text-white' : 'bg-navy-100 text-navy-700',
              )}
            >
              {videoReviews.length + testimonials.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('videos')}
            className={cn(
              'flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 shadow-xs',
              activeTab === 'videos'
                ? 'bg-teal-500 text-white shadow-glow'
                : 'border border-navy-100 bg-white text-navy-600 hover:border-teal-300 hover:text-teal-700',
            )}
          >
            <Video className="size-4" />
            Video Stories
            <span
              className={cn(
                'rounded-full px-2 py-0.5 text-[11px] font-bold',
                activeTab === 'videos' ? 'bg-white/20 text-white' : 'bg-teal-100 text-teal-800',
              )}
            >
              {videoReviews.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('written')}
            className={cn(
              'flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 shadow-xs',
              activeTab === 'written'
                ? 'bg-teal-500 text-white shadow-glow'
                : 'border border-navy-100 bg-white text-navy-600 hover:border-teal-300 hover:text-teal-700',
            )}
          >
            <MessageSquare className="size-4" />
            Written Reviews
            <span
              className={cn(
                'rounded-full px-2 py-0.5 text-[11px] font-bold',
                activeTab === 'written' ? 'bg-white/20 text-white' : 'bg-navy-100 text-navy-700',
              )}
            >
              {testimonials.length}
            </span>
          </button>
        </div>

        {/* Video Reviews Section */}
        {(activeTab === 'all' || activeTab === 'videos') && (
          <div className="mt-12">
            {activeTab === 'all' && (
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-8 place-items-center rounded-lg bg-teal-500 text-white shadow-glow">
                    <Video className="size-4" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-800">
                      Traveller Video Feedback
                    </h3>
                    <p className="text-xs text-navy-400">
                      Authentic video stories straight from our clients on the road
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-block text-xs font-semibold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                  Tap card to play video
                </span>
              </div>
            )}

            <Reveal delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {videoReviews.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveVideoIndex(index)}
                    className="group relative flex aspect-[9/15] sm:aspect-[9/15.5] w-full flex-col justify-between overflow-hidden rounded-3xl border border-navy-100 bg-navy-900 shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-teal-400 hover:shadow-2xl cursor-pointer"
                  >
                    {/* Poster Image */}
                    <img
                      src={item.poster}
                      alt={`${item.name} review`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Dark gradient scrims */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-navy-950/80 via-navy-950/40 to-transparent" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-navy-950/95 via-navy-950/70 to-transparent" />

                    {/* Top Badges */}
                    <div className="relative z-10 flex items-center justify-between p-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                        <Video className="size-3 text-teal-400" />
                        Video Story
                      </span>
                      <span className="inline-flex items-center rounded-full bg-teal-500/90 px-2.5 py-0.5 text-[11px] font-bold text-white shadow-sm backdrop-blur-md">
                        {item.duration}
                      </span>
                    </div>

                    {/* Center Animated Play Button */}
                    <div className="relative z-10 flex flex-col items-center justify-center">
                      <div className="relative flex size-15 items-center justify-center rounded-full border border-white/60 bg-white/25 text-white shadow-glow backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-teal-500 group-hover:border-teal-400">
                        <Play className="ml-0.5 size-6 fill-white text-white transition-transform duration-300 group-hover:scale-105" />
                        <span className="absolute -inset-2 rounded-full border border-white/40 animate-ping opacity-30 group-hover:opacity-60" />
                      </div>
                      <span className="mt-2 text-[11.5px] font-medium tracking-wide text-white/90 drop-shadow-sm opacity-90 transition-opacity group-hover:opacity-100">
                        Click to watch
                      </span>
                    </div>

                    {/* Bottom Metadata */}
                    <div className="relative z-10 p-5">
                      <Stars rating={item.rating} size="size-3.5" />
                      <h4 className="mt-1 font-display text-base font-bold text-white tracking-tight drop-shadow-xs">
                        {item.name}
                      </h4>
                      <p className="text-[12px] font-medium text-teal-300">
                        {item.badge} · {item.trip}
                      </p>
                      <p className="mt-1.5 line-clamp-2 text-[12px] leading-snug text-white/80">
                        “{item.caption}”
                      </p>
                      <div className="mt-2.5 flex items-center gap-1.5 text-[12px] font-semibold text-teal-300 group-hover:text-white transition-colors">
                        <span>Watch Review</span>
                        <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        )}

        {/* Written Testimonials Section */}
        {(activeTab === 'all' || activeTab === 'written') && (
          <div className={cn(activeTab === 'all' ? 'mt-16 sm:mt-20' : 'mt-12')}>
            {activeTab === 'all' && (
              <div className="mb-6 flex items-center justify-between border-t border-navy-100/80 pt-12">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-8 place-items-center rounded-lg bg-navy-800 text-white shadow-soft">
                    <MessageSquare className="size-4" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-800">
                      Traveller Reviews & Testimonials
                    </h3>
                    <p className="text-xs text-navy-400">
                      Written feedback from families & vacationers
                    </p>
                  </div>
                </div>
              </div>
            )}

            <Reveal delay={0.15}>
              <Carousel autoplay slideClass="basis-full md:basis-1/2 lg:basis-1/3">
                {testimonials.map((t) => (
                  <figure
                    key={t.name}
                    className="flex h-full flex-col rounded-3xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-teal-200"
                  >
                    <div className="flex items-center justify-between">
                      <Stars rating={t.rating} />
                      <Quote className="size-7 text-teal-100" />
                    </div>

                    <blockquote className="mt-4 flex-1 text-[14.5px] leading-relaxed text-navy-600">
                      “{t.text}”
                    </blockquote>

                    <figcaption className="mt-6 flex items-center gap-3 border-t border-navy-100 pt-5">
                      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-navy-700 to-teal-500 font-display text-sm font-bold text-white">
                        {initials(t.name)}
                      </span>
                      <span>
                        <span className="block font-display text-[14.5px] font-bold text-navy-800">
                          {t.name}
                        </span>
                        <span className="block text-[12.5px] text-navy-400">
                          {t.city} · {t.trip}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </Carousel>
            </Reveal>
          </div>
        )}
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/85 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setActiveVideoIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 26, stiffness: 320 }}
              className="relative flex w-full max-w-sm sm:max-w-md flex-col overflow-hidden rounded-3xl border border-white/20 bg-navy-900 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 bg-navy-950/90 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-teal-400 to-navy-600 font-display text-xs font-bold text-white shadow-sm">
                    {initials(activeVideo.name)}
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-bold text-white leading-tight">
                      {activeVideo.name}
                    </h3>
                    <p className="text-[11px] font-medium text-teal-300">
                      {activeVideo.badge} · {activeVideo.trip}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveVideoIndex(null)}
                  className="grid size-8 place-items-center rounded-full bg-white/10 text-white/80 hover:bg-white/25 hover:text-white transition-colors"
                  aria-label="Close video"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* Video Player Box */}
              <div className="relative aspect-[9/16] w-full max-h-[68vh] bg-black overflow-hidden flex items-center justify-center">
                <video
                  key={activeVideo.videoUrl}
                  src={activeVideo.videoUrl}
                  poster={activeVideo.poster}
                  autoPlay
                  controls
                  playsInline
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Footer navigation */}
              <div className="flex items-center justify-between border-t border-white/10 px-5 py-3.5 bg-navy-950/95 backdrop-blur-sm">
                <button
                  type="button"
                  onClick={() => handleNavigateVideo(-1)}
                  className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white hover:bg-white/15 transition-colors"
                >
                  <ChevronLeft className="size-3.5" /> Previous
                </button>

                <div className="flex items-center gap-1.5">
                  {videoReviews.map((_, i) => (
                    <span
                      key={i}
                      className={cn(
                        'h-1.5 rounded-full transition-all duration-300',
                        i === activeVideoIndex ? 'w-5 bg-teal-400' : 'w-1.5 bg-white/30',
                      )}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => handleNavigateVideo(1)}
                  className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white hover:bg-white/15 transition-colors"
                >
                  Next <ChevronRight className="size-3.5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
