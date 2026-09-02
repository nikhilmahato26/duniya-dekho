import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft, CalendarDays, Check, Clock, MapPin, Phone, Sparkles, X,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Stars } from '@/components/common/Stars'
import { Reveal, RevealGroup, RevealItem } from '@/components/common/Reveal'
import { PackageCard } from '@/components/common/PackageCard'
import { SectionHeading } from '@/components/common/SectionHeading'
import { CtaBanner } from '@/components/home/CtaBanner'
import { getPackage, packages } from '@/data/packages'
import { photo } from '@/data/images'
import { site } from '@/data/site'
import { formatINR, whatsappLink } from '@/lib/utils'

export default function PackageDetail() {
  const { slug } = useParams()
  const pkg = getPackage(slug)

  if (!pkg) {
    return (
      <section className="container-page flex min-h-[70vh] flex-col items-center justify-center gap-5 text-center">
        <h1 className="font-display text-3xl font-extrabold text-navy-800">Package not found</h1>
        <p className="text-navy-500">This itinerary may have been renamed or retired.</p>
        <Button asChild variant="navy" size="lg">
          <Link to="/tour-packages">
            <ArrowLeft className="size-4" /> Back to all packages
          </Link>
        </Button>
      </section>
    )
  }

  const related = packages.filter((p) => p.slug !== pkg.slug).slice(0, 4)
  const enquiry = whatsappLink(
    site.primaryPhone,
    `Hi ${site.name}, I am interested in the "${pkg.title}" package (${pkg.nights}N/${pkg.days}D, ₹${formatINR(
      pkg.price,
    )} per person). Please share details.`,
  )

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-900 pt-28 lg:pt-32">
        <img
          src={photo(pkg.image, { w: 1900, h: 950, q: 70 })}
          alt={pkg.title}
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/88 via-navy-900/78 to-navy-950/95"
        />

        <div className="container-page relative py-14 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="flex flex-wrap items-center gap-2.5">
              {pkg.badge && <Badge tone="white">{pkg.badge}</Badge>}
              <Badge tone="white">{pkg.type[0]}</Badge>
            </div>

            <h1 className="mt-5 font-display text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-[1.08] text-white">
              {pkg.title}
            </h1>

            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-navy-100/80">{pkg.summary}</p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13.5px] text-white/85">
              <span className="flex items-center gap-2">
                <MapPin className="size-4 text-teal-300" /> {pkg.region}
              </span>
              <span className="flex items-center gap-2">
                <CalendarDays className="size-4 text-teal-300" /> {pkg.nights} Nights / {pkg.days} Days
              </span>
              <span className="flex items-center gap-2">
                <Clock className="size-4 text-teal-300" /> Best time: {pkg.bestTime}
              </span>
              <span className="flex items-center gap-2">
                <Stars rating={pkg.rating} size="size-3.5" /> {pkg.rating} ({pkg.reviews})
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-extrabold text-navy-800">Trip Highlights</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {pkg.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-center gap-3 rounded-2xl border border-navy-100 bg-white p-4 transition-colors hover:border-teal-200 hover:bg-teal-50/40"
                  >
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-600">
                      <Sparkles className="size-4" />
                    </span>
                    <span className="text-[14px] font-medium text-navy-700">{h}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Itinerary timeline */}
            <div className="mt-14">
              <Reveal>
                <h2 className="font-display text-2xl font-extrabold text-navy-800">
                  Day-by-day itinerary
                </h2>
                <p className="mt-2 text-[14.5px] text-navy-500">
                  Every day is adjustable — this is a starting point, not a rulebook.
                </p>
              </Reveal>

              <RevealGroup className="relative mt-8 space-y-4">
                <span
                  aria-hidden
                  className="absolute left-[19px] top-3 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-teal-300 via-navy-200 to-transparent sm:block"
                />
                {pkg.itinerary.map((day) => (
                  <RevealItem key={day.day} className="relative sm:pl-14">
                    <span className="absolute left-0 top-4 hidden size-10 place-items-center rounded-full border-4 border-white bg-navy-800 font-display text-[13px] font-bold text-white shadow-soft sm:grid">
                      {day.day}
                    </span>
                    <div className="rounded-2xl border border-navy-100 bg-white p-5 transition-all duration-400 hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-soft">
                      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-600 sm:hidden">
                        Day {day.day}
                      </span>
                      <h3 className="mt-1 font-display text-[16.5px] font-bold text-navy-800 sm:mt-0">
                        {day.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-navy-500">{day.text}</p>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>

            {/* Inclusions */}
            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              <Reveal className="rounded-3xl border border-teal-100 bg-teal-50/50 p-6">
                <h3 className="font-display text-lg font-bold text-navy-800">What’s included</h3>
                <ul className="mt-4 space-y-3">
                  {pkg.inclusions.map((item) => (
                    <li key={item} className="flex gap-3 text-[14px] text-navy-600">
                      <Check className="mt-0.5 size-4 shrink-0 text-teal-600" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.08} className="rounded-3xl border border-navy-100 bg-navy-50/60 p-6">
                <h3 className="font-display text-lg font-bold text-navy-800">Not included</h3>
                <ul className="mt-4 space-y-3">
                  {pkg.exclusions.map((item) => (
                    <li key={item} className="flex gap-3 text-[14px] text-navy-600">
                      <X className="mt-0.5 size-4 shrink-0 text-navy-400" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>

          {/* Sticky booking card */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal direction="left" className="overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card">
              <div className="bg-navy-800 px-6 py-5 text-white">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-300">
                  Starting from
                </span>
                <div className="mt-1 flex items-baseline gap-2.5">
                  <span className="font-display text-4xl font-extrabold">₹{formatINR(pkg.price)}</span>
                  {pkg.strike && (
                    <span className="text-navy-300 line-through">₹{formatINR(pkg.strike)}</span>
                  )}
                </div>
                <span className="text-[12.5px] text-navy-200/80">per person · on twin sharing</span>
              </div>

              <div className="space-y-4 p-6">
                <dl className="space-y-2.5 text-[14px]">
                  {[
                    ['Duration', `${pkg.nights} Nights / ${pkg.days} Days`],
                    ['Destination', pkg.region],
                    ['Best season', pkg.bestTime],
                    ['Trip type', pkg.type.join(' · ')],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-start justify-between gap-4">
                      <dt className="text-navy-400">{label}</dt>
                      <dd className="text-right font-semibold capitalize text-navy-700">{value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="hairline" />

                <div className="grid gap-2.5">
                  <Button asChild variant="primary" size="lg" className="w-full">
                    <a href={enquiry} target="_blank" rel="noreferrer">
                      <FaWhatsapp className="size-5" /> Enquire On WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="navy" size="lg" className="w-full">
                    <a href={`tel:+91${site.primaryPhone}`}>
                      <Phone className="size-4" /> Call {site.primaryPhone}
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="md" className="w-full">
                    <Link to="/customized-tour">Customise this trip</Link>
                  </Button>
                </div>

                <p className="text-center text-[12px] leading-relaxed text-navy-400">
                  No advance needed to get a quote. Written itinerary before you pay.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="bg-navy-50/50 py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="You may also like"
            title="More journeys worth taking"
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <PackageCard key={item.slug} pkg={item} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
