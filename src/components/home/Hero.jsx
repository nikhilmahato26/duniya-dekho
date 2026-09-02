import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Plane, Sparkles, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useGsapParallax } from '@/hooks/useGsapParallax'
import { IMG, photo } from '@/data/images'
import { site } from '@/data/site'

const chips = ['Flights', 'Hotels', 'Trains', 'Tours', 'Visa Assistance']

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  const bgRef = useGsapParallax({ distance: 120 })
  const reduce = useReducedMotion()

  return (
    <section className="relative isolate overflow-hidden bg-navy-900 pt-28 lg:pt-32">
      {/* Background image + wash */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          ref={bgRef}
          src={photo(IMG.kashmir, { w: 2000, q: 70 })}
          alt=""
          className="h-[125%] w-full scale-110 object-cover"
          fetchPriority="high"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/82 via-navy-900/70 to-navy-950/92"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_15%_20%,rgba(47,180,160,0.28),transparent_60%),radial-gradient(45%_40%_at_85%_10%,rgba(255,196,46,0.18),transparent_65%)]"
      />

      {/* Floating decor */}
      {!reduce && (
        <>
          <motion.div
            aria-hidden
            initial={{ x: '-12vw', y: 40, opacity: 0 }}
            animate={{ x: '112vw', y: -60, opacity: [0, 1, 1, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear', delay: 1.5 }}
            className="pointer-events-none absolute top-32 -z-10 text-white/25"
          >
            <Plane className="size-8 -rotate-12" />
          </motion.div>
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 top-1/3 -z-10 size-72 animate-float rounded-full bg-teal-400/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 top-16 -z-10 size-64 animate-float rounded-full bg-gold-400/15 blur-3xl [animation-delay:2s]"
          />
        </>
      )}

      <div className="container-page relative pb-28 pt-10 sm:pb-32 lg:pb-40 lg:pt-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={item} className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.22em] text-teal-100 backdrop-blur-md">
              <Sparkles className="size-3.5 text-gold-300" />
              {site.tagline}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-[clamp(2.4rem,7vw,4.6rem)] font-extrabold leading-[1.04] text-white"
          >
            Duniya Dekho{' '}
            <span className="bg-gradient-to-r from-teal-300 via-teal-200 to-gold-300 bg-clip-text text-transparent">
              Travels
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-navy-100/85 sm:text-lg"
          >
            Explore India. Explore World. Hand-planned tour packages, honest fares and a travel
            partner from Agra who actually picks up the phone.
          </motion.p>

          <motion.div variants={item} className="mt-7 flex flex-wrap justify-center gap-2.5">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-[13px] font-medium text-white/85 backdrop-blur-sm transition-colors hover:border-teal-300/50 hover:bg-white/15"
              >
                {chip}
              </span>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="primary" size="lg">
              <Link to="/tour-packages">
                Explore Packages <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="lg">
              <Link to="/customized-tour">Plan A Custom Trip</Link>
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-navy-100/70"
          >
            <span className="flex items-center gap-1.5">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-gold-400 text-gold-400" />
                ))}
              </span>
              4.9/5 from 900+ travellers
            </span>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <span>12,000+ happy journeys</span>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <span>24×7 on-trip support</span>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}
