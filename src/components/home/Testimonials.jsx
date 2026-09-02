import { Quote } from 'lucide-react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Carousel } from '@/components/common/Carousel'
import { Stars } from '@/components/common/Stars'
import { Reveal } from '@/components/common/Reveal'
import { testimonials } from '@/data/content'

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
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-teal-50/50 to-white py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="What Our Clients Say"
          title="Trusted By Thousands Of Happy Travellers"
          subtitle="Reviews collected from travellers across Agra, Delhi, Lucknow and beyond."
        />

        <Reveal delay={0.1} className="mt-12">
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
    </section>
  )
}
