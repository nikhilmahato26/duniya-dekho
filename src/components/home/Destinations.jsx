import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/common/SectionHeading'
import { RevealGroup, RevealItem } from '@/components/common/Reveal'
import { destinations } from '@/data/content'
import { photo } from '@/data/images'
import { formatINR } from '@/lib/utils'

export function Destinations() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Trending Destinations"
          title="Where India Is Travelling This Season"
          subtitle="Snow, sand, backwaters or skyline — pick a mood and we will price the whole trip for you today."
        />

        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((dest) => (
            <RevealItem key={dest.name}>
              <Link
                to="/tour-packages"
                className="group relative block aspect-[3/4] overflow-hidden rounded-3xl"
              >
                <img
                  src={photo(dest.image, { w: 700, h: 930, q: 70 })}
                  alt={dest.name}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-115"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/25 to-transparent transition-opacity duration-500 group-hover:from-navy-950/90" />

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="inline-block rounded-full bg-white/15 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur">
                    {dest.tag}
                  </span>
                  <h3 className="mt-2.5 font-display text-xl font-extrabold text-white">{dest.name}</h3>
                  <p className="mt-1 text-[13px] text-white/75">
                    From{' '}
                    <span className="font-bold text-gold-300">₹{formatINR(dest.from)}</span> / person
                  </p>

                  <span className="mt-3 flex h-0 items-center gap-2 overflow-hidden text-[12.5px] font-semibold text-teal-200 opacity-0 transition-all duration-500 group-hover:h-6 group-hover:opacity-100">
                    Explore packages →
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
