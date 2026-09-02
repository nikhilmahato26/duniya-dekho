import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { RevealGroup, RevealItem } from '@/components/common/Reveal'
import { services } from '@/data/site'

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/70 via-white to-white py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent"
      />
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Booking Services"
          title="All Travel Needs Under One Roof"
          subtitle="Seven desks, one team. Whatever moves you — a flight, a train berth, a hotel key or a visa stamp — it is handled here."
        />

        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ id, icon: Icon, title, short }) => (
            <RevealItem key={id}>
              <Link
                to={`/booking-services#${id}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white p-6 shadow-[0_1px_2px_rgba(11,37,69,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-teal-200 hover:shadow-card"
              >
                <span
                  aria-hidden
                  className="absolute -right-10 -top-10 size-28 rounded-full bg-teal-500/8 transition-all duration-700 group-hover:scale-[2.6] group-hover:bg-teal-500/12"
                />

                <span className="relative grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-navy-800 to-navy-600 text-white shadow-soft transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
                  <Icon className="size-6" />
                </span>

                <h3 className="relative mt-5 font-display text-[17px] font-bold text-navy-800">{title}</h3>
                <p className="relative mt-2 text-[13.5px] leading-relaxed text-navy-500">{short}</p>

                <span className="relative mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-teal-600">
                  Know more
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            </RevealItem>
          ))}

          <RevealItem>
            <Link
              to="/customized-tour"
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-navy-800 p-6 text-white shadow-card transition-all duration-500 hover:-translate-y-2"
            >
              <span
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(80%_80%_at_100%_0%,rgba(47,180,160,0.45),transparent_60%)]"
              />
              <div className="relative">
                <h3 className="font-display text-xl font-extrabold leading-tight">
                  Nothing fits?
                  <br />
                  We will build it.
                </h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-navy-100/80">
                  Tell us your dates, budget and pace — we design the itinerary around you.
                </p>
              </div>
              <span className="relative mt-6 inline-flex items-center gap-2 text-[13px] font-bold text-gold-300">
                Plan my custom trip
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  )
}
