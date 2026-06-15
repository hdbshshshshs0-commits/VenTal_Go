import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useI18n } from '../i18n'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const { t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/support', label: t.nav.support },
  ]

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200 overflow-hidden">
                <img
                  src="/logo.png"
                  alt="VenTal Go"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const t = e.currentTarget
                    t.style.display = 'none'
                    t.parentElement!.innerHTML = '<span class="text-white font-bold text-sm">VG</span>'
                  }}
                />
              </div>
              <span className={`font-bold text-lg tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-gray-900'
              }`}>
                VenTal <span className="text-emerald-600">Go</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive(to)
                      ? 'text-emerald-700 bg-emerald-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden md:block">
                <LanguageSwitcher />
              </div>
              <a
                href="#download"
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-xl hover:bg-emerald-700 active:scale-95 transition-all duration-200 shadow-sm"
              >
                {t.nav.download}
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200"
                aria-label={t.nav.menu}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-30 md:hidden" onClick={() => setMobileOpen(false)}>
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
          <div
            className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                    isActive(to)
                      ? 'text-emerald-700 bg-emerald-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="px-4 pb-4 flex items-center justify-between border-t border-gray-100 pt-4">
              <LanguageSwitcher />
              <a
                href="#download"
                className="px-5 py-2.5 bg-emerald-600 text-white text-sm font-semibold rounded-xl hover:bg-emerald-700 transition-colors duration-200"
              >
                {t.nav.download}
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="h-16 lg:h-18" />
    </>
  )
}
