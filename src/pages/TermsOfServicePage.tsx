import { useState, useEffect } from 'react'
import { useI18n } from '../i18n'
import LegalPage from '../components/LegalPage'

export default function TermsOfServicePage() {
  const { t } = useI18n()
  const [text, setText] = useState('')

  useEffect(() => {
    fetch('/terms-of-service.txt')
      .then((r) => r.text())
      .then(setText)
      .catch(() => setText(''))
  }, [])

  if (!text) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <LegalPage
      rawText={text}
      pageTitle={
        t.lang === 'ru'
          ? 'Условия использования'
          : t.lang === 'en'
          ? 'Terms of Service'
          : 'Пайдалану шарттары'
      }
      metaTitle={`${t.lang === 'ru' ? 'Условия использования' : t.lang === 'en' ? 'Terms of Service' : 'Пайдалану шарттары'} — VenTal Go`}
      metaDescription={
        t.lang === 'ru'
          ? 'Условия использования сервиса VenTal Go. Правила и обязательства для всех пользователей платформы.'
          : 'Terms of Service for VenTal Go. Rules and obligations for all platform users.'
      }
    />
  )
}
