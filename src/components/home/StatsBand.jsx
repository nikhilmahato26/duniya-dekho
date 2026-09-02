import { Counter } from '@/components/common/Counter'
import { RevealGroup, RevealItem } from '@/components/common/Reveal'
import { IMG, photo } from '@/data/images'
import { stats } from '@/data/site'

export function StatsBand() {
  return (
    <section className="relative isolate overflow-hidden py-16 lg:py-20">
      <img
        src={photo(IMG.starryPeaks, { w: 1800, q: 60 })}
        alt=""
        loading="lazy"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-navy-950/85" />

      <div className="container-page">
        <RevealGroup className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <RevealItem key={stat.label} className="text-center">
              <span className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="mt-2 block text-[12.5px] font-semibold uppercase tracking-[0.2em] text-teal-300">
                {stat.label}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
