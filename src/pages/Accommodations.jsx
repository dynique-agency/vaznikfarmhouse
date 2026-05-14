import { useRef } from 'react'
import { motion } from 'framer-motion'
import HeroImage from '../components/HeroImage'

const apartments = [
  {
    id: 1,
    name: 'Forest Suite',
    tagline: 'Canopy views, pure silence.',
    size: '55 m²',
    guests: 'Up to 4 guests',
    bg: 'from-[#2D6040] to-[#1A4027]',
    textLight: true,
    accent: '#7EC99A',
    features: ['Full equipped kitchen with dining area', 'Private bathroom with shower', 'Living room with seating area', 'Forest-view balcony', 'Individual heating control'],
  },
  {
    id: 2,
    name: 'Alpine Panorama',
    tagline: 'Unbroken valley horizon.',
    size: '65 m²',
    guests: 'Up to 5 guests',
    bg: 'from-[#1A7272] to-[#0F4F4F]',
    textLight: true,
    accent: '#7ECFCF',
    features: ['Full equipped kitchen with dining area', 'Private bathroom with shower & free toiletries', 'Spacious living room with cable TV', 'Terrace with panoramic mountain view', 'Individual heating control'],
  },
  {
    id: 3,
    name: 'Meadow Retreat',
    tagline: 'Wake to birdsong and open sky.',
    size: '48 m²',
    guests: 'Up to 3 guests',
    bg: 'from-[#EBF2EC] to-[#D4E8D6]',
    textLight: false,
    accent: '#1A4027',
    features: ['Kitchenette with dining area', 'Private bathroom with shower', 'Cosy living nook', 'Garden-level terrace', 'Smoke detectors & safe'],
  },
  {
    id: 4,
    name: 'Summit Loft',
    tagline: 'Highest point, highest comfort.',
    size: '72 m²',
    guests: 'Up to 6 guests',
    bg: 'from-[#B86B28] to-[#7A4418]',
    textLight: true,
    accent: '#FFD4A0',
    features: ['Full equipped kitchen with dining area', 'Two private bathrooms', 'Large living room with cable TV', 'Wraparound panoramic balcony', 'Individual heating control & fireplace'],
  },
]

const amenityIcons = [
  {
    label: 'Linens & Towels — high-temp washed',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M3 10h18" />
      </svg>
    ),
  },
  {
    label: 'Daily antiviral cleaning',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path d="M12 2l2 7h7l-5.7 4.1 2.2 6.9L12 16l-5.5 4 2.2-6.9L3 9h7z" />
      </svg>
    ),
  },
  {
    label: 'Free private parking',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M9 17V7h4a3 3 0 010 6H9" />
      </svg>
    ),
  },
  {
    label: 'Pets welcome on request',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path d="M8 3c.5 1.5 0 3-1 4M16 3c-.5 1.5 0 3 1 4M5 10c0-1 .7-2 2-2 2 0 3 2.5 5 2.5S14 8 16 8c1.3 0 2 1 2 2 0 4-3 8-6 8s-7-4-7-8z" />
      </svg>
    ),
  },
  {
    label: '74 Mbps Wi-Fi throughout',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path d="M5 12.5a9.97 9.97 0 0114 0M1.5 9a14.97 14.97 0 0121 0M9 16a4.97 4.97 0 016 0" />
        <circle cx="12" cy="19" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Smoke detectors & fire safety',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
  },
]

function ApartmentCard({ apt, index }) {
  return (
    <motion.div
      className="scroll-snap-start flex-shrink-0 w-[80vw] md:w-[44vw] lg:w-[36vw] max-w-lg"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="rounded-squircle overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-500 h-full">
        {/* Visual */}
        <div className={`h-52 md:h-64 bg-gradient-to-br ${apt.bg} relative flex items-end p-6`}>
          <div className={`rounded-squircle2 px-4 py-2 inline-flex items-center gap-2 ${apt.textLight ? 'bg-white/20 backdrop-blur-sm' : 'glass'}`}>
            <span className={`text-xs font-medium ${apt.textLight ? 'text-white' : 'text-slate'}`}>{apt.size}</span>
            <span className={`text-xs ${apt.textLight ? 'text-white/60' : 'text-titanium'}`}>·</span>
            <span className={`text-xs ${apt.textLight ? 'text-white/80' : 'text-titanium'}`}>{apt.guests}</span>
          </div>
        </div>

        {/* Info */}
        <div className="p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight-2 text-slate">{apt.name}</h3>
          <p className="text-titanium text-sm mt-1 mb-5">{apt.tagline}</p>
          <ul className="space-y-2.5">
            {apt.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-slate/80">
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: apt.accent }} />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default function Accommodations() {
  const scrollRef = useRef(null)

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' })
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' })

  return (
    <main>
      {/* Cinematic header with real photo */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden bg-forest">
        <HeroImage className="w-full h-full object-cover" objectPosition="center" priority={true} />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(10,25,15,0.1) 0%, rgba(10,25,15,0.35) 55%, rgba(10,25,15,0.80) 100%)'
        }} />
        <motion.div
          className="absolute inset-0 flex flex-col justify-end pb-12 px-6 md:px-12 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-white/60 text-xs uppercase tracking-widest mb-3">Your sanctuary</p>
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tightest text-white leading-none max-w-2xl">
            Space to breathe.
          </h1>
          <p className="text-white/70 text-base font-light mt-4 max-w-lg leading-relaxed">
            Apartments designed for comfort, with uninterrupted views across the valley.
          </p>
        </motion.div>
      </section>

      {/* Horizontal scroll */}
      <section className="relative py-8">
        {/* Navigation arrows */}
        <div className="hidden md:flex absolute right-6 top-0 gap-2 z-10 pr-1">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors duration-300"
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 14 14">
              <path d="M8 2L3 7l5 5" />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors duration-300"
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 14 14">
              <path d="M6 2l5 5-5 5" />
            </svg>
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-snap-x no-scrollbar px-6 pb-4"
          style={{ paddingRight: '24px' }}
        >
          {apartments.map((apt, i) => (
            <ApartmentCard key={apt.id} apt={apt} index={i} />
          ))}
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight-2 text-slate">
              Every stay includes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {amenityIcons.map((a, i) => (
              <motion.div
                key={a.label}
                className="flex items-center gap-4 p-5 rounded-squircle2 bg-forest-light hover:bg-[#D4E8D6] transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-titanium flex-shrink-0">{a.icon}</span>
                <span className="text-sm text-slate/80">{a.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 text-center bg-forest-light">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight-2 text-slate mb-4">
            Your perfect apartment awaits.
          </h2>
          <p className="text-titanium mb-8 font-light">Check real-time availability and book with confidence.</p>
          <a
            href="https://www.booking.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-forest text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-forest-mid transition-all duration-300 spring"
          >
            Book on Booking.com
          </a>
        </motion.div>
      </section>
    </main>
  )
}
