import { useState } from 'react'
import { motion } from 'framer-motion'

const rules = [
  { label: 'Check-in', value: '14:00 – 18:00', note: 'Contact us in advance for late arrivals.' },
  { label: 'Check-out', value: '08:00 – 10:30', note: null },
  { label: 'Night quiet hours', value: '23:00 – 07:00', note: 'Gate is closed to preserve the mountain stillness.' },
  { label: 'Security deposit', value: '€100 cash', note: 'Fully refundable at check-out.' },
  { label: 'Payments', value: 'Via Booking.com', note: 'Carry cash for local extras and the deposit.' },
  { label: 'Smoking', value: 'Outdoor areas only', note: null },
]

function RoadSection() {
  return (
    <section className="relative h-[55vh] md:h-[70vh] overflow-hidden bg-forest flex items-end">
      {/* Real photo */}
      <div className="absolute inset-0">
        <img
          src="/outside.png"
          alt="Vaznik Farm House approach"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(10,25,15,0.15) 0%, rgba(10,25,15,0.45) 60%, rgba(10,25,15,0.85) 100%)'
        }} />
      </div>

      <div className="relative px-6 md:px-16 pb-14 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-white/50 text-xs uppercase tracking-widest mb-3">The approach</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tightest text-white leading-none max-w-2xl">
            The road up is an attraction in itself.
          </h1>
          <p className="text-white/60 text-sm md:text-base font-light mt-4 max-w-md leading-relaxed">
            A brand-new winding asphalt road winds through ancient forest straight to our gate.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function LocationSection() {
  return (
    <section className="bg-white py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-titanium text-xs uppercase tracking-widest mb-4">Find us</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight-2 text-slate mb-6">
            Location & getting here
          </h2>

          <div className="space-y-5">
            {[
              {
                icon: (
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                ),
                label: 'Address',
                value: 'Slamniki 4, 4263 Bohinjska Bela, Slovenia',
              },
              {
                icon: (
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                ),
                label: 'From Bled',
                value: '5.4 km · approx. 12 minutes by car',
              },
              {
                icon: (
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path d="M9 22V12h6v10" />
                  </svg>
                ),
                label: 'From Ljubljana Airport',
                value: '60 km · approx. 55 minutes',
              },
              {
                icon: (
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                ),
                label: 'Shuttle service',
                value: 'Airport & local transfers available (additional charge)',
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <span className="text-titanium mt-0.5 flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="text-xs text-titanium uppercase tracking-widest mb-0.5">{item.label}</p>
                  <p className="text-sm text-slate/80">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Map placeholder */}
        <motion.div
          className="rounded-squircle bg-forest-light h-72 md:h-96 overflow-hidden relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Stylised topographic map feel */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#EBF2EC" />
            {[...Array(8)].map((_, i) => (
              <ellipse
                key={i}
                cx="200"
                cy="160"
                rx={40 + i * 22}
                ry={25 + i * 14}
                stroke="rgba(134,134,139,0.15)"
                strokeWidth="1"
                fill="none"
              />
            ))}
            <path d="M60 260 Q160 200 200 160 Q240 120 340 80" stroke="rgba(134,134,139,0.4)" strokeWidth="2" fill="none" />
            <circle cx="200" cy="160" r="8" fill="#1D1D1F" />
            <circle cx="200" cy="160" r="4" fill="white" />
            <text x="214" y="155" fontSize="10" fill="#1D1D1F" fontFamily="Inter, sans-serif" fontWeight="500">Vaznik</text>
          </svg>

          <div className="absolute bottom-4 left-4">
            <a
              href="https://maps.google.com/?q=Slamniki+4,+4263+Bohinjska+Bela,+Slovenia"
              target="_blank"
              rel="noopener noreferrer"
              className="glass text-xs text-slate font-medium px-4 py-2 rounded-full hover:bg-white/60 transition-all duration-300 spring inline-block"
            >
              Open in Google Maps →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function RulesSection() {
  return (
    <section className="bg-forest-light py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-titanium text-xs uppercase tracking-widest mb-4">House rules</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight-2 text-slate">
            What to expect.
          </h2>
        </motion.div>

        <div className="divide-y divide-black/6">
          {rules.map((rule, i) => (
            <motion.div
              key={rule.label}
              className="flex flex-col sm:flex-row sm:items-center justify-between py-5 gap-1"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-xs text-titanium uppercase tracking-widest w-36 flex-shrink-0">{rule.label}</span>
              <span className="text-base font-medium text-slate flex-1">{rule.value}</span>
              {rule.note && <span className="text-xs text-titanium max-w-xs text-right hidden sm:block">{rule.note}</span>}
              {rule.note && <span className="text-xs text-titanium mt-0.5 sm:hidden">{rule.note}</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ReservationSection() {
  const [form, setForm] = useState({
    name: '', email: '', checkin: '', checkout: '',
    guests: '2', apartment: '', message: ''
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.name && form.email && form.checkin && form.checkout) {
      // Compose mailto with form data
      const subject = encodeURIComponent(`Reservation request — ${form.checkin} to ${form.checkout}`)
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nCheck-in: ${form.checkin}\nCheck-out: ${form.checkout}\nGuests: ${form.guests}\nApartment: ${form.apartment || 'No preference'}\n\nMessage:\n${form.message}`
      )
      window.open(`mailto:info@vaznikfarmhouse.com?subject=${subject}&body=${body}`)
      setSent(true)
    }
  }

  return (
    <section id="reserve" className="bg-forest py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Reserve your stay</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight-2 text-white mb-2">
            Request a reservation.
          </h2>
          <p className="text-white/50 text-sm font-light mb-10">
            Peter personally confirms every booking within 24 hours.
          </p>

          {sent ? (
            <motion.div
              className="rounded-squircle bg-white/8 p-12 text-center"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-12 h-12 rounded-full bg-amber/20 flex items-center justify-center mx-auto mb-5">
                <svg width="22" height="22" fill="none" stroke="#B86B28" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-2xl font-semibold tracking-tight-2 text-white mb-2">Request sent.</p>
              <p className="text-white/50 text-sm font-light">Peter will confirm your dates within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-0">
              <div className="rounded-squircle overflow-hidden border border-white/10 divide-y divide-white/10">

                {/* Row 1: Name + Email */}
                <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                  {[
                    { name: 'name', label: 'Full name', type: 'text', placeholder: 'Your name' },
                    { name: 'email', label: 'Email address', type: 'email', placeholder: 'your@email.com' },
                  ].map(f => (
                    <div key={f.name} className="bg-white/5 hover:bg-white/8 transition-colors duration-200 px-6 py-5">
                      <label className="block text-[10px] text-white/40 uppercase tracking-widest mb-1.5">{f.label}</label>
                      <input
                        type={f.type}
                        name={f.name}
                        value={form[f.name]}
                        onChange={handleChange}
                        placeholder={f.placeholder}
                        required
                        className="w-full bg-transparent text-white placeholder-white/25 text-sm outline-none"
                      />
                    </div>
                  ))}
                </div>

                {/* Row 2: Check-in + Check-out */}
                <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                  {[
                    { name: 'checkin', label: 'Check-in' },
                    { name: 'checkout', label: 'Check-out' },
                  ].map(f => (
                    <div key={f.name} className="bg-white/5 hover:bg-white/8 transition-colors duration-200 px-6 py-5">
                      <label className="block text-[10px] text-white/40 uppercase tracking-widest mb-1.5">{f.label}</label>
                      <input
                        type="date"
                        name={f.name}
                        value={form[f.name]}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent text-white text-sm outline-none [color-scheme:dark]"
                      />
                    </div>
                  ))}
                </div>

                {/* Row 3: Guests + Apartment */}
                <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                  <div className="bg-white/5 hover:bg-white/8 transition-colors duration-200 px-6 py-5">
                    <label className="block text-[10px] text-white/40 uppercase tracking-widest mb-1.5">Guests</label>
                    <select
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className="w-full bg-transparent text-white text-sm outline-none"
                    >
                      {[1,2,3,4,5,6,7,8].map(n => (
                        <option key={n} value={n} className="bg-forest text-white">{n} {n === 1 ? 'guest' : 'guests'}</option>
                      ))}
                    </select>
                  </div>
                  <div className="bg-white/5 hover:bg-white/8 transition-colors duration-200 px-6 py-5">
                    <label className="block text-[10px] text-white/40 uppercase tracking-widest mb-1.5">Apartment</label>
                    <select
                      name="apartment"
                      value={form.apartment}
                      onChange={handleChange}
                      className="w-full bg-transparent text-white text-sm outline-none"
                    >
                      <option value="" className="bg-forest text-white">No preference</option>
                      <option value="Forest Suite" className="bg-forest text-white">Forest Suite — 55m²</option>
                      <option value="Alpine Panorama" className="bg-forest text-white">Alpine Panorama — 65m²</option>
                      <option value="Meadow Retreat" className="bg-forest text-white">Meadow Retreat — 48m²</option>
                      <option value="Summit Loft" className="bg-forest text-white">Summit Loft — 72m²</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Message */}
                <div className="bg-white/5 hover:bg-white/8 transition-colors duration-200 px-6 py-5">
                  <label className="block text-[10px] text-white/40 uppercase tracking-widest mb-1.5">Special requests</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Allergies, arrival time, celebrations…"
                    rows={3}
                    className="w-full bg-transparent text-white placeholder-white/25 text-sm outline-none resize-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <motion.button
                  type="submit"
                  className="bg-amber text-white text-sm font-semibold px-10 py-4 rounded-full hover:opacity-90 transition-all duration-300 spring"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send reservation request →
                </motion.button>
                <p className="text-white/30 text-xs">No payment needed now. Peter confirms within 24h.</p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default function Practical() {
  return (
    <main>
      <RoadSection />
      <LocationSection />
      <RulesSection />
      <ReservationSection />
    </main>
  )
}
