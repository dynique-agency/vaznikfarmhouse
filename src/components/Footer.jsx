import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Footer() {
  const [newsletterOpen, setNewsletterOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setEmail('')
        setNewsletterOpen(false)
      }, 2500)
    }
  }

  return (
    <footer className="border-t border-black/8 bg-alpine">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left */}
          <p className="text-xs text-titanium text-center md:text-left leading-relaxed">
            Slamniki 4, Bohinjska Bela, Slovenia
            <span className="mx-2 opacity-30">|</span>
            +386 31 123 456
          </p>

          {/* Center — Logo */}
          <Link to="/" className="text-base font-semibold tracking-tight-2 text-slate hover:opacity-50 transition-opacity duration-300">
            VAZNIK
          </Link>

          {/* Right */}
          <div className="flex items-center gap-5">
            <Link
              to="/practical"
              className="text-xs font-medium text-slate hover:opacity-50 transition-opacity duration-300"
            >
              Reserve
            </Link>
            <Link
              to="/practical"
              className="text-xs text-titanium hover:opacity-50 transition-opacity duration-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-6 flex justify-center">
          <form onSubmit={handleSubmit} className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setNewsletterOpen(!newsletterOpen)}
              className="text-xs text-titanium hover:text-slate transition-colors duration-300"
            >
              Stay inspired
            </button>

            <AnimatePresence>
              {newsletterOpen && !submitted && (
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 'auto', opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <input
                    autoFocus
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="input-line text-xs w-44 pb-1 text-slate placeholder-titanium"
                  />
                  <button
                    type="submit"
                    className="text-xs font-medium text-slate hover:opacity-50 transition-opacity duration-300 whitespace-nowrap"
                  >
                    →
                  </button>
                </motion.div>
              )}

              {submitted && (
                <motion.span
                  className="text-xs text-slate"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Thank you.
                </motion.span>
              )}
            </AnimatePresence>
          </form>
        </div>

        <p className="text-center text-[11px] text-titanium/50 mt-5">
          © {new Date().getFullYear()} Vaznik Farm House. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
