import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useI18n } from '../i18n'
import Section from './Section'

export default function FAQSection() {
  const { t } = useI18n()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Section id="faq" className="bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="fade-in inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full mb-4">
            <span className="text-emerald-700 text-xs font-semibold tracking-wide uppercase">{t.faq.badge}</span>
          </div>
          <h2 className="fade-in fade-in-delay-1 text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            {t.faq.title}
          </h2>
          <p className="fade-in fade-in-delay-2 text-lg text-gray-500 leading-relaxed">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="space-y-3">
          {t.faq.items.map((item, i) => (
            <div
              key={i}
              className={`fade-in bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                open === i ? 'border-emerald-200 shadow-sm' : 'border-gray-100 hover:border-gray-200'
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className={`font-semibold text-sm sm:text-base leading-snug transition-colors duration-200 ${
                  open === i ? 'text-emerald-700' : 'text-gray-900'
                }`}>
                  {item.q}
                </span>
                <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${
                  open === i ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-500'
                }`}>
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <div className="h-px bg-emerald-100 mb-4" />
                  <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
