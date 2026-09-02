import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Compass } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { IMG, photo } from '@/data/images'

export default function NotFound() {
  return (
    <section className="relative isolate grid min-h-screen place-items-center overflow-hidden bg-navy-900 px-5 text-center">
      <img
        src={photo(IMG.starryPeaks, { w: 1800, q: 60 })}
        alt=""
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-navy-950/85" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-xl"
      >
        <Compass className="mx-auto size-14 animate-float text-teal-300" />
        <p className="mt-6 font-display text-7xl font-extrabold text-white sm:text-8xl">404</p>
        <h1 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
          Looks like this route is off the map
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-navy-100/80">
          The page you are looking for has moved or never existed. Let us get you back to solid
          ground.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="primary" size="lg">
            <Link to="/">
              <ArrowLeft className="size-4" /> Back Home
            </Link>
          </Button>
          <Button asChild variant="glass" size="lg">
            <Link to="/tour-packages">Browse Packages</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
