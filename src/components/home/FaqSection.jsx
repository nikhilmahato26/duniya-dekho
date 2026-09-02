import { Link } from 'react-router-dom'
import { MessageCircleQuestion } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/common/Reveal'
import { faqs } from '@/data/site'

export function FaqSection({ className }) {
  return (
    <section className={className}>
      <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal direction="right">
          <span className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-teal-600">
            <span className="h-px w-8 bg-teal-400/70" />
            FAQ
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.14] text-navy-800 sm:text-4xl">
            Questions travellers ask us before booking
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-navy-500">
            Still unsure about something? Call us — we would rather answer honestly now than have you
            find out mid-trip.
          </p>

          <Button asChild variant="navy" size="lg" className="mt-6">
            <Link to="/contact">
              <MessageCircleQuestion className="size-4" /> Ask A Question
            </Link>
          </Button>
        </Reveal>

        <Reveal direction="left" delay={0.08}>
          <Accordion type="single" collapsible defaultValue="faq-0" className="grid gap-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`faq-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
