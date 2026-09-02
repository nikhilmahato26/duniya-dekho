import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/common/Reveal'
import { IMG, photo } from '@/data/images'

const collage = [
  { id: IMG.tajReflection, className: 'col-span-2 aspect-[16/10]' },
  { id: IMG.europe, className: 'aspect-square' },
  { id: IMG.dubaiSkyline, className: 'aspect-square' },
]

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-navy-50/50 py-20 lg:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <span className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-teal-600">
              <span className="h-px w-8 bg-teal-400/70" />
              About Us
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.14] text-navy-800 sm:text-4xl">
              A travel agency built on phone calls, not call centres
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-5 text-[15px] leading-relaxed text-navy-500">
              Duniya Dekho Travels is a leading travel agency committed to making your travel dreams
              come true. Whether you want to explore beautiful places in India or see the wonders of
              the world, we are here to plan, book and support your journey with complete care and
              trust.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-navy-500">
              From our office in Agra we handle everything end to end — flights, trains, hotels,
              cabs, visas and full itineraries — so that the only thing you have to organise is your
              suitcase.
            </p>
          </Reveal>

          <Reveal delay={0.14} className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="navy" size="lg">
              <Link to="/about">
                Read More <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Visit Our Agra Office</Link>
            </Button>
          </Reveal>
        </div>

        <Reveal direction="left" className="grid grid-cols-2 gap-4">
          {collage.map((item, i) => (
            <div
              key={item.id}
              className={`group overflow-hidden rounded-3xl border border-white shadow-card ${item.className}`}
            >
              <img
                src={photo(item.id, { w: 800, q: 70 })}
                alt=""
                loading="lazy"
                style={{ transitionDelay: `${i * 40}ms` }}
                className="size-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
              />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
