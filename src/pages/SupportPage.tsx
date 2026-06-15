import { useEffect } from 'react'
import { useI18n } from '../i18n'
import { MessageCircle, Mail, Globe, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const channelIcons = [
  <MessageCircle size={24} className="text-emerald-600" />,
  <Mail size={24} className="text-emerald-600" />,
  <Globe size={24} className="text-emerald-600" />,
]

const channelLinks = [
  'https://t.me/vental_go_support',
  'mailto:support@vental-go.com',
  'https://vental-go.com',
]

export default function SupportPage() {
  const { t } = useI18n()
  const sp = t.supportPage

  useEffect(() => {
    document.title = `${sp.title} — VenTal Go`
  }, [sp.title])

  return (
    <>
      <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full mb-5">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-700 text-xs font-semibold tracking-wide uppercase">VenTal Go</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            {sp.title}
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            {sp.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {sp.channels.map((ch, i) => (
            <a
              key={i}
              href={channelLinks[i]}
              target={i !== 1 ? '_blank' : undefined}
              rel={i !== 1 ? 'noopener noreferrer' : undefined}
              className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors duration-200">
                {channelIcons[i]}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{ch.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{ch.desc}</p>
              <div className="text-emerald-600 font-mono text-sm mb-4 font-semibold">{ch.value}</div>
              <span className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold text-sm group-hover:gap-2.5 transition-all duration-200">
                {ch.action}
                <ArrowRight size={14} />
              </span>
            </a>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 bg-emerald-50 rounded-xl flex items-center justify-center">
                <Clock size={16} className="text-emerald-600" />
              </div>
              <h3 className="font-bold text-gray-900">{sp.hoursTitle}</h3>
            </div>
            <p className="text-emerald-600 font-semibold text-sm">{sp.hours}</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 bg-emerald-50 rounded-xl flex items-center justify-center">
                <MessageCircle size={16} className="text-emerald-600" />
              </div>
              <h3 className="font-bold text-gray-900">{sp.responseTitle}</h3>
            </div>
            <p className="text-gray-600 text-sm mb-1">{sp.responseTelegram}</p>
            <p className="text-gray-600 text-sm">{sp.responseEmail}</p>
          </div>
        </div>

        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="font-bold text-gray-900 mb-1">{sp.faqTitle}</h3>
            <p className="text-gray-500 text-sm">{sp.faqText}</p>
          </div>
          <Link
            to="/#faq"
            className="shrink-0 flex items-center gap-2 px-5 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 active:scale-95 transition-all duration-200 text-sm shadow-sm"
          >
            {sp.faqLink}
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </>
  )
}
