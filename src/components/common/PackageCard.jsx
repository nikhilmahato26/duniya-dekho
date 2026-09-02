import { Link } from 'react-router-dom'
import { ArrowUpRight, CalendarDays, MapPin } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Stars } from './Stars'
import { photo } from '@/data/images'
import { cn, formatINR } from '@/lib/utils'

export function PackageCard({ pkg, className }) {
  return (
    <article
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-teal-200 hover:shadow-[0_30px_60px_-30px_rgba(11,37,69,0.45)]',
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={photo(pkg.image, { w: 800, h: 600, q: 70 })}
          alt={pkg.title}
          loading="lazy"
          className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/75 via-navy-900/10 to-transparent" />

        {pkg.badge && (
          <Badge tone="gold" className="absolute left-4 top-4 shadow-sm">
            {pkg.badge}
          </Badge>
        )}

        <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11.5px] font-bold text-navy-800 backdrop-blur">
          ★ {pkg.rating}
        </span>

        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between text-white">
          <span className="flex items-center gap-1.5 text-[12.5px] font-medium">
            <MapPin className="size-3.5 text-teal-300" />
            {pkg.region}
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-black/30 px-2.5 py-1 text-[11.5px] font-semibold backdrop-blur-sm">
            <CalendarDays className="size-3.5" />
            {pkg.nights}N / {pkg.days}D
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-[17px] font-bold leading-snug text-navy-800 transition-colors group-hover:text-teal-700">
          {pkg.title}
        </h3>

        <div className="mt-2 flex items-center gap-2">
          <Stars rating={pkg.rating} size="size-3.5" />
          <span className="text-xs text-navy-400">({pkg.reviews} reviews)</span>
        </div>

        <p className="mt-3 line-clamp-2 text-[13.5px] leading-relaxed text-navy-500">{pkg.summary}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {pkg.highlights.slice(0, 2).map((h) => (
            <span
              key={h}
              className="rounded-full bg-navy-50 px-2.5 py-1 text-[11.5px] font-medium text-navy-600"
            >
              {h}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-5">
          <div className="flex items-end justify-between gap-3">
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-400">
                Starting from
              </span>
              <span className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-extrabold text-navy-800">
                  ₹{formatINR(pkg.price)}
                </span>
                {pkg.strike && (
                  <span className="text-[13px] text-navy-300 line-through">
                    ₹{formatINR(pkg.strike)}
                  </span>
                )}
              </span>
            </div>
            <span className="pb-1 text-[11.5px] text-navy-400">per person</span>
          </div>

          <Link
            to={`/tour-packages/${pkg.slug}`}
            className="mt-4 flex w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-gold-400 px-4 py-3 text-[13.5px] font-bold text-navy-900 transition-all duration-300 hover:bg-navy-800 hover:text-white"
          >
            View Details
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  )
}
