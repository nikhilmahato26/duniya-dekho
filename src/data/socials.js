import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { site } from './site'
import { whatsappLink } from '@/lib/utils'

/** Single source of truth for the social rail used in the hero, footer and contact page. */
export const socialLinks = [
  {
    label: 'Instagram',
    href: site.socials.instagram,
    icon: FaInstagram,
    hover: 'hover:bg-[#E1306C]',
  },
  {
    label: 'Facebook',
    href: site.socials.facebook,
    icon: FaFacebookF,
    hover: 'hover:bg-[#1877F2]',
  },
  {
    label: 'WhatsApp',
    href: whatsappLink(site.primaryPhone, `Hi ${site.name}, I would like to plan a trip.`),
    icon: FaWhatsapp,
    hover: 'hover:bg-[#25D366]',
  },
]
