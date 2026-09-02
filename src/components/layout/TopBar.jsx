import { Mail, MapPin, Phone } from 'lucide-react'
import { site } from '@/data/site'

export function TopBar() {
  return (
    <div className="hidden bg-navy-800 text-navy-100 lg:block">
      <div className="container-page flex h-10 items-center justify-between text-[12.5px]">
        <a
          href={`mailto:${site.email}`}
          className="group flex items-center gap-2 transition-colors hover:text-gold-300"
        >
          <Mail className="size-3.5 text-teal-300 transition-transform group-hover:-translate-y-px" />
          {site.email}
        </a>

        <div className="flex items-center gap-2">
          <Phone className="size-3.5 text-teal-300" />
          {site.phones.map((phone, i) => (
            <span key={phone} className="flex items-center gap-2">
              {i > 0 && <span className="text-navy-500">|</span>}
              <a href={`tel:+91${phone}`} className="tabular-nums transition-colors hover:text-gold-300">
                {phone}
              </a>
            </span>
          ))}
        </div>

        <span className="flex items-center gap-2">
          <MapPin className="size-3.5 text-teal-300" />
          {site.city}
        </span>
      </div>
    </div>
  )
}
