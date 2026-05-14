import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Accommodations', path: '/accommodations' },
  { label: 'Experience', path: '/experience' },
  { label: 'Practical', path: '/practical' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Top bar */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass py-3' : 'py-5'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link
            to="/"
            className="text-white mix-blend-difference font-semibold text-lg tracking-tight-2 hover:opacity-70 transition-opacity duration-300"
          >
            VAZNIK
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="flex flex-col gap-[5px] p-2 group"
            aria-label="Open menu"
          >
            <span className="block w-6 h-[1.5px] bg-white mix-blend-difference transition-all duration-300 group-hover:w-4" />
            <span className="block w-6 h-[1.5px] bg-white mix-blend-difference" />
            <span className="block w-4 h-[1.5px] bg-white mix-blend-difference transition-all duration-300 group-hover:w-6" />
          </button>
        </div>
      </motion.header>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] glass-frosted flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Close button */}
            <div className="flex items-center justify-between px-6 py-5">
              <Link to="/" className="font-semibold text-lg tracking-tight-2 text-slate">VAZNIK</Link>
              <button
                onClick={() => setOpen(false)}
                className="p-2 hover:opacity-50 transition-opacity duration-300"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-8 md:px-16 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.path}
                    className={`block text-5xl md:text-7xl font-semibold tracking-tightest py-3 transition-all duration-300 hover:opacity-30 ${
                      location.pathname === link.path ? 'opacity-100' : 'opacity-60'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom strip */}
            <div className="px-8 md:px-16 py-8 flex items-center justify-between border-t border-black/5">
              <span className="text-sm text-titanium">Slamniki 4, Bohinjska Bela, Slovenia</span>
              <Link
                to="/practical"
                className="text-sm font-medium bg-forest text-white px-5 py-2.5 rounded-full hover:bg-forest-mid transition-all duration-300 spring"
              >
                Reserve
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
