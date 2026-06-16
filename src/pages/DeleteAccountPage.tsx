import { useEffect } from 'react'
import { useI18n } from '../i18n'
import { AlertTriangle, CheckCircle2, Smartphone, MessageCircle, Mail } from 'lucide-react'
import BackToTopButton from '../components/BackToTopButton'

export default function DeleteAccountPage() {
  const { t } = useI18n()
  const dp = t.deletePage

  useEffect(() => {
    document.title = `${dp.title} — VenTal Go`
  }, [dp.title])

  return (
    <>
      <div className="bg-gradient-to-b from-orange-50 to-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-50 border border-orange-100 rounded-full mb-5">
            <AlertTriangle size={13} className="text-orange-500" />
            <span className="text-orange-700 text-xs font-semibold tracking-wide uppercase">{dp.infoBadge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            {dp.title}
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            {dp.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-3">
              <AlertTriangle size={20} className="text-orange-500" />
              {dp.infoTitle}
            </h2>
            <ul className="space-y-3">
              {dp.infoItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-orange-600 text-xs font-bold">{i + 1}</span>
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Smartphone size={20} className="text-emerald-600" />
              {dp.howTitle}
            </h2>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 rounded-full mb-6">
              <span className="text-emerald-700 text-xs font-semibold">{dp.howBadge}</span>
            </div>
            <ol className="space-y-4">
              {dp.howSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0 text-white text-sm font-bold shadow-sm">
                    {i + 1}
                  </div>
                  <div className="flex items-center gap-2 pt-1.5">
                    <span className="text-gray-700 text-sm leading-relaxed">{step}</span>
                    {i === dp.howSteps.length - 1 && (
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {dp.helpTitle}
            </h2>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 rounded-full mb-4">
              <span className="text-emerald-700 text-xs font-semibold">{dp.helpBadge}</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">{dp.helpText}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="https://t.me/VenTal_Go"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-4 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 active:scale-95 transition-all duration-200 font-semibold text-sm shadow-sm"
              >
                <MessageCircle size={18} />
                <div>
                  <div className="text-sm font-semibold">{dp.telegram}</div>
                  <div className="text-emerald-200 text-xs">{dp.telegramPlaceholder}</div>
                </div>
              </a>
              <a
                href="mailto:ventalsupport@gmail.com"
                className="flex items-center gap-3 px-5 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl hover:border-emerald-200 hover:bg-emerald-50 active:scale-95 transition-all duration-200 font-semibold text-sm"
              >
                <Mail size={18} className="text-emerald-600" />
                <div>
                  <div className="text-sm font-semibold">{dp.email}</div>
                  <div className="text-gray-400 text-xs">{dp.emailPlaceholder}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <BackToTopButton />
    </>
  )
}
