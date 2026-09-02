import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { SlidersHorizontal } from 'lucide-react'
import { PageHero } from '@/components/common/PageHero'
import { PackageCard } from '@/components/common/PackageCard'
import { FaqSection } from '@/components/home/FaqSection'
import { CtaBanner } from '@/components/home/CtaBanner'
import { packageFilters, packages } from '@/data/packages'
import { IMG } from '@/data/images'
import { cn } from '@/lib/utils'

const sorters = {
  popular: (a, b) => b.reviews - a.reviews,
  'price-low': (a, b) => a.price - b.price,
  'price-high': (a, b) => b.price - a.price,
  duration: (a, b) => b.days - a.days,
}

export default function TourPackages() {
  const [params, setParams] = useSearchParams()
  const typeParam = params.get('type') || 'all'
  const [filter, setFilter] = useState(typeParam)
  const [sort, setSort] = useState('popular')

  useEffect(() => setFilter(typeParam), [typeParam])

  const visible = useMemo(() => {
    const list = filter === 'all' ? packages : packages.filter((p) => p.type.includes(filter))
    return [...list].sort(sorters[sort])
  }, [filter, sort])

  const applyFilter = (id) => {
    setFilter(id)
    if (id === 'all') setParams({}, { replace: true })
    else setParams({ type: id }, { replace: true })
  }

  return (
    <>
      <PageHero
        image={IMG.ladakh}
        eyebrow="Tour Packages"
        title="Curated journeys, honestly priced"
        subtitle="Domestic escapes and international holidays with stays, transfers and sightseeing bundled — customise any of them to your dates."
        crumbs={[{ label: 'Tour Packages' }]}
      />

      <section className="py-14 lg:py-20">
        <div className="container-page">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {packageFilters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => applyFilter(f.id)}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-[13.5px] font-semibold transition-colors duration-300',
                    filter === f.id ? 'text-white' : 'text-navy-600 hover:text-navy-900',
                  )}
                >
                  {filter === f.id && (
                    <motion.span
                      layoutId="pkg-filter"
                      className="absolute inset-0 -z-10 rounded-full bg-navy-800"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {f.label}
                </button>
              ))}
            </div>

            <label className="flex items-center gap-2 text-[13px] text-navy-500">
              <SlidersHorizontal className="size-4 text-teal-600" />
              Sort by
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="cursor-pointer rounded-xl border border-navy-100 bg-white px-3 py-2 text-[13px] font-semibold text-navy-800 outline-none focus:border-teal-400"
              >
                <option value="popular">Most popular</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
                <option value="duration">Longest trip</option>
              </select>
            </label>
          </div>

          <p className="mt-6 text-[13.5px] text-navy-400">
            Showing <span className="font-bold text-navy-700">{visible.length}</span> packages
          </p>

          <motion.div layout className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {visible.map((pkg) => (
                <motion.div
                  key={pkg.slug}
                  layout
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <PackageCard pkg={pkg} className="h-full" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {visible.length === 0 && (
            <p className="py-16 text-center text-navy-400">
              No packages in this category yet — call us and we will build one.
            </p>
          )}
        </div>
      </section>

      <FaqSection className="bg-navy-50/50 py-20 lg:py-24" />
      <CtaBanner />
    </>
  )
}
