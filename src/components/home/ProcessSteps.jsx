import { SectionHeading } from '@/components/common/SectionHeading'
import { RevealGroup, RevealItem } from '@/components/common/Reveal'
import { processSteps } from '@/data/site'

export function ProcessSteps() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 text-white lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 size-96 rounded-full bg-teal-500/12 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 size-80 rounded-full bg-gold-400/10 blur-3xl"
      />

      <div className="container-page relative">
        <SectionHeading
          tone="dark"
          eyebrow="How It Works"
          title="Four steps from idea to boarding pass"
          subtitle="No forms that vanish into an inbox. A real coordinator picks up your enquiry and stays with it."
        />

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <RevealItem key={step.step} className="relative">
              <div className="group h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-teal-300/40 hover:bg-white/10">
                <span className="font-display text-5xl font-extrabold leading-none text-white/12 transition-colors duration-500 group-hover:text-teal-300/40">
                  {step.step}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-navy-100/75">{step.text}</p>
              </div>

              {i < processSteps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-teal-400/60 to-transparent lg:block"
                />
              )}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
