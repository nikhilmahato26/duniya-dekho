import { Marquee } from '@/components/common/Marquee'

const items = [
  'IATA-standard ticketing',
  'Verified hotels only',
  'No hidden charges',
  '24×7 travel desk',
  'Instant WhatsApp quotes',
  'Visa documentation help',
  'Group & corporate tours',
  'Based in Agra',
]

export function TrustMarquee() {
  return (
    <div className="border-y border-navy-100 bg-navy-50/60 py-4">
      <Marquee
        items={items}
        itemClassName="text-[13px] font-semibold uppercase tracking-[0.18em] text-navy-500"
      />
    </div>
  )
}
