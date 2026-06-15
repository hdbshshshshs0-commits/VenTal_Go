import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import { MessageCircle, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center overflow-hidden shadow-sm">
                <img
                  src="/logo.png"
                  alt="VenTal Go"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    (e.currentTarget.parentElement as HTMLDivElement).innerHTML = '<span class="text-white font-bold text-sm">VG</span>'
                  }}
                />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                VenTal <span className="text-emerald-400">Go</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 mb-5">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-gray-600">
              <MapPin size={12} className="text-emerald-600 shrink-0" />
              {t.footer.country}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5">{t.footer.company}</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: t.footer.home },
                { to: '/about', label: t.footer.about },
                { to: '/support', label: t.footer.support },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-gray-500 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5">{t.footer.legal}</h4>
            <ul className="space-y-3">
              {[
                { to: '/privacy-policy', label: t.footer.privacy },
                { to: '/terms-of-service', label: t.footer.terms },
                { to: '/delete-account', label: t.footer.deleteAccount },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-gray-500 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5">{t.footer.links}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://t.me/vental_go_support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-emerald-400 transition-colors duration-200"
                >
                  <MessageCircle size={14} />
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@vental-go.com"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-emerald-400 transition-colors duration-200"
                >
                  <Mail size={14} />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">{t.footer.rights}</p>
          <p className="text-xs text-gray-700">{t.footer.legal_info}</p>
        </div>
      </div>
    </footer>
  )
}
