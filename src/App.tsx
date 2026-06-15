import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { I18nContext, translations } from './i18n'
import type { Lang } from './i18n'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfServicePage from './pages/TermsOfServicePage'
import DeleteAccountPage from './pages/DeleteAccountPage'
import SupportPage from './pages/SupportPage'

export default function App() {
  const [lang, setLang] = useState<Lang>('ru')
  const t = translations[lang]

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-white">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/delete-account" element={<DeleteAccountPage />} />
              <Route path="/support" element={<SupportPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </I18nContext.Provider>
  )
}
