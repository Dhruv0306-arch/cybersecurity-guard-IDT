import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Shield, Menu, X, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/learn', label: 'Learn' },
  { path: '/phishing-simulator', label: 'Phishing Sim' },
  { path: '/quiz', label: 'Quiz' },
  { path: '/password-checker', label: 'Password Check' },
  { path: '/emergency-help', label: 'Help & About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-cyber-bg/95 backdrop-blur-md border-b border-cyber-border shadow-[0_4px_30px_rgba(0,212,255,0.05)]' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative">
            <Shield className="w-8 h-8 text-cyber-accent group-hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)] transition-all duration-300" />
            <div className="absolute inset-0 bg-cyber-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="font-bold text-lg text-white tracking-tight">
            Cyber<span className="text-cyber-accent">Guard</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-cyber-accent bg-cyber-accent/10'
                    : 'text-cyber-muted hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button - Desktop */}
        <Link
          to="/learn"
          className="hidden md:flex items-center gap-1.5 cyber-btn-primary py-2 px-4 text-sm"
        >
          Start Learning <ChevronRight className="w-4 h-4" />
        </Link>

        {/* Hamburger - Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-cyber-muted hover:text-white hover:bg-white/5 transition-all"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cyber-surface border-b border-cyber-border overflow-hidden"
          >
            <ul className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      location.pathname === link.path
                        ? 'text-cyber-accent bg-cyber-accent/10'
                        : 'text-cyber-muted hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
