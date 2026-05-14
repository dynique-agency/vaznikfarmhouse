import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import HeroImage from '../components/HeroImage'

// Animated counter hook
function useCounter(target, suffix = '', decimals = 0) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!inView) return
    let start = 0
    const end = parseFloat(target)
    const duration = 1800
    const step = 16
    const increment = end / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setDisplay(decimals ? end.toFixed(decimals) : end.toString())
        clearInterval(timer)
      } else {
        setDisplay(decimals ? start.toFixed(decimals) : Math.floor(start).toString())
      }
    }, step)
    return () => clearInterval(timer)
  }, [inView, target, decimals])

  return [ref, display + suffix]
}

const bentoTiles = [
  {
    id: 'host',
    label: 'Your Host',
    sub: 'Peter & family',
    bg: 'bg-amber-light',
    accent: '#B86B28',
    large: false,
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    id: 'mountain',
    label: 'The Alps',
    sub: 'Unobstructed valley views',
    bg: 'bg-bled-light',
    accent: '#1A7272',
    large: true,
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path d="M3 20l6-10 4 6 3-4 5 8H3z" />
      </svg>
    ),
  },
  {
    id: 'fire',
    label: 'Open Fire BBQ',
    sub: 'Dining under the stars',
    bg: 'bg-orange-100',
    accent: '#B86B28',
    large: false,
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path d="M12 2c0 4-4 6-4 10a4 4 0 008 0c0-4-4-6-4-10z" />
        <path d="M8 16a4 4 0 008 0" />
      </svg>
    ),
  },
  {
    id: 'animals',
    label: 'Farm Life',
    sub: 'Horses, goats & more',
    bg: 'bg-forest-light',
    accent: '#1A4027',
    large: false,
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path d="M4 16c0-4 2-6 4-6 1 0 2 .5 3 1.5S13 13 14 13c2 0 4 2 4 4v3H4v-4z" />
        <path d="M8 10V6l2-2" /><path d="M14 10V7l2-3" />
      </svg>
    ),
  },
]

const reasons = [
  {
    number: '01',
    title: 'Genuinely exceptional',
    body: 'A 9.4 score on Booking.com isn\'t a marketing claim — it\'s 300+ guests choosing to write about it. The cleanliness, the host, the silence.',
    accent: 'text-amber',
  },
  {
    number: '02',
    title: 'A real working farm',
    body: 'Not a hotel pretending to be rustic. Real animals, real harvests, real mornings. Your children will talk about this for years.',
    accent: 'text-bled',
  },
  {
    number: '03',
    title: 'Perfectly unreachable',
    body: '5.4 km from Bled, yet a world apart. The gate closes at 23:00. The mountain silence is complete. You came here to disconnect.',
    accent: 'text-forest-mid',
  },
]

function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-forest">
      <motion.div style={{ scale }} className="absolute inset-0 w-full h-full">
        <HeroImage className="w-full h-full object-cover" objectPosition="center" priority={true} />
      </motion.div>
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to bottom, rgba(10,25,15,0.2) 0%, rgba(10,25,15,0.08) 35%, rgba(10,25,15,0.55) 70%, rgba(10,25,15,0.85) 100%)'
      }} />

      <motion.div
        style={{ opacity }}
        className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16 max-w-7xl mx-auto"
      >
        <motion.p
          className="text-white/60 text-sm font-light tracking-widest uppercase mb-4"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Bohinjska Bela · Slovenia · 900m
        </motion.p>
        <motion.h1
          className="text-white text-6xl md:text-8xl xl:text-[108px] font-semibold tracking-tightest leading-none mb-5"
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Above<br />everything.
        </motion.h1>
        <motion.p
          className="text-white/70 text-base md:text-lg font-light max-w-md leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          A sanctuary where design disappears into nature. Julian Alps, Slovenia.
        </motion.p>
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link
            to="/practical#reserve"
            className="bg-forest text-white text-sm font-medium px-7 py-3.5 rounded-full hover:bg-forest-mid transition-all duration-300 spring"
          >
            Reserve your stay
          </Link>
          <button
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
            className="text-white/50 text-sm hover:text-white/80 transition-colors duration-300 flex items-center gap-2"
          >
            <span>Explore</span>
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 12 12">
              <path d="M6 2v8M2 7l4 4 4-4" />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}

function StatsSection() {
  const [ref1, v1] = useCounter(900, 'm')
  const [ref2, v2] = useCounter(9.4, '', 1)
  const [ref3, v3] = useCounter(74, ' Mbps')
  const [ref4, v4] = useCounter(5.4, ' km', 1)

  const items = [
    { ref: ref1, value: v1, label: 'Above sea level' },
    { ref: ref2, value: v2, label: 'Booking.com Exceptional' },
    { ref: ref3, value: v3, label: 'Free mountain Wi-Fi' },
    { ref: ref4, value: v4, label: 'From Bled centre' },
  ]

  return (
    <section className="bg-white py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-black/8">
          {items.map((s, i) => (
            <motion.div
              key={s.label}
              ref={s.ref}
              className="px-6 md:px-8 py-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-4xl md:text-5xl xl:text-6xl font-semibold tracking-tightest text-forest mb-2 tabular-nums">
                {s.value}
              </p>
              <p className="text-xs text-titanium uppercase tracking-widest leading-relaxed">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BentoSection() {
  return (
    <section className="bg-alpine py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight-2 text-slate">The essence of Vaznik</h2>
          <p className="text-titanium mt-2 text-base font-light max-w-sm">Four things guests never stop talking about.</p>
        </motion.div>

        {/* Asymmetric grid: left column tall + right column 3 stacked */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {/* Large card — The Alps */}
          <motion.div
            className="row-span-2 md:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
          >
            <Link to="/experience" className="block rounded-squircle bg-bled-light h-full min-h-[280px] md:min-h-[380px] p-7 flex flex-col justify-between">
              <span style={{ color: '#1A7272' }}>
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                  <path d="M3 20l6-10 4 6 3-4 5 8H3z" />
                </svg>
              </span>
              <div>
                <p className="font-semibold text-slate text-lg md:text-xl tracking-tight-2">The Alps</p>
                <p className="text-xs text-titanium mt-1">Unobstructed valley views from every terrace</p>
              </div>
            </Link>
          </motion.div>

          {/* 3 smaller cards */}
          {[bentoTiles[0], bentoTiles[2], bentoTiles[3]].map((tile, i) => (
            <motion.div
              key={tile.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 1) * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.3 } }}
            >
              <Link to="/experience" className={`block rounded-squircle ${tile.bg} p-6 h-full min-h-[120px] md:min-h-[114px] flex flex-col justify-between`}>
                <span style={{ color: tile.accent }}>{tile.icon}</span>
                <div>
                  <p className="font-medium text-slate text-sm">{tile.label}</p>
                  <p className="text-xs text-titanium mt-0.5">{tile.sub}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ReasonsSection() {
  return (
    <section className="bg-forest py-24 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-white/40 text-xs uppercase tracking-widest mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Why Vaznik
        </motion.p>
        <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-squircle overflow-hidden">
          {reasons.map((r, i) => (
            <motion.div
              key={r.number}
              className="bg-forest p-8 md:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className={`text-sm font-semibold ${r.accent} mb-5`}>{r.number}</p>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight-2 text-white mb-3">{r.title}</h3>
              <p className="text-white/50 text-sm font-light leading-relaxed">{r.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialSection() {
  const reviews = [
    { quote: 'This is not a stay, this is a reset. The silence here is absolutely priceless.', author: 'Verified guest · May 2025' },
    { quote: 'Peter is the most genuine host we have ever had. We came back twice in one year.', author: 'Verified guest · Aug 2025' },
  ]
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % reviews.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="bg-white py-28 md:py-40 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#B86B28">
                <path d="M8 1l1.8 3.6 4 .6-2.9 2.8.7 4L8 10l-3.6 2 .7-4L2.2 5.2l4-.6z" />
              </svg>
            ))}
          </div>

          <div className="relative min-h-[100px] flex items-center justify-center">
            {reviews.map((r, i) => (
              <motion.blockquote
                key={i}
                className="absolute text-slate text-2xl md:text-3xl xl:text-4xl font-light leading-snug tracking-tight-3 px-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: active === i ? 1 : 0, y: active === i ? 0 : 10 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                "{r.quote}"
              </motion.blockquote>
            ))}
          </div>

          <p className="text-titanium text-sm mt-16">
            {reviews[active].author}
          </p>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${active === i ? 'bg-forest w-4' : 'bg-black/20'}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="bg-forest-light py-20 md:py-28 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight-2 text-slate mb-4">Ready to ascend?</h2>
        <p className="text-titanium text-base font-light leading-relaxed mb-10">
          Only a handful of apartments available. Check dates and reserve directly.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/practical#reserve"
            className="bg-forest text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-forest-mid transition-all duration-300 spring w-full sm:w-auto"
          >
            Request a reservation
          </Link>
          <Link
            to="/accommodations"
            className="text-slate text-sm font-medium px-8 py-4 rounded-full border border-black/15 hover:bg-black/5 transition-all duration-300 spring w-full sm:w-auto"
          >
            View apartments
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <BentoSection />
      <ReasonsSection />
      <TestimonialSection />
      <CTASection />
    </main>
  )
}
