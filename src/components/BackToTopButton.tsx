import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { useI18n } from '../i18n'

export default function BackToTopButton() {
  const { t } = useI18n()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title={t.backToTop}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-4 py-3 bg-emerald-600 text-white rounded-full shadow-lg shadow-emerald-200 hover:bg-emerald-700 active:scale-95 transition-all duration-200 text-sm font-medium group"
    >
      <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
      <span className="hidden sm:inline">{t.backToTop}</span>
    </button>
  )
}
