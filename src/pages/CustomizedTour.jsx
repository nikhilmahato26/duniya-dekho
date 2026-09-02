import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarRange, Check, IndianRupee, Send, Sparkles, Users } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { PageHero } from '@/components/common/PageHero'
import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Button } from '@/components/ui/button'
import { Field, Input, Select, Textarea } from '@/components/ui/input'
import { Testimonials } from '@/components/home/Testimonials'
import { IMG } from '@/data/images'
import { site } from '@/data/site'
import { cn, whatsappLink } from '@/lib/utils'

const serviceOptions = [
  'Flight tickets',
  'Train tickets',
  'Hotel booking',
  'Cab / transfers',
  'Sightseeing',
  'Visa assistance',
]

const perks = [
  { icon: CalendarRange, title: 'Your dates, your pace', text: 'Add a day in the mountains or cut a city — the plan bends around you.' },
  { icon: IndianRupee, title: 'Built to your budget', text: 'Tell us the number. We design the best possible trip inside it, honestly.' },
  { icon: Users, title: 'Family, group or solo', text: 'Kids, elders, big groups or a honeymoon — the itinerary changes accordingly.' },
  { icon: Sparkles, title: 'Written before you pay', text: 'You get a day-by-day plan with inclusions in writing before any payment.' },
]

export default function CustomizedTour() {
  const [selected, setSelected] = useState(['Hotel booking', 'Sightseeing'])
  const [sent, setSent] = useState(false)

  const toggle = (option) =>
    setSelected((prev) =>
      prev.includes(option) ? prev.filter((s) => s !== option) : [...prev, option],
    )

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))

    const message = [
      `Hi ${site.name}, I would like a customised tour plan.`,
      '',
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      data.email ? `Email: ${data.email}` : null,
      `Destination: ${data.destination}`,
      `Travel date: ${data.date || 'Flexible'}`,
      `Duration: ${data.duration}`,
      `Travellers: ${data.adults} adult(s), ${data.children} child(ren)`,
      `Budget per person: ${data.budget}`,
      `Hotel category: ${data.hotel}`,
      `Services needed: ${selected.join(', ') || 'Not specified'}`,
      data.notes ? `Notes: ${data.notes}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(whatsappLink(site.primaryPhone, message), '_blank', 'noopener')
    setSent(true)
  }

  return (
    <>
      <PageHero
        image={IMG.roadTrip}
        eyebrow="Customized Tour"
        title="Your trip, designed around you"
        subtitle="Fill this once and our team returns a day-by-day itinerary with real pricing — usually the same day."
        crumbs={[{ label: 'Customized Tour' }]}
      />

      <section className="py-16 lg:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <Reveal className="rounded-[2rem] border border-navy-100 bg-white p-6 shadow-card sm:p-8">
            <h2 className="font-display text-2xl font-extrabold text-navy-800">
              Tell us about your trip
            </h2>
            <p className="mt-2 text-[14.5px] text-navy-500">
              Fields marked <span className="font-semibold text-gold-500">*</span> help us quote
              accurately. Everything else is optional.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" required>
                  <Input name="name" required placeholder="Your name" />
                </Field>
                <Field label="Mobile number" required>
                  <Input name="phone" required type="tel" pattern="[0-9+ ]{10,15}" placeholder="10-digit mobile" />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email">
                  <Input name="email" type="email" placeholder="you@example.com" />
                </Field>
                <Field label="Destination" required>
                  <Input name="destination" required placeholder="Kashmir, Dubai, Bali…" />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <Field label="Travel date">
                  <Input name="date" type="date" />
                </Field>
                <Field label="Duration">
                  <Select name="duration" defaultValue="5 – 6 Nights">
                    {['2 – 3 Nights', '4 Nights', '5 – 6 Nights', '7 – 9 Nights', '10+ Nights'].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </Select>
                </Field>
                <Field label="Budget / person">
                  <Select name="budget" defaultValue="₹15,000 – ₹30,000">
                    {['Under ₹15,000', '₹15,000 – ₹30,000', '₹30,000 – ₹60,000', '₹60,000 – ₹1,00,000', '₹1,00,000+'].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </Select>
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <Field label="Adults">
                  <Select name="adults" defaultValue="2">
                    {['1', '2', '3', '4', '5', '6+'].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </Select>
                </Field>
                <Field label="Children">
                  <Select name="children" defaultValue="0">
                    {['0', '1', '2', '3+'].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </Select>
                </Field>
                <Field label="Hotel category">
                  <Select name="hotel" defaultValue="3 Star">
                    {['Budget', '3 Star', '4 Star', '5 Star', 'Resort / Villa'].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </Select>
                </Field>
              </div>

              <div>
                <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-400">
                  Services you need
                </span>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((option) => {
                    const active = selected.includes(option)
                    return (
                      <button
                        type="button"
                        key={option}
                        onClick={() => toggle(option)}
                        className={cn(
                          'flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[13px] font-medium transition-all duration-300',
                          active
                            ? 'border-teal-500 bg-teal-500 text-white shadow-glow'
                            : 'border-navy-100 bg-white text-navy-600 hover:border-teal-300 hover:text-teal-700',
                        )}
                      >
                        {active && <Check className="size-3.5" strokeWidth={3} />}
                        {option}
                      </button>
                    )
                  })}
                </div>
              </div>

              <Field label="Anything else we should know?">
                <Textarea
                  name="notes"
                  placeholder="Elderly parents travelling, vegetarian meals, honeymoon setup, specific hotels…"
                />
              </Field>

              <div className="flex flex-wrap items-center gap-3">
                <Button type="submit" variant="primary" size="lg">
                  <FaWhatsapp className="size-5" /> Send On WhatsApp
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={`mailto:${site.email}?subject=Customised tour enquiry`}>
                    <Send className="size-4" /> Email Instead
                  </a>
                </Button>
              </div>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl bg-teal-50 px-4 py-3 text-[13.5px] font-medium text-teal-700"
                >
                  WhatsApp should have opened with your details. If it did not, call us on{' '}
                  {site.primaryPhone} — we will take it down over the phone.
                </motion.p>
              )}
            </form>
          </Reveal>

          <div className="space-y-4">
            {perks.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} direction="left" delay={0.06 * i}>
                <div className="group flex gap-4 rounded-3xl border border-navy-100 bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-teal-200 hover:shadow-soft">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-navy-50 text-navy-700 transition-colors duration-500 group-hover:bg-teal-500 group-hover:text-white">
                    <Icon className="size-5" />
                  </span>
                  <span>
                    <span className="block font-display text-[15.5px] font-bold text-navy-800">
                      {title}
                    </span>
                    <span className="mt-1 block text-[13.5px] leading-relaxed text-navy-500">
                      {text}
                    </span>
                  </span>
                </div>
              </Reveal>
            ))}

            <Reveal direction="left" delay={0.3}>
              <div className="rounded-3xl bg-navy-800 p-6 text-white">
                <h3 className="font-display text-lg font-bold">Prefer to just talk?</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-navy-100/80">
                  Call between 9 AM and 9 PM and we will plan it live on the phone.
                </p>
                <Button asChild variant="primary" size="md" className="mt-4 w-full">
                  <a href={`tel:+91${site.primaryPhone}`}>{site.primaryPhone}</a>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-navy-50/50 py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Popular customisations"
            title="Trips we redesign every week"
            subtitle="Honeymoon upgrades, senior-friendly pacing, corporate offsites, school groups and pilgrimage circuits."
          />
        </div>
      </section>

      <Testimonials />
    </>
  )
}
