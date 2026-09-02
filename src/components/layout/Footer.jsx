import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { site } from '@/data/site'
import { packages } from '@/data/packages'
import { whatsappLink } from '@/lib/utils'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Tour Packages', to: '/tour-packages' },
  { label: 'Booking Services', to: '/booking-services' },
  { label: 'Customized Tour', to: '/customized-tour' },
  { label: 'About Us', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact Us', to: '/contact' },
]

const socials = [
  { icon: FaFacebookF, href: site.socials.facebook, label: 'Facebook', color: 'hover:bg-[#1877F2]' },
  { icon: FaInstagram, href: site.socials.instagram, label: 'Instagram', color: 'hover:bg-[#E1306C]' },
  { icon: FaYoutube, href: site.socials.youtube, label: 'YouTube', color: 'hover:bg-[#FF0000]' },
  {
    icon: FaWhatsapp,
    href: whatsappLink(site.primaryPhone, 'Hi Duniya Dekho Travels!'),
    label: 'WhatsApp',
    color: 'hover:bg-[#25D366]',
  },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-navy-100">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 size-[520px] rounded-full bg-teal-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 size-[420px] rounded-full bg-gold-400/10 blur-3xl"
      />

      <div className="container-page relative">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:gap-10 lg:py-20">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="" className="size-16 object-contain" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-extrabold text-white">Duniya Dekho</span>
                <span className="font-display text-lg font-extrabold text-teal-300">Travels</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-200/80">
              Explore More… Live More. From Agra to anywhere on the map — flights, trains, hotels,
              cabs, visas and hand-built itineraries, all under one roof.
            </p>

            <div className="mt-6 flex gap-2.5">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={`grid size-10 place-items-center rounded-xl bg-white/8 text-white ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:ring-transparent ${color}`}
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-base font-bold text-white">Quick Links</h4>
            <span className="mt-3 block h-0.5 w-9 rounded-full bg-gold-400" />
            <ul className="mt-5 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-2 text-sm text-navy-200/80 transition-colors hover:text-gold-300"
                  >
                    <span className="h-px w-0 bg-gold-300 transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-bold text-white">Our Packages</h4>
            <span className="mt-3 block h-0.5 w-9 rounded-full bg-gold-400" />
            <ul className="mt-5 space-y-2.5">
              {packages.slice(0, 6).map((pkg) => (
                <li key={pkg.slug}>
                  <Link
                    to={`/tour-packages/${pkg.slug}`}
                    className="group inline-flex items-center gap-2 text-sm text-navy-200/80 transition-colors hover:text-gold-300"
                  >
                    <span className="h-px w-0 bg-gold-300 transition-all duration-300 group-hover:w-3" />
                    {pkg.title.split('—')[0].trim()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-bold text-white">Contact Us</h4>
            <span className="mt-3 block h-0.5 w-9 rounded-full bg-gold-400" />
            <ul className="mt-5 space-y-3.5 text-sm">
              {site.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:+91${phone}`}
                    className="flex items-center gap-3 text-navy-200/80 transition-colors hover:text-gold-300"
                  >
                    <Phone className="size-4 shrink-0 text-teal-300" />
                    <span className="tabular-nums">+91 {phone}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 break-all text-navy-200/80 transition-colors hover:text-gold-300"
                >
                  <Mail className="mt-0.5 size-4 shrink-0 text-teal-300" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-navy-200/80">
                <MapPin className="mt-0.5 size-4 shrink-0 text-teal-300" />
                {site.address}
              </li>
            </ul>

            <form
              className="mt-6"
              onSubmit={(e) => {
                e.preventDefault()
                const email = new FormData(e.currentTarget).get('email')
                window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
                  'Newsletter subscription',
                )}&body=${encodeURIComponent(`Please add ${email} to your travel deals list.`)}`
              }}
            >
              <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-300">
                Get travel deals
              </label>
              <div className="mt-2 flex gap-2">
                <Input
                  name="email"
                  type="email"
                  required
                  placeholder="Your email"
                  className="border-white/10 bg-white/8 text-white placeholder:text-navy-300 focus:border-teal-400 focus:ring-teal-500/20"
                />
                <Button type="submit" variant="primary" size="icon" aria-label="Subscribe">
                  <Send className="size-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-[13px] text-navy-300 sm:flex-row sm:text-left">
            <p>
              © {new Date().getFullYear()} {site.name}. All Rights Reserved.
            </p>
            <p className="flex items-center gap-1.5">
              Designed with <span className="text-red-400">❤</span> for Travellers
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
