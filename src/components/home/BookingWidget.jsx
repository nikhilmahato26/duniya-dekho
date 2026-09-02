import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Bus, Car, Hotel, Plane, Search, TrainFront, Palmtree } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { site } from '@/data/site'
import { packages } from '@/data/packages'
import { cn, whatsappLink } from '@/lib/utils'

const tabs = [
  { id: 'flight', label: 'Flight', icon: Plane },
  { id: 'train', label: 'Train', icon: TrainFront },
  { id: 'hotel', label: 'Hotel', icon: Hotel },
  { id: 'bus', label: 'Bus', icon: Bus },
  { id: 'cab', label: 'Cab', icon: Car },
  { id: 'package', label: 'Tour Packages', icon: Palmtree },
]

const fieldsByTab = {
  flight: [
    { name: 'from', label: 'From', placeholder: 'Enter departure city' },
    { name: 'to', label: 'To', placeholder: 'Enter destination' },
    { name: 'depart', label: 'Departure Date', type: 'date' },
    { name: 'return', label: 'Return Date', type: 'date' },
  ],
  train: [
    { name: 'from', label: 'From Station', placeholder: 'Agra Cantt' },
    { name: 'to', label: 'To Station', placeholder: 'New Delhi' },
    { name: 'depart', label: 'Journey Date', type: 'date' },
    { name: 'class', label: 'Class', type: 'select', options: ['Sleeper', '3A', '2A', '1A', 'Chair Car'] },
  ],
  hotel: [
    { name: 'city', label: 'City / Hotel', placeholder: 'Where are you staying?' },
    { name: 'checkin', label: 'Check In', type: 'date' },
    { name: 'checkout', label: 'Check Out', type: 'date' },
    { name: 'rooms', label: 'Rooms', type: 'select', options: ['1 Room', '2 Rooms', '3 Rooms', '4+ Rooms'] },
  ],
  bus: [
    { name: 'from', label: 'From', placeholder: 'Boarding city' },
    { name: 'to', label: 'To', placeholder: 'Drop city' },
    { name: 'depart', label: 'Travel Date', type: 'date' },
    { name: 'type', label: 'Bus Type', type: 'select', options: ['AC Sleeper', 'Volvo', 'Non-AC Seater', 'Tempo Traveller'] },
  ],
  cab: [
    { name: 'from', label: 'Pickup', placeholder: 'Pickup location' },
    { name: 'to', label: 'Drop', placeholder: 'Drop location' },
    { name: 'depart', label: 'Pickup Date', type: 'date' },
    { name: 'type', label: 'Cab Type', type: 'select', options: ['Sedan', 'SUV / Ertiga', 'Innova Crysta', 'Tempo Traveller'] },
  ],
  package: [
    {
      name: 'destination',
      label: 'Destination',
      type: 'select',
      options: packages.map((p) => p.title.split('—')[0].trim()),
    },
    { name: 'depart', label: 'Travel Date', type: 'date' },
    { name: 'nights', label: 'Duration', type: 'select', options: ['3 – 4 Nights', '5 – 6 Nights', '7 – 9 Nights', '10+ Nights'] },
    { name: 'budget', label: 'Budget / Person', type: 'select', options: ['Under ₹15,000', '₹15,000 – ₹30,000', '₹30,000 – ₹60,000', '₹60,000+'] },
  ],
}

const labelCls =
  'mb-1.5 block text-[10.5px] font-bold uppercase tracking-[0.16em] text-navy-400'
const controlCls =
  'w-full rounded-xl border border-navy-100 bg-white px-3.5 py-2.5 text-[13.5px] font-medium text-navy-800 outline-none transition-all placeholder:font-normal placeholder:text-navy-300 focus:border-teal-400 focus:ring-4 focus:ring-teal-500/10'

export function BookingWidget({ className }) {
  const [active, setActive] = useState('flight')
  const fields = fieldsByTab[active]

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))
    const tabLabel = tabs.find((t) => t.id === active)?.label
    const lines = fields
      .map((f) => (data[f.name] ? `${f.label}: ${data[f.name]}` : null))
      .filter(Boolean)
    const travellers = data.travellers ? `Travellers: ${data.travellers}` : null

    const message = [
      `Hi ${site.name}, I would like a ${tabLabel} enquiry.`,
      '',
      ...lines,
      travellers,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(whatsappLink(site.primaryPhone, message), '_blank', 'noopener')
  }

  return (
    <div className={cn('w-full', className)}>
      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto rounded-t-3xl bg-white/95 p-2 backdrop-blur [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {tabs.map(({ id, label, icon: Icon }) => {
          const isActive = id === active
          return (
            <button
              key={id}
              type="button"
              onClick={() => setActive(id)}
              className={cn(
                'relative flex shrink-0 items-center gap-2 rounded-2xl px-4 py-2.5 text-[13px] font-semibold transition-colors duration-300',
                isActive ? 'text-white' : 'text-navy-500 hover:text-navy-800',
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="booking-tab"
                  className="absolute inset-0 -z-10 rounded-2xl bg-navy-800"
                  transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                />
              )}
              <Icon className="size-4" />
              {label}
            </button>
          )
        })}
      </div>

      {/* Panel */}
      <form
        onSubmit={handleSubmit}
        className="rounded-b-3xl rounded-tr-3xl border border-white/60 bg-white/95 p-4 shadow-[0_30px_80px_-40px_rgba(11,37,69,0.65)] backdrop-blur-xl sm:p-5"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-3 md:grid-cols-2 lg:grid-cols-[repeat(5,minmax(0,1fr))_auto]"
          >
            {fields.map((field) => (
              <div key={field.name}>
                <label className={labelCls} htmlFor={`bw-${field.name}`}>
                  {field.label}
                </label>
                {field.type === 'select' ? (
                  <select id={`bw-${field.name}`} name={field.name} className={cn(controlCls, 'cursor-pointer')}>
                    {field.options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={`bw-${field.name}`}
                    name={field.name}
                    type={field.type || 'text'}
                    placeholder={field.placeholder}
                    className={controlCls}
                  />
                )}
              </div>
            ))}

            <div>
              <label className={labelCls} htmlFor="bw-travellers">
                Travellers
              </label>
              <select id="bw-travellers" name="travellers" className={cn(controlCls, 'cursor-pointer')}>
                <option>1 Adult</option>
                <option>2 Adults</option>
                <option>2 Adults, 1 Child</option>
                <option>4 Adults</option>
                <option>Group (6+)</option>
              </select>
            </div>

            <div className="flex items-end">
              <Button type="submit" variant="primary" size="lg" className="w-full lg:w-auto lg:px-7">
                <Search className="size-4" />
                Search
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="mt-3 text-center text-[11.5px] text-navy-400 lg:text-left">
          Enquiries reach our team instantly on WhatsApp — we reply with real fares, not auto-mails.
        </p>
      </form>
    </div>
  )
}
