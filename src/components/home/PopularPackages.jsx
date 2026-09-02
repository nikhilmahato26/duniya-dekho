import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Carousel } from '@/components/common/Carousel'
import { PackageCard } from '@/components/common/PackageCard'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { packages } from '@/data/packages'

export function PopularPackages() {
  const featured = packages.filter((p) => p.featured)

  return (
    <section className="relative py-20 lg:py-28">
      <div className="container-page">
        <div className="flex flex-col items-center gap-6">
          <SectionHeading
            eyebrow="Popular Tour Packages"
            title="Discover Amazing Destinations"
            subtitle="Handpicked itineraries our travellers book again and again — priced per person, with stays, transfers and sightseeing already inside."
          />
        </div>

        <Reveal delay={0.1} className="mt-12">
          <Carousel
            autoplay
            slideClass="basis-[85%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            options={{ align: 'start', loop: true }}
          >
            {featured.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </Carousel>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex justify-center">
          <Button asChild variant="navy" size="lg">
            <Link to="/tour-packages">
              View All Packages <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
