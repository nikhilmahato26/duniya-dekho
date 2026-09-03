import { Hero } from '@/components/home/Hero'
import { SearchStrip } from '@/components/home/SearchStrip'
import { TrustMarquee } from '@/components/home/TrustMarquee'
import { PopularPackages } from '@/components/home/PopularPackages'
import { ServicesSection } from '@/components/home/ServicesSection'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { StatsBand } from '@/components/home/StatsBand'
import { AboutPreview } from '@/components/home/AboutPreview'
import { Destinations } from '@/components/home/Destinations'
import { ProcessSteps } from '@/components/home/ProcessSteps'
import { GalleryStrip } from '@/components/home/GalleryStrip'
import { Testimonials } from '@/components/home/Testimonials'
import { FaqSection } from '@/components/home/FaqSection'
import { PaymentSection } from '@/components/common/PaymentSection'
import { CtaBanner } from '@/components/home/CtaBanner'

export default function Home() {
  return (
    <>
      <Hero />
      <SearchStrip />
      <PopularPackages />
      <TrustMarquee />
      <ServicesSection />
      <WhyChooseUs />
      <StatsBand />
      <AboutPreview />
      <Destinations />
      <ProcessSteps />
      <GalleryStrip />
      <Testimonials />
      <PaymentSection className="py-20 lg:py-28" />
      <FaqSection className="bg-navy-50/50 py-20 lg:py-28" />
      <CtaBanner />
    </>
  )
}
