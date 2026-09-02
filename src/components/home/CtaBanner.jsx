import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/common/Reveal'
import { IMG, photo } from '@/data/images'
import { site } from '@/data/site'
import { whatsappLink } from '@/lib/utils'

export function CtaBanner() {
  return (
    <section className="container-page py-16 lg:py-20">
      <Reveal className="relative isolate overflow-hidden rounded-[2.5rem]">
        <img
          src={photo(IMG.beachSunset, { w: 1800, h: 700, q: 68 })}
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/92 via-navy-900/80 to-navy-900/55"
        />

        <div className="relative flex flex-col items-start gap-8 px-7 py-14 sm:px-12 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-16">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-teal-300">
              Ready when you are
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-[1.14] text-white sm:text-[2.6rem]">
              Tell us where you want to go. We will handle the rest.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-navy-100/80">
              Share your dates and budget on WhatsApp and get a full day-by-day itinerary with
              pricing — usually within a few hours, always from a real person.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
            <Button asChild variant="primary" size="lg">
              <a
                href={whatsappLink(
                  site.primaryPhone,
                  'Hi Duniya Dekho Travels, I want a quote for my trip.',
                )}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp className="size-5" /> WhatsApp Quote
              </a>
            </Button>
            <Button asChild variant="glass" size="lg">
              <a href={`tel:+91${site.primaryPhone}`}>
                <Phone className="size-4" /> {site.primaryPhone}
              </a>
            </Button>
            <Button asChild variant="glass" size="lg" className="lg:hidden xl:inline-flex">
              <Link to="/customized-tour">
                Custom Tour <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
