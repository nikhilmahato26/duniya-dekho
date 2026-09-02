import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { photo } from '@/data/images'

/** Inner-page banner with breadcrumb — used by every route except home. */
export function PageHero({ image, eyebrow, title, subtitle, crumbs = [], children }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 pt-28 lg:pt-32">
      <img
        src={photo(image, { w: 1900, h: 900, q: 66 })}
        alt=""
        className="absolute inset-0 -z-20 size-full scale-105 object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/90 via-navy-900/82 to-navy-950/92"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(55%_60%_at_20%_25%,rgba(47,180,160,0.25),transparent_65%)]"
      />

      <div className="container-page relative py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-teal-100 backdrop-blur">
              {eyebrow}
            </span>
          )}

          <h1 className="mt-5 font-display text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.08] text-white">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-navy-100/80 sm:text-base">
              {subtitle}
            </p>
          )}

          {children}

          <nav
            aria-label="Breadcrumb"
            className="mt-8 flex flex-wrap items-center gap-1.5 text-[13px] text-navy-200/70"
          >
            <Link to="/" className="transition-colors hover:text-gold-300">
              Home
            </Link>
            {crumbs.map((crumb, i) => (
              <Fragment key={crumb.label}>
                <ChevronRight className="size-3.5 text-navy-400" />
                {crumb.to && i < crumbs.length - 1 ? (
                  <Link to={crumb.to} className="transition-colors hover:text-gold-300">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-teal-300">{crumb.label}</span>
                )}
              </Fragment>
            ))}
          </nav>
        </motion.div>
      </div>
    </section>
  )
}
