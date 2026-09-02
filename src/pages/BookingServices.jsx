import { Link } from 'react-router-dom'
import { Check, Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { PageHero } from '@/components/common/PageHero'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/ui/button'
import { ProcessSteps } from '@/components/home/ProcessSteps'
import { FaqSection } from '@/components/home/FaqSection'
import { CtaBanner } from '@/components/home/CtaBanner'
import { services, site } from '@/data/site'
import { IMG, photo } from '@/data/images'
import { whatsappLink } from '@/lib/utils'

const serviceImages = [
  IMG.planeWing,
  IMG.varanasi,
  IMG.maldives,
  IMG.roadTrip,
  IMG.agra,
  IMG.flatlay,
  IMG.switzerland,
]

export default function BookingServices() {
  return (
    <>
      <PageHero
        image={IMG.planeWing}
        eyebrow="Booking Services"
        title="All travel needs under one roof"
        subtitle="Flights, trains, hotels, buses, cabs, visas and complete tour packages — booked and supported by one team you can actually call."
        crumbs={[{ label: 'Booking Services' }]}
      />

      <section className="py-16 lg:py-24">
        <div className="container-page space-y-20 lg:space-y-28">
          {services.map(({ id, icon: Icon, title, description, points }, i) => {
            const flipped = i % 2 === 1
            return (
              <div
                key={id}
                id={id}
                className="grid scroll-mt-32 items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal
                  direction={flipped ? 'left' : 'right'}
                  className={flipped ? 'lg:order-2' : undefined}
                >
                  <div className="group relative overflow-hidden rounded-[2rem] border border-navy-100 shadow-card">
                    <img
                      src={photo(serviceImages[i], { w: 1000, h: 750, q: 70 })}
                      alt={title}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[1100ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 to-transparent" />
                    <span className="absolute left-5 top-5 grid size-12 place-items-center rounded-2xl bg-white/95 text-navy-800 shadow-soft backdrop-blur">
                      <Icon className="size-6" />
                    </span>
                  </div>
                </Reveal>

                <Reveal direction={flipped ? 'right' : 'left'} delay={0.08}>
                  <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-teal-600">
                    0{i + 1} — Service
                  </span>
                  <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-navy-800">
                    {title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-navy-500">{description}</p>

                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-[14px] text-navy-600">
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-teal-500/12 text-teal-600">
                          <Check className="size-3" strokeWidth={3.5} />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Button asChild variant="primary" size="md">
                      <a
                        href={whatsappLink(
                          site.primaryPhone,
                          `Hi ${site.name}, I need help with ${title}.`,
                        )}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaWhatsapp className="size-4" /> Enquire Now
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="md">
                      <a href={`tel:+91${site.primaryPhone}`}>
                        <Phone className="size-4" /> Call Us
                      </a>
                    </Button>
                  </div>
                </Reveal>
              </div>
            )
          })}
        </div>
      </section>

      <ProcessSteps />

      <section className="py-20 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Not sure what you need?"
            title="Tell us the trip. We will pick the right service."
            subtitle="One message is enough — our team figures out whether it is a flight, a package or a full custom itinerary."
          />
          <Reveal delay={0.1} className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="navy" size="lg">
              <Link to="/customized-tour">Plan A Custom Trip</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <FaqSection className="bg-navy-50/50 py-20 lg:py-24" />
      <CtaBanner />
    </>
  )
}
