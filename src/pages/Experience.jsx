import { motion } from 'framer-motion'

const lifestyle = [
  {
    id: 'host',
    tag: 'Hospitality',
    title: 'Meet Peter & family.',
    body: 'Local tips, hidden hiking trails, and a warmth of welcome that has no equal. Peter and his family are the true heart of Vaznik.',
    bg: 'from-[#FDF0E4] to-[#FAE0C4]',
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <circle cx="9" cy="7" r="3" /><circle cx="16" cy="9" r="2.5" />
        <path d="M1 20c0-3.3 3-6 7-6s7 2.7 7 6" /><path d="M15 20c0-2 1.3-3.7 4-5" />
      </svg>
    ),
  },
  {
    id: 'animals',
    tag: 'Farm life',
    title: 'Wake with our animals.',
    body: 'Horses, goats, cows, rabbits, dogs and cats roam freely. A genuine working farm that reconnects guests with the natural world.',
    bg: 'from-[#EBF2EC] to-[#C8DFC9]',
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path d="M4 17c0-4 2.5-6 5-6 1 0 2 .5 3 1.5S14 14 15 14c2.5 0 5 2 5 4v2H4v-3z" />
        <path d="M9 11V6l2-2" /><path d="M15 11V7l2-3" />
      </svg>
    ),
  },
  {
    id: 'kids',
    tag: 'For children',
    title: 'Freedom to explore.',
    body: 'A custom-built treehouse, dedicated playground, and safe open space. Children discover what unstructured outdoor freedom truly feels like.',
    bg: 'from-[#E6F4F4] to-[#BDE4E4]',
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <rect x="8" y="3" width="8" height="6" rx="1" />
        <path d="M12 9v5M8 14h8" />
        <path d="M5 21v-4a4 4 0 014-4h6a4 4 0 014 4v4" />
      </svg>
    ),
  },
  {
    id: 'fire',
    tag: 'Evening ritual',
    title: 'Dinner under the stars.',
    body: 'An extensive BBQ area and outdoor firepit for long summer evenings. The smell of wood smoke, the valley below, no phone signal needed.',
    bg: 'from-[#FDF0E4] to-[#F5D4A8]',
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path d="M12 2c0 4-4 6-4 10a4 4 0 008 0c0-4-4-6-4-10z" />
        <path d="M9 21h6" /><path d="M12 17v4" />
      </svg>
    ),
  },
]

const activities = [
  { label: 'Hiking & trail running', icon: '⛰' },
  { label: 'Mountain biking', icon: '🚵' },
  { label: 'Winter sledding & snowboarding', icon: '🏂' },
  { label: 'Table tennis on-site', icon: '🏓' },
  { label: 'Indoor games room', icon: '🎲' },
  { label: 'Bled lake swimming (5.4 km)', icon: '🏊' },
  { label: 'Triglav National Park day hikes', icon: '🗺' },
  { label: 'Forest foraging walks', icon: '🍄' },
]

function LifestyleCard({ item, index }) {
  return (
    <motion.div
      className={`rounded-squircle overflow-hidden bg-gradient-to-br ${item.bg} p-8 md:p-10`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
    >
      <span className="text-titanium opacity-70">{item.icon}</span>
      <p className="text-xs uppercase tracking-widest text-titanium mt-5 mb-2">{item.tag}</p>
      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight-2 text-slate mb-3">{item.title}</h3>
      <p className="text-sm text-slate/70 font-light leading-relaxed max-w-xs">{item.body}</p>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <main>
      {/* Cinematic header with real photo */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden bg-forest">
        <img
          src="/outside.png"
          alt="Vaznik Farm House"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(10,25,15,0.05) 0%, rgba(10,25,15,0.3) 50%, rgba(10,25,15,0.82) 100%)'
        }} />
        <motion.div
          className="absolute inset-0 flex flex-col justify-end pb-12 px-6 md:px-12 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-white/60 text-xs uppercase tracking-widest mb-3">More than accommodation</p>
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tightest text-white leading-none max-w-3xl">
            The Vaznik way of life.
          </h1>
          <p className="text-white/70 text-base font-light mt-4 max-w-lg leading-relaxed">
            An active working farm. An extraordinary natural setting. A family who genuinely cares.
          </p>
        </motion.div>
      </section>

      {/* Lifestyle grid */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {lifestyle.map((item, i) => (
            <LifestyleCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* Activities */}
      <section className="bg-forest py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Beyond the gate</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight-2 text-white">
              Activities all year round.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {activities.map((a, i) => (
              <motion.div
                key={a.label}
                className="flex items-center gap-3 bg-white/8 hover:bg-white/12 transition-colors duration-300 rounded-squircle2 px-5 py-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-xl">{a.icon}</span>
                <span className="text-sm text-white/70">{a.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasons */}
      <section className="bg-forest-light py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-titanium text-xs uppercase tracking-widest mb-4">All four seasons</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight-2 text-slate mb-5">
              Spectacular in every light.
            </h2>
            <div className="space-y-4">
              {[
                { s: 'Spring', d: 'Wildflowers in the alpine meadows, crystal meltwater streams.' },
                { s: 'Summer', d: 'Long golden evenings, BBQ nights, hiking in the Julian Alps.' },
                { s: 'Autumn', d: 'A tapestry of amber and crimson across the forested valley.' },
                { s: 'Winter', d: 'Snow-covered silence. Sledding on the hillside. Log fire inside.' },
              ].map((item) => (
                <div key={item.s} className="flex gap-4 items-start">
                  <span className="text-xs font-medium text-titanium uppercase tracking-widest w-14 flex-shrink-0 pt-0.5">{item.s}</span>
                  <span className="text-sm text-slate/70 font-light leading-relaxed">{item.d}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="rounded-squircle bg-gradient-to-br from-[#EBF2EC] via-[#E6F4F4] to-[#C8DFC9] h-72 md:h-96 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Stylised mountain scene */}
            <svg className="absolute bottom-0 w-full" viewBox="0 0 600 300" fill="none">
              <path d="M0 300 L0 180 L100 100 L200 160 L300 60 L400 140 L500 80 L600 130 L600 300 Z" fill="rgba(134,134,139,0.15)" />
              <path d="M0 300 L0 220 L150 160 L300 200 L450 140 L600 180 L600 300 Z" fill="rgba(134,134,139,0.2)" />
              <path d="M0 300 L0 260 L200 230 L400 250 L600 240 L600 300 Z" fill="rgba(74,92,92,0.12)" />
            </svg>
            <div className="absolute top-6 left-6">
              <p className="text-3xl font-semibold tracking-tightest text-slate/50">900m</p>
              <p className="text-xs text-titanium mt-1">above it all</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
