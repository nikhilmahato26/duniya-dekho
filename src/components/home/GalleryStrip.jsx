import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/common/SectionHeading'
import { RevealGroup, RevealItem } from '@/components/common/Reveal'
import { galleryItems } from '@/data/content'
import { photo } from '@/data/images'

export function GalleryStrip() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Travel Gallery"
          title="Glimpses Of Happy Journeys"
          subtitle="Frames sent back to us by travellers who booked with Duniya Dekho Travels."
        />

        <RevealGroup className="mt-12 grid auto-rows-[130px] grid-cols-2 gap-3 sm:grid-cols-3 sm:auto-rows-[150px] lg:grid-cols-6">
          {galleryItems.slice(0, 12).map((item, i) => {
            const big = i === 0 || i === 7
            return (
              <RevealItem
                key={item.id}
                className={big ? 'col-span-2 row-span-2 h-full' : 'h-full'}
              >
                <Link
                  to="/gallery"
                  className="group relative block size-full overflow-hidden rounded-2xl"
                >
                  <img
                    src={photo(item.id, { w: big ? 800 : 500, h: big ? 800 : 500, q: 68 })}
                    alt={item.label}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute inset-x-0 bottom-0 p-3 text-[13px] font-bold text-white transition-transform duration-500 group-hover:-translate-y-1">
                    {item.label}
                  </span>
                </Link>
              </RevealItem>
            )
          })}
        </RevealGroup>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/gallery">
              View Full Gallery <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
