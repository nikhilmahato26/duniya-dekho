import { Check, Headphones, Phone } from 'lucide-react'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/ui/button'
import { useGsapParallax } from '@/hooks/useGsapParallax'
import { IMG, photo } from '@/data/images'
import { site, whyChooseUs } from '@/data/site'

export function WhyChooseUs() {
  const imgRef = useGsapParallax({ distance: 70 })

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <Reveal direction="right" className="relative">
          <div className="relative overflow-hidden rounded-[2.2rem] border border-navy-100 shadow-card">
            <div className="aspect-[4/3.2] overflow-hidden">
              <img
                ref={imgRef}
                src={photo(IMG.backpacker, { w: 1100, h: 900, q: 72 })}
                alt="Traveller looking out over a mountain lake"
                loading="lazy"
                className="h-[118%] w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/45 via-transparent to-transparent" />

            <div className="absolute left-6 top-6 max-w-[13rem] rounded-2xl bg-white/90 p-4 shadow-soft backdrop-blur">
              <p className="font-display text-[15px] font-extrabold leading-tight text-navy-800">
                Travel Makes Life Beautiful
              </p>
              <p className="mt-1 text-[12px] text-navy-500">
                And we take care of everything in between.
              </p>
            </div>
          </div>

          {/* Need help card */}
          <Reveal
            direction="up"
            delay={0.15}
            className="absolute -bottom-8 right-4 w-[15.5rem] sm:right-8"
          >
            <div className="rounded-3xl bg-gold-400 p-5 text-center shadow-[0_24px_50px_-24px_rgba(245,172,0,0.9)]">
              <span className="mx-auto grid size-11 place-items-center rounded-full bg-navy-900/10 text-navy-900">
                <Headphones className="size-5" />
              </span>
              <p className="mt-3 font-display text-lg font-extrabold text-navy-900">Need Help?</p>
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-navy-800/70">
                Call Now
              </p>
              <Button asChild variant="navy" size="md" className="mt-3 w-full">
                <a href={`tel:+91${site.primaryPhone}`}>
                  <Phone className="size-4" /> {site.primaryPhone}
                </a>
              </Button>
            </div>
          </Reveal>
        </Reveal>

        <div className="mt-8 lg:mt-0">
          <Reveal>
            <span className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-teal-600">
              <span className="h-px w-8 bg-teal-400/70" />
              Why Choose Us
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.14] text-navy-800 sm:text-4xl">
              Why travellers keep coming back to{' '}
              <span className="text-gradient-brand">Duniya Dekho Travels</span>
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-navy-500">
              We are not a booking portal. We are the people who answer at 11 PM when a flight is
              rescheduled — and who have already re-planned your morning by the time you call.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {whyChooseUs.map((point, i) => (
              <Reveal key={point.title} delay={0.06 * i}>
                <div className="group flex gap-3 rounded-2xl border border-transparent p-3 transition-all duration-400 hover:border-navy-100 hover:bg-navy-50/60">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-teal-500 text-white transition-transform duration-300 group-hover:scale-110">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span>
                    <span className="block font-display text-[15px] font-bold text-navy-800">
                      {point.title}
                    </span>
                    <span className="mt-1 block text-[13px] leading-relaxed text-navy-500">
                      {point.text}
                    </span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
