import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { TopBar } from './TopBar'
import { navLinks, site } from '@/data/site'
import { cn, whatsappLink } from '@/lib/utils'

function DesktopLink({ link }) {
  const [open, setOpen] = useState(false)
  const hasChildren = Boolean(link.children?.length)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <NavLink
        to={link.to}
        className={({ isActive }) =>
          cn(
            'group relative flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-2 text-[13.5px] font-semibold transition-colors duration-300',
            isActive ? 'text-navy-900' : 'text-navy-600 hover:text-navy-900',
          )
        }
      >
        {({ isActive }) => (
          <>
            {isActive && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 -z-10 rounded-full bg-navy-800"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
            <span className={cn(isActive && 'text-white')}>{link.label}</span>
            {hasChildren && (
              <ChevronDown
                className={cn(
                  'size-3.5 transition-transform duration-300',
                  isActive && 'text-white',
                  open && 'rotate-180',
                )}
              />
            )}
          </>
        )}
      </NavLink>

      {hasChildren && (
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-full z-50 w-64 pt-3"
            >
              <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white p-2 shadow-card">
                {link.children.map((child) => (
                  <Link
                    key={child.label}
                    to={child.to}
                    className="group/item flex items-center justify-between rounded-xl px-3.5 py-2.5 text-[13.5px] font-medium text-navy-600 transition-colors hover:bg-teal-50 hover:text-teal-700"
                  >
                    {child.label}
                    <span className="translate-x-0 text-teal-400 opacity-0 transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:opacity-100">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMobileOpen(false), [pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-80">
      <motion.div
        initial={false}
        animate={{ height: scrolled ? 0 : 40, opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <TopBar />
      </motion.div>

      <div
        className={cn(
          'transition-all duration-500',
          scrolled
            ? 'glass-panel border-b border-navy-100/70 shadow-[0_10px_30px_-20px_rgba(11,37,69,0.5)]'
            : 'bg-white',
        )}
      >
        <div className="container-page flex h-18 items-center justify-between gap-4 py-2.5">
          <Link to="/" className="group flex items-center gap-3" aria-label={site.name}>
            <img
              src="/logo.png"
              alt=""
              width="56"
              height="56"
              className="size-13 shrink-0 object-contain transition-transform duration-500 group-hover:scale-105 sm:size-14"
            />
            <span className="flex flex-col whitespace-nowrap leading-none">
              <span className="font-display text-[15px] font-extrabold tracking-tight text-navy-800 sm:text-[16.5px]">
                Duniya Dekho Travels
              </span>
              <span className="mt-1 text-[9.5px] font-semibold uppercase tracking-[0.18em] text-teal-600 sm:text-[10px]">
                {site.tagline}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 xl:flex">
            {navLinks.map((link) => (
              <DesktopLink key={link.label} link={link} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="teal" size="md" className="hidden md:inline-flex">
              <a href={`tel:+91${site.primaryPhone}`}>
                <Phone className="size-4" />
                {site.primaryPhone}
              </a>
            </Button>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  className="grid size-11 place-items-center rounded-full border border-navy-100 text-navy-700 transition-colors hover:border-teal-300 hover:text-teal-600 xl:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="size-5" />
                </button>
              </SheetTrigger>

              <SheetContent>
                <div className="flex items-center gap-3 border-b border-navy-100 px-6 py-5">
                  <img src="/logo.png" alt="" className="size-12 object-contain" />
                  <span className="flex flex-col">
                    <span className="font-display text-[15px] font-extrabold text-navy-800">
                      Duniya Dekho Travels
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-600">
                      {site.tagline}
                    </span>
                  </span>
                </div>

                <nav className="flex-1 overflow-y-auto px-4 py-4">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <SheetClose asChild>
                        <NavLink
                          to={link.to}
                          className={({ isActive }) =>
                            cn(
                              'block rounded-xl px-4 py-3 font-display text-[15px] font-semibold transition-colors',
                              isActive
                                ? 'bg-navy-800 text-white'
                                : 'text-navy-700 hover:bg-navy-50',
                            )
                          }
                        >
                          {link.label}
                        </NavLink>
                      </SheetClose>
                      {link.children && (
                        <div className="mb-1 ml-4 border-l border-navy-100 pl-3">
                          {link.children.map((child) => (
                            <SheetClose asChild key={child.label}>
                              <Link
                                to={child.to}
                                className="block py-2 text-[13.5px] text-navy-500 transition-colors hover:text-teal-600"
                              >
                                {child.label}
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </nav>

                <div className="grid gap-2 border-t border-navy-100 p-4">
                  <Button asChild variant="navy" size="md">
                    <a href={`tel:+91${site.primaryPhone}`}>
                      <Phone className="size-4" /> Call {site.primaryPhone}
                    </a>
                  </Button>
                  <Button asChild variant="primary" size="md">
                    <a
                      href={whatsappLink(site.primaryPhone, 'Hi Duniya Dekho Travels, I would like to plan a trip.')}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaWhatsapp className="size-4" /> WhatsApp Us
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
