# Duniya Dekho Travels — Website

Marketing website for **Duniya Dekho Travels** (Agra), built with React + Vite.
_Aapke Safar Ka Sathi — Explore India. Explore World._

## Tech stack

| Concern            | Library                                   |
| ------------------ | ----------------------------------------- |
| Build / dev server | Vite 7 + React 19                         |
| Styling            | Tailwind CSS v4 (`@tailwindcss/vite`)     |
| UI primitives      | shadcn-style components on Radix UI       |
| Animation          | Framer Motion (entrances, layout, modals) |
| Scroll animation   | GSAP + ScrollTrigger (parallax)           |
| Smooth scroll      | Lenis                                     |
| Carousels          | Embla Carousel (+ autoplay)               |
| Icons              | Lucide React + React Icons                |
| Routing            | React Router v7                           |

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  components/
    ui/         shadcn-style primitives (button, card, input, accordion, sheet, badge)
    common/     shared blocks (Reveal, SectionHeading, PackageCard, Carousel, PageHero…)
    layout/     Navbar, TopBar, Footer, FloatingActions, ScrollProgress, RouteChrome
    home/       home-page sections (Hero, BookingWidget, PopularPackages, …) reused on inner pages
  data/         all editable content — the only files a non-developer needs to touch
  hooks/        useSmoothScroll (Lenis + ScrollTrigger), useGsapParallax, useCountUp
  pages/        one file per route
  lib/utils.js  cn(), formatINR(), whatsappLink()
```

## Editing content

Everything the client can change lives in `src/data/`:

| File         | Contains                                                                    |
| ------------ | --------------------------------------------------------------------------- |
| `site.js`    | Phones, email, address, nav links, services, "why choose us", stats, FAQs    |
| `packages.js`| Tour packages — price, itinerary, inclusions, badges, filters                |
| `content.js` | Testimonials, gallery items, trending destinations, about-page copy          |
| `images.js`  | Every photo used on the site (see below)                                     |

### Swapping the photography

`src/data/images.js` is the single image bank. Photos currently come from Unsplash via
the `photo(id, { w, h, q })` helper, which requests a correctly sized, auto-formatted
image. To use the client's own photos instead, drop the files into `public/` and replace
the entries, e.g. `kashmir: '/photos/kashmir.jpg'`, then simplify `photo()` to return the
path unchanged. Nothing else in the codebase needs to change.

The logo lives at `public/logo.png` and is used in the header, footer, favicon and loader.

### Numbers to confirm before launch

The stat band (`stats` in `site.js`: 12,000+ travellers, 150+ destinations, 40+ packages)
and the review counts / ratings on each package are **placeholders modelled on the
approved design**. Replace them with the real figures before going live.

## Enquiry handling

There is no backend. Every form (hero search, customised tour, contact) composes a
formatted message and opens it in WhatsApp on `site.primaryPhone`, with an "Email
instead" fallback to `site.email`. To move to a real backend later, replace the
`window.open(whatsappLink(...))` call in each form's `handleSubmit` with a `fetch` POST.

## Notes

- Smooth scrolling, parallax and all entrance animations are disabled automatically when
  the visitor has "reduce motion" enabled.
- Routes are code-split; only the home page ships in the initial bundle.
- Deploy `dist/` to any static host. For SPA routing, configure the host to rewrite all
  paths to `/index.html` (Netlify: `/* /index.html 200`; Vercel handles this by default).
