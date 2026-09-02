import { Suspense, lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FloatingActions } from '@/components/layout/FloatingActions'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { RouteChrome } from '@/components/layout/RouteChrome'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Home from '@/pages/Home'

const TourPackages = lazy(() => import('@/pages/TourPackages'))
const PackageDetail = lazy(() => import('@/pages/PackageDetail'))
const BookingServices = lazy(() => import('@/pages/BookingServices'))
const CustomizedTour = lazy(() => import('@/pages/CustomizedTour'))
const About = lazy(() => import('@/pages/About'))
const Gallery = lazy(() => import('@/pages/Gallery'))
const Contact = lazy(() => import('@/pages/Contact'))
const NotFound = lazy(() => import('@/pages/NotFound'))

function RouteFallback() {
  return (
    <div className="grid min-h-[70vh] place-items-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <img src="/logo.png" alt="" className="size-16 animate-float object-contain" />
        <span className="h-1 w-32 overflow-hidden rounded-full bg-navy-100">
          <span className="block h-full w-1/2 animate-[marquee_1.1s_linear_infinite] rounded-full bg-teal-500" />
        </span>
      </div>
    </div>
  )
}

export default function App() {
  const location = useLocation()
  useSmoothScroll()

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <Navbar />
      <RouteChrome />

      <main className="flex-1 pb-14 sm:pb-0">
        <Suspense fallback={<RouteFallback />}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/tour-packages" element={<TourPackages />} />
              <Route path="/tour-packages/:slug" element={<PackageDetail />} />
              <Route path="/booking-services" element={<BookingServices />} />
              <Route path="/customized-tour" element={<CustomizedTour />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </Suspense>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  )
}
