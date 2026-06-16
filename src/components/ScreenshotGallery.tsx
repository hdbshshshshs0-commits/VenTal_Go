import { useState } from 'react'
import { useI18n } from '../i18n'
import Section from './Section'

export default function ScreenshotGallery() {
  const { t } = useI18n()
  const [active, setActive] = useState(0)
  const screenshots = [1, 2, 3, 4]

  return (
    <Section id="screenshots" className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="fade-in inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full mb-4">
            <span className="text-emerald-700 text-xs font-semibold tracking-wide uppercase">{t.screenshots.badge}</span>
          </div>
          <h2 className="fade-in fade-in-delay-1 text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            {t.screenshots.title}
          </h2>
          <p className="fade-in fade-in-delay-2 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {t.screenshots.subtitle}
          </p>
        </div>

        <div className="fade-in fade-in-delay-3 flex flex-col items-center gap-8">
          <div className="relative w-64 sm:w-72 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-100 to-emerald-200 rounded-[3rem] blur-2xl opacity-60 scale-95" />
            <div className="relative rounded-[3rem] shadow-2xl overflow-hidden">
              <img
                key={active}
                src={`/screenshot-${screenshots[active]}.png`}
                alt={`VenTal Go Screenshot ${screenshots[active]}`}
                className="w-full object-cover transition-opacity duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-200 rounded-full ${
                  i === active
                    ? 'w-8 h-3 bg-emerald-600'
                    : 'w-3 h-3 bg-gray-200 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>

          <div className="grid grid-cols-4 gap-3 sm:gap-4 w-full max-w-sm">
            {screenshots.map((n, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative rounded-2xl overflow-hidden border-2 transition-all duration-200 ${
                  i === active
                    ? 'border-emerald-500 shadow-lg shadow-emerald-100 scale-105'
                    : 'border-transparent hover:border-gray-200 opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={`/screenshot-${n}.png`}
                  alt={`Screenshot ${n}`}
                  className="w-full h-16 object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.parentElement!.style.display = 'none'
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
