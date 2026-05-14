import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function StickyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden pb-safe"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="glass-frosted border-t border-black/8 px-5 py-4 flex items-center gap-3">
            <div className="flex-1">
              <p className="text-xs text-titanium">Slamniki 4 · Bohinjska Bela</p>
              <p className="text-sm font-semibold text-slate tracking-tight-2">From €85 / night</p>
            </div>
            <Link
              to="/practical#reserve"
              className="bg-forest text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-forest-mid transition-all duration-300 spring whitespace-nowrap"
            >
              Reserve now
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
