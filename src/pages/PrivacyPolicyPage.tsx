import { useState, useEffect } from 'react'
import { useI18n } from '../i18n'
import LegalPage from '../components/LegalPage'

export default function PrivacyPolicyPage() {
  const { t } = useI18n()
  const [text, setText] = useState('')

  useEffect(() => {
    fetch('/privacy-policy.txt')
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
          ? 'Политика конфиденциальности'
          : t.lang === 'en'
          ? 'Privacy Policy'
          : 'Құпиялылық саясаты'
      }
      metaTitle={`${t.lang === 'ru' ? 'Политика конфиденциальности' : t.lang === 'en' ? 'Privacy Policy' : 'Құпиялылық саясаты'} — VenTal Go`}
      metaDescription={
        t.lang === 'ru'
          ? 'Политика конфиденциальности VenTal Go. Узнайте, как мы собираем, используем и защищаем ваши данные.'
          : 'Privacy Policy of VenTal Go. Learn how we collect, use, and protect your data.'
      }
    />
  )
}
