import { Link } from 'react-router-dom'
import { ArrowRight, Heart, ShieldCheck, Users, Wallet } from 'lucide-react'
import { PageHero } from '@/components/common/PageHero'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal, RevealGroup, RevealItem } from '@/components/common/Reveal'
import { Button } from '@/components/ui/button'
import { StatsBand } from '@/components/home/StatsBand'
import { ProcessSteps } from '@/components/home/ProcessSteps'
import { Testimonials } from '@/components/home/Testimonials'
import { CtaBanner } from '@/components/home/CtaBanner'
import { teamValues } from '@/data/content'
import { whyChooseUs } from '@/data/site'
import { IMG, photo } from '@/data/images'

const values = [
  { icon: ShieldCheck, title: 'Trust first', text: 'Written itineraries, transparent policies and no hidden charges — ever.' },
  { icon: Wallet, title: 'Fair pricing', text: 'Agent fares passed on to you instead of padded margins.' },
  { icon: Users, title: 'Personal service', text: 'One coordinator who knows your trip, not a ticket number in a queue.' },
  { icon: Heart, title: 'Care on the road', text: 'Support that continues after you leave, not just until you pay.' },
]

export default function About() {
  return (
    <>
      <PageHero
        image={IMG.tajLeaves}
        eyebrow="About Us"
        title="Aapke Safar Ka Sathi — since the first ticket we ever booked"
        subtitle="A travel company from Agra that grew on word of mouth, repeat families and trips that went exactly as promised."
        crumbs={[{ label: 'About Us' }]}
      />

      <section className="py-16 lg:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={photo(IMG.keralaBackwater, { w: 700, h: 900, q: 70 })}
                alt="Kerala backwaters"
                loading="lazy"
                className="aspect-[3/4] w-full rounded-3xl object-cover shadow-card"
              />
              <div className="mt-10 grid gap-4">
                <img
                  src={photo(IMG.dubai, { w: 700, h: 700, q: 70 })}
                  alt="Dubai skyline"
                  loading="lazy"
                  className="aspect-square w-full rounded-3xl object-cover shadow-card"
                />
                <img
                  src={photo(IMG.sikkim, { w: 700, h: 700, q: 70 })}
                  alt="Himalayan peaks"
                  loading="lazy"
                  className="aspect-square w-full rounded-3xl object-cover shadow-card"
                />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-teal-600">
                <span className="h-px w-8 bg-teal-400/70" />
                Who we are
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.14] text-navy-800 sm:text-4xl">
                A small team that plans a lot of very good trips
              </h2>
            </Reveal>

            <div className="mt-6 space-y-6">
              {teamValues.map((block, i) => (
                <Reveal key={block.title} delay={0.06 * i}>
                  <h3 className="font-display text-[17px] font-bold text-navy-800">{block.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-navy-500">{block.text}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.25} className="mt-8">
              <Button asChild variant="navy" size="lg">
                <Link to="/contact">
                  Talk To Our Team <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <StatsBand />

      <section className="py-20 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we stand for"
            title="Four things we refuse to compromise on"
          />
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <RevealItem key={title}>
                <div className="group h-full rounded-3xl border border-navy-100 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-teal-200 hover:shadow-card">
                  <span className="grid size-13 place-items-center rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-glow transition-transform duration-500 group-hover:-rotate-6">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-[17px] font-bold text-navy-800">{title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-navy-500">{text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-navy-50/50 py-20 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why choose us"
            title="Six reasons families keep coming back"
          />
          <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((point, i) => (
              <RevealItem key={point.title}>
                <div className="h-full rounded-3xl border border-navy-100 bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft">
                  <span className="font-display text-3xl font-extrabold text-teal-500/25">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-[16.5px] font-bold text-navy-800">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-navy-500">{point.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <ProcessSteps />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
