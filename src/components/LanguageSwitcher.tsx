import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { useI18n, langNames } from '../i18n'
import type { Lang } from '../i18n'

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const flags: Record<Lang, string> = { ru: 'RU', en: 'EN', kk: 'KZ' }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors duration-200"
      >
        <span className="text-xs font-bold tracking-wide text-emerald-600">{flags[lang]}</span>
        <span className="hidden sm:inline">{langNames[lang]}</span>
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">
          {(Object.keys(langNames) as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => { setLang(l); setOpen(false) }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150 ${
                l === lang
                  ? 'bg-emerald-50 text-emerald-700 font-semibold'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="text-xs font-bold tracking-wide text-emerald-600 w-6">{flags[l]}</span>
              {langNames[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
