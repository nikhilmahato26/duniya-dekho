import { IMG } from './images'

export const testimonials = [
  {
    name: 'Rajesh Sharma',
    city: 'Agra',
    rating: 5,
    text: 'Duniya Dekho Travels ne hamari Kashmir yatra ko yaadgar bana diya. Hotel, cab aur poora plan ekdum smooth tha. Behtareen seva aur sahyog ke liye dhanyavaad!',
    trip: 'Kashmir · 6 Days',
  },
  {
    name: 'Neha Verma',
    city: 'Delhi',
    rating: 5,
    text: 'Goa trip bahut shaandaar raha. Poori team ne bahut accha support kiya — resort beach ke saamne tha aur cruise timing perfect thi. Hum zaroor phir se book karenge.',
    trip: 'Goa · 5 Days',
  },
  {
    name: 'Amit Singh',
    city: 'Lucknow',
    rating: 5,
    text: 'Best travel agency in India! Packages affordable hain aur service excellent hai. Dubai visa bhi inhone hi karwaya, ek din bhi delay nahi hua.',
    trip: 'Dubai · 5 Days',
  },
  {
    name: 'Priya & Karan',
    city: 'Noida',
    rating: 5,
    text: 'We booked our honeymoon to Bali with them. The pool villa, the candlelight dinner, every transfer — handled without us lifting a finger. Genuinely thoughtful planning.',
    trip: 'Bali · 7 Days',
  },
  {
    name: 'Mohd. Irfan',
    city: 'Agra',
    rating: 5,
    text: 'Tatkal ticket aur last-minute flight dono same day arrange kar diye. Raat 11 baje bhi phone uthaya. Yahi asli service hoti hai.',
    trip: 'Flight & Train Booking',
  },
  {
    name: 'Sunita Agarwal',
    city: 'Mathura',
    rating: 5,
    text: 'Char Dham Yatra ke liye humne inhe choose kiya. Elderly parents ke liye har jagah comfortable stay aur pooja arrangement kiya. Bahut dhanyavaad.',
    trip: 'Char Dham · 10 Days',
  },
]

export const videoReviews = [
  {
    id: 'vid-rishab',
    name: 'Mr. Rishab',
    badge: 'Verified Traveller',
    trip: 'Tour Experience & Feedback',
    rating: 5,
    duration: '0:43',
    videoUrl: 'https://res.cloudinary.com/dynbpb9u0/video/upload/v1788882802/WhatsApp_Video_2026-09-06_at_06.05.28_pexwxo.mp4',
    poster: '/reviews/review-rishab.jpg',
    caption: 'Valuable feedback & holiday experience with Duniya Dekho Travels',
  },
  {
    id: 'vid-jeet-singh',
    name: 'Mr. Jeet Singh',
    badge: 'Verified Traveller',
    trip: 'Holiday Package Feedback',
    rating: 5,
    duration: '0:42',
    videoUrl: 'https://res.cloudinary.com/dynbpb9u0/video/upload/v1788882799/WhatsApp_Video_2026-09-06_at_06.03.22_v5zvpf.mp4',
    poster: '/reviews/review-jeet-singh.jpg',
    caption: 'Great feedback on hotel, travel arrangements & smooth execution',
  },
  {
    id: 'vid-jagruti-binita',
    name: 'Jagruti Ben & Binita Ben',
    badge: 'Verified Travellers',
    trip: 'Holiday Tour Experience',
    rating: 5,
    duration: '0:23',
    videoUrl: 'https://res.cloudinary.com/dynbpb9u0/video/upload/v1788882798/WhatsApp_Video_2026-09-06_at_04.31.17_devgus.mp4',
    poster: '/reviews/review-jagruti-binita.jpg',
    caption: 'Wonderful experience & memories with Aapke Safar Ka Sathi',
  },
  {
    id: 'vid-ashish-patel',
    name: 'Mr. Ashish Patel',
    badge: 'Verified Traveller',
    trip: 'Customer Review & Feedback',
    rating: 5,
    duration: '0:27',
    videoUrl: 'https://res.cloudinary.com/dynbpb9u0/video/upload/v1788882797/WhatsApp_Video_2026-09-06_at_04.55.43_rdz62i.mp4',
    poster: '/reviews/review-ashish-patel.jpg',
    caption: 'Sharing heartfelt appreciation for transparent service & support',
  },
]


export const galleryItems = [
  { id: IMG.kashmir, label: 'Kashmir', tag: 'Domestic' },
  { id: IMG.goa, label: 'Goa', tag: 'Domestic' },
  { id: IMG.dubai, label: 'Dubai', tag: 'International' },
  { id: IMG.rajasthan, label: 'Rajasthan', tag: 'Domestic' },
  { id: IMG.kerala, label: 'Kerala', tag: 'Domestic' },
  { id: IMG.manali, label: 'Manali', tag: 'Domestic' },
  { id: IMG.maldives, label: 'Maldives', tag: 'International' },
  { id: IMG.varanasi, label: 'Varanasi', tag: 'Pilgrimage' },
  { id: IMG.bali, label: 'Bali', tag: 'International' },
  { id: IMG.ladakh, label: 'Ladakh', tag: 'Domestic' },
  { id: IMG.singapore, label: 'Singapore', tag: 'International' },
  { id: IMG.agra, label: 'Agra', tag: 'Domestic' },
  { id: IMG.sikkim, label: 'Sikkim', tag: 'Domestic' },
  { id: IMG.thailand, label: 'Thailand', tag: 'International' },
  { id: IMG.andaman, label: 'Andaman', tag: 'Domestic' },
  { id: IMG.switzerland, label: 'Switzerland', tag: 'International' },
  { id: IMG.uttarakhand, label: 'Uttarakhand', tag: 'Pilgrimage' },
  { id: IMG.vietnam, label: 'Vietnam', tag: 'International' },
]

export const galleryFilters = ['All', 'Domestic', 'International', 'Pilgrimage']

export const destinations = [
  { name: 'Kashmir', image: IMG.kashmir, from: 12999, tag: 'Snow & lakes' },
  { name: 'Goa', image: IMG.goa, from: 14999, tag: 'Beaches' },
  { name: 'Kerala', image: IMG.keralaBackwater, from: 16999, tag: 'Backwaters' },
  { name: 'Rajasthan', image: IMG.rajasthan, from: 10999, tag: 'Forts' },
  { name: 'Dubai', image: IMG.dubaiSkyline, from: 49999, tag: 'City break' },
  { name: 'Maldives', image: IMG.maldives, from: 74999, tag: 'Island luxury' },
  { name: 'Ladakh', image: IMG.ladakh, from: 21999, tag: 'Road trip' },
  { name: 'Thailand', image: IMG.thailand, from: 42999, tag: 'Islands' },
]

export const teamValues = [
  {
    title: 'Our Story',
    text: 'Duniya Dekho Travels began in Agra with a simple belief — that a good trip is planned by someone who actually picks up the phone. What started as ticketing for neighbours has grown into full itineraries across India and abroad, still run with the same hands-on care.',
  },
  {
    title: 'Our Mission',
    text: 'To make travel simple, honest and affordable for every Indian family. No hidden charges, no fine print surprises — just a clear itinerary, a fair price and a coordinator who stays reachable from booking to homecoming.',
  },
  {
    title: 'Our Promise',
    text: 'Aapke Safar Ka Sathi is not a tagline for us. Whether it is a Tatkal ticket at midnight or a hotel change mid-trip, someone from our team is on the other end of the line until you are back home safely.',
  },
]

export const bookingTabs = [
  { id: 'flight', label: 'Flight' },
  { id: 'train', label: 'Train' },
  { id: 'hotel', label: 'Hotel' },
  { id: 'bus', label: 'Bus' },
  { id: 'cab', label: 'Cab' },
  { id: 'package', label: 'Tour Packages' },
]
