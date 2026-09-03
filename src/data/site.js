import {
  Plane, TrainFront, Hotel, Bus, Car, FileCheck2, Palmtree,
} from 'lucide-react'

export const site = {
  name: 'Duniya Dekho Travels',
  tagline: 'Aapke Safar Ka Sathi',
  promise: 'Explore India • Explore World',
  email: 'duniyadekhotravelsofficial@gmail.com',
  phones: ['9690892922', '8126748820', '6398151989'],
  primaryPhone: '9690892922',
  address:
    'Near Silverline School, Ukharra Road, Rajpur Chungi, Agra, Uttar Pradesh, India - 282001',
  shortAddress: 'Rajpur Chungi, Agra, U.P. — 282001',
  city: 'Agra Office',
  mapQuery: 'Silverline School Ukharra Road Rajpur Chungi Agra Uttar Pradesh 282001',
  hours: 'Mon – Sun · 9:00 AM – 9:00 PM',
  socials: {
    instagram: 'https://www.instagram.com/duniya_dekho_travels',
    facebook: 'https://www.facebook.com/share/17zAi61wHA/',
  },
}

export const navLinks = [
  { label: 'Home', to: '/' },
  {
    label: 'Tour Packages',
    to: '/tour-packages',
    children: [
      { label: 'Domestic Packages', to: '/tour-packages?type=domestic' },
      { label: 'International Packages', to: '/tour-packages?type=international' },
      { label: 'Honeymoon Specials', to: '/tour-packages?type=honeymoon' },
      { label: 'Pilgrimage Yatra', to: '/tour-packages?type=pilgrimage' },
    ],
  },
  {
    label: 'Booking Services',
    to: '/booking-services',
    children: [
      { label: 'Flight Booking', to: '/booking-services#flight-booking' },
      { label: 'Train Booking', to: '/booking-services#train-booking' },
      { label: 'Hotel Booking', to: '/booking-services#hotel-booking' },
      { label: 'Bus & Cab Booking', to: '/booking-services#cab-booking' },
      { label: 'Visa Assistance', to: '/booking-services#visa-assistance' },
    ],
  },
  { label: 'Customized Tour', to: '/customized-tour' },
  { label: 'About Us', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact Us', to: '/contact' },
]

export const services = [
  {
    id: 'flight-booking',
    icon: Plane,
    title: 'Flight Booking',
    short: 'Domestic & international air tickets at the best fare of the day.',
    description:
      'Compare airlines, grab special agent fares and get instant e-tickets on WhatsApp. We handle date changes, cancellations and web check-in for you — no hold music, just a phone call.',
    points: ['Best fare search across airlines', 'Group & family bookings', 'Reschedule and refund support', 'Web check-in assistance'],
  },
  {
    id: 'train-booking',
    icon: TrainFront,
    title: 'Train Booking',
    short: 'Confirmed IRCTC tickets, tatkal support and berth preferences.',
    description:
      'From Tatkal rush to long-route sleeper plans, we book fast and keep you posted on PNR status until your seat is confirmed.',
    points: ['Tatkal & general quota', 'PNR status tracking', 'Berth preference handling', 'Group travel planning'],
  },
  {
    id: 'hotel-booking',
    icon: Hotel,
    title: 'Hotel Booking',
    short: 'Budget stays to 5-star resorts, verified and negotiated.',
    description:
      'We book only properties we would send our own family to — verified rooms, honest photos and negotiated rates with free cancellation wherever possible.',
    points: ['Verified & hand-picked stays', 'Negotiated agent rates', 'Free cancellation options', 'Homestays & resorts'],
  },
  {
    id: 'bus-booking',
    icon: Bus,
    title: 'Bus Booking',
    short: 'AC sleeper, Volvo and tempo traveller seats across India.',
    description:
      'Overnight Volvo, AC sleeper or a full tempo traveller for the whole group — booked with trusted operators and live seat maps.',
    points: ['Volvo & AC sleeper', 'Tempo traveller hire', 'Trusted operators only', 'Live seat selection'],
  },
  {
    id: 'cab-booking',
    icon: Car,
    title: 'Cab Booking',
    short: 'Airport transfers, outstation cabs and full-day sightseeing.',
    description:
      'Clean cars, verified drivers and transparent per-km pricing for Agra sightseeing, Delhi airport transfers and outstation routes.',
    points: ['Airport pick & drop', 'Outstation one-way / round trip', 'Agra sightseeing packages', 'Verified drivers'],
  },
  {
    id: 'visa-assistance',
    icon: FileCheck2,
    title: 'Visa Assistance',
    short: 'Documentation, appointments and end-to-end visa filing.',
    description:
      'Tourist, business and student visa support — we prepare the file, check every document and book your appointment so applications do not get rejected on paperwork.',
    points: ['Document checklist & review', 'Appointment scheduling', 'Tourist / business / student', 'Travel insurance & forex help'],
  },
  {
    id: 'tour-packages',
    icon: Palmtree,
    title: 'Tour Packages',
    short: 'Ready-made and custom itineraries, India and worldwide.',
    description:
      'Handcrafted itineraries with stays, transfers, sightseeing and meals bundled at one honest price — or tell us your dates and we design it around you.',
    points: ['Domestic & international', 'Honeymoon & family specials', 'Group departures', 'Fully customised plans'],
  },
]

export const whyChooseUs = [
  { title: 'Trusted Travel Partner', text: 'Thousands of happy journeys planned from our Agra office with the same personal care every single time.' },
  { title: 'Best Price & Best Deals', text: 'Direct operator tie-ups and agent fares mean you pay for the trip, never for the middleman.' },
  { title: '24×7 Customer Support', text: 'A real human on the phone at 2 AM if a flight shifts or a plan changes mid-trip.' },
  { title: 'Safe & Comfortable Travel', text: 'Verified hotels, sanitised cabs and vetted drivers on every route we sell.' },
  { title: 'Customized Tour Packages', text: 'Your dates, your budget, your pace — the itinerary is built around you, not a brochure.' },
  { title: '100% Customer Satisfaction', text: 'Transparent pricing, no hidden charges and a written itinerary before you pay a rupee.' },
]

export const stats = [
  { value: 12000, suffix: '+', label: 'Happy Travellers' },
  { value: 150, suffix: '+', label: 'Destinations Covered' },
  { value: 40, suffix: '+', label: 'Curated Packages' },
  { value: 24, suffix: '×7', label: 'Support On Call' },
]

export const processSteps = [
  { step: '01', title: 'Tell us your plan', text: 'Share destination, dates, budget and who is travelling — on call or WhatsApp.' },
  { step: '02', title: 'Get a custom quote', text: 'We design a day-by-day itinerary with stays, transfers and inclusions priced honestly.' },
  { step: '03', title: 'Confirm & relax', text: 'Pay securely, get vouchers on WhatsApp and let us handle every booking detail.' },
  { step: '04', title: 'Travel with support', text: 'A dedicated coordinator stays reachable through the entire journey.' },
]

export const faqs = [
  {
    q: 'How do I book a tour package with Duniya Dekho Travels?',
    a: 'Call or WhatsApp us on 9690892922 with your destination and travel dates. We share a day-by-day itinerary with pricing, and once you approve it a booking amount confirms your seats and stays.',
  },
  {
    q: 'Are the package prices per person?',
    a: 'Yes. All listed prices are per person on a double-sharing basis and cover stays, transfers and the sightseeing mentioned in the itinerary. Flights and personal expenses are quoted separately unless stated.',
  },
  {
    q: 'Can you customise an existing package?',
    a: 'Absolutely — that is our speciality. Add days, upgrade hotels, change the route or build something completely new. Use the Customized Tour page and we will revert with a plan within 24 hours.',
  },
  {
    q: 'Do you handle international visas?',
    a: 'Yes. We assist with tourist, business and student visa documentation, appointment booking and form filing for most popular destinations including UAE, Thailand, Singapore and Schengen countries.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'UPI, bank transfer, cards and cash at our Agra office. You receive a written confirmation and payment receipt for every transaction.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Cancellation charges depend on the airline, hotel and operator policies applicable to your booking. We share the exact policy in writing along with your itinerary before you pay.',
  },
]
