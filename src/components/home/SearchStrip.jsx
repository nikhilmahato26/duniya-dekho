import { BookingWidget } from './BookingWidget'

/** Lifts the search panel over the hero edge without absolute positioning. */
export function SearchStrip() {
  return (
    <section className="relative z-30 -mt-14 lg:-mt-20">
      <div className="container-page">
        <BookingWidget />
      </div>
    </section>
  )
}
