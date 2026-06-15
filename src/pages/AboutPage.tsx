import { useEffect } from 'react'
import { useI18n } from '../i18n'
import Section from '../components/Section'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function AboutPage() {
  const { t } = useI18n()
  const ap = t.aboutPage

  useEffect(() => {
    document.title = `${ap.title} — VenTal Go`
  }, [ap.title])

  const serviceIcons = ['🚗', '🍔', '📦']

  return (
    <>
      <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="text-emerald-700 text-xs font-semibold tracking-wide uppercase">VenTal Go</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              {ap.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl">
              {ap.subtitle}
            </p>
          </div>
        </div>
      </div>

      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="fade-in inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full mb-5">
                <span className="text-emerald-700 text-xs font-semibold tracking-wide uppercase">{ap.missionBadge}</span>
              </div>
              <h2 className="fade-in fade-in-delay-1 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-5">
                {ap.missionTitle}
              </h2>
              <p className="fade-in fade-in-delay-2 text-gray-500 text-lg leading-relaxed">
                {ap.missionText}
              </p>
            </div>
            <div className="fade-in fade-in-delay-3 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl" />
              <div className="relative p-8 sm:p-10">
                <div className="text-6xl sm:text-7xl font-black text-emerald-600 opacity-10 absolute top-4 right-6 select-none">KZ</div>
                <div className="grid grid-cols-2 gap-4">
                  {t.about.stats.map((stat, i) => (
                    <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-emerald-50">
                      <div className="text-3xl font-bold text-emerald-600 mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-500 font-medium leading-snug">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="fade-in inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full mb-4">
              <span className="text-emerald-700 text-xs font-semibold tracking-wide uppercase">{ap.servicesBadge}</span>
            </div>
            <h2 className="fade-in fade-in-delay-1 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              {ap.servicesTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ap.services.map((svc, i) => (
              <div
                key={i}
                className={`fade-in fade-in-delay-${i + 1} bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all duration-200`}
              >
                <div className="text-5xl mb-5">{serviceIcons[i]}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="fade-in inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full mb-4">
              <span className="text-emerald-700 text-xs font-semibold tracking-wide uppercase">{ap.valuesBadge}</span>
            </div>
            <h2 className="fade-in fade-in-delay-1 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              {ap.valuesTitle}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ap.values.map((val, i) => (
              <div
                key={i}
                className={`fade-in fade-in-delay-${i + 1} group p-6 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all duration-200`}
              >
                <CheckCircle2 size={22} className="text-emerald-500 mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">{val.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.1)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="fade-in text-3xl sm:text-4xl font-bold text-white mb-4">
            {ap.ctaTitle}
          </h2>
          <p className="fade-in fade-in-delay-1 text-emerald-100 text-lg mb-8">{ap.ctaSubtitle}</p>
          <a
            href="/#download"
            className="fade-in fade-in-delay-2 inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-700 font-bold rounded-2xl hover:bg-emerald-50 active:scale-95 transition-all duration-200 shadow-lg text-base"
          >
            {ap.ctaButton}
            <ArrowRight size={18} />
          </a>
        </div>
      </Section>
    </>
  )
}
