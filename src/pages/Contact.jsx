import { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { PageHero } from '@/components/common/PageHero'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/ui/button'
import { Field, Input, Select, Textarea } from '@/components/ui/input'
import { FaqSection } from '@/components/home/FaqSection'
import { site } from '@/data/site'
import { IMG } from '@/data/images'
import { whatsappLink } from '@/lib/utils'

const socials = [
  { icon: FaFacebookF, href: site.socials.facebook, label: 'Facebook' },
  { icon: FaInstagram, href: site.socials.instagram, label: 'Instagram' },
  { icon: FaYoutube, href: site.socials.youtube, label: 'YouTube' },
  { icon: FaWhatsapp, href: whatsappLink(site.primaryPhone, 'Hi Duniya Dekho Travels!'), label: 'WhatsApp' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))
    const message = [
      `Hi ${site.name},`,
      '',
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      data.email ? `Email: ${data.email}` : null,
      `Subject: ${data.subject}`,
      '',
      data.message,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(whatsappLink(site.primaryPhone, message), '_blank', 'noopener')
    setSent(true)
  }

  const cards = [
    {
      icon: Phone,
      title: 'Call us',
      lines: site.phones.map((p) => ({ text: `+91 ${p}`, href: `tel:+91${p}` })),
    },
    {
      icon: Mail,
      title: 'Email us',
      lines: [{ text: site.email, href: `mailto:${site.email}` }],
    },
    {
      icon: MapPin,
      title: 'Visit our office',
      lines: [{ text: site.address }],
    },
    {
      icon: Clock,
      title: 'Working hours',
      lines: [{ text: site.hours }],
    },
  ]

  return (
    <>
      <PageHero
        image={IMG.agra}
        eyebrow="Contact Us"
        title="Talk to a real travel planner in Agra"
        subtitle="Call, WhatsApp, email or simply walk into our office near Silverline School, Rajpur Chungi."
        crumbs={[{ label: 'Contact Us' }]}
      />

      <section className="py-16 lg:py-20">
        <div className="container-page grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, lines }, i) => (
            <Reveal key={title} delay={0.05 * i}>
              <div className="group h-full rounded-3xl border border-navy-100 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-teal-200 hover:shadow-card">
                <span className="grid size-12 place-items-center rounded-2xl bg-navy-50 text-navy-700 transition-colors duration-500 group-hover:bg-teal-500 group-hover:text-white">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-[16px] font-bold text-navy-800">{title}</h3>
                <div className="mt-2 space-y-1">
                  {lines.map((line) =>
                    line.href ? (
                      <a
                        key={line.text}
                        href={line.href}
                        className="block break-words text-[13.5px] leading-relaxed text-navy-500 transition-colors hover:text-teal-600"
                      >
                        {line.text}
                      </a>
                    ) : (
                      <p key={line.text} className="text-[13.5px] leading-relaxed text-navy-500">
                        {line.text}
                      </p>
                    ),
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="container-page grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <Reveal className="rounded-[2rem] border border-navy-100 bg-white p-6 shadow-card sm:p-8">
            <h2 className="font-display text-2xl font-extrabold text-navy-800">Send us a message</h2>
            <p className="mt-2 text-[14.5px] text-navy-500">
              We reply to every enquiry — usually within a couple of hours during working time.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your name" required>
                  <Input name="name" required placeholder="Full name" />
                </Field>
                <Field label="Mobile number" required>
                  <Input name="phone" required type="tel" placeholder="10-digit mobile" />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email">
                  <Input name="email" type="email" placeholder="you@example.com" />
                </Field>
                <Field label="Subject">
                  <Select name="subject" defaultValue="Tour package enquiry">
                    {[
                      'Tour package enquiry',
                      'Flight booking',
                      'Train booking',
                      'Hotel booking',
                      'Cab / bus booking',
                      'Visa assistance',
                      'Something else',
                    ].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </Select>
                </Field>
              </div>

              <Field label="Message" required>
                <Textarea
                  name="message"
                  required
                  placeholder="Tell us where you want to go, your dates and how many people are travelling."
                />
              </Field>

              <div className="flex flex-wrap gap-3">
                <Button type="submit" variant="primary" size="lg">
                  <FaWhatsapp className="size-5" /> Send On WhatsApp
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={`mailto:${site.email}`}>
                    <Send className="size-4" /> Email Us
                  </a>
                </Button>
              </div>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl bg-teal-50 px-4 py-3 text-[13.5px] font-medium text-teal-700"
                >
                  Thanks! Your message is ready in WhatsApp — hit send and we will take it from there.
                </motion.p>
              )}
            </form>
          </Reveal>

          <div className="space-y-6">
            <Reveal direction="left" className="overflow-hidden rounded-[2rem] border border-navy-100 shadow-card">
              <iframe
                title="Duniya Dekho Travels office location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
                className="h-80 w-full lg:h-[26rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>

            <Reveal direction="left" delay={0.1} className="rounded-[2rem] bg-navy-800 p-6 text-white">
              <h3 className="font-display text-lg font-bold">Follow our journeys</h3>
              <p className="mt-2 text-[13.5px] text-navy-100/80">
                Live deals, new packages and traveller photos — first on social.
              </p>
              <div className="mt-4 flex gap-2.5">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid size-11 place-items-center rounded-xl bg-white/8 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-teal-500 hover:ring-transparent"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqSection className="bg-navy-50/50 py-20 lg:py-24" />
    </>
  )
}
