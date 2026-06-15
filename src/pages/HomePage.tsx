import { useEffect } from 'react'
import { useI18n } from '../i18n'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import ScreenshotGallery from '../components/ScreenshotGallery'
import FAQSection from '../components/FAQSection'
import Section from '../components/Section'
import { ArrowRight, MessageCircle, Mail, TrendingUp, Shield, Clock, Zap } from 'lucide-react'

export default function HomePage() {
  const { t } = useI18n()

  useEffect(() => {
    document.title = 'VenTal Go — Такси, доставка еды и посылок в Казахстане'
  }, [])

  return (
    <>
      <HeroSection />

      <Section id="about" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="fade-in inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full mb-5">
                <span className="text-emerald-700 text-xs font-semibold tracking-wide uppercase">{t.about.badge}</span>
              </div>
              <h2 className="fade-in fade-in-delay-1 text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-5 leading-tight">
                {t.about.title}
              </h2>
              <p className="fade-in fade-in-delay-2 text-lg text-gray-500 leading-relaxed mb-8">
                {t.about.description}
              </p>
              <a
                href="/about"
                className="fade-in fade-in-delay-3 inline-flex items-center gap-2 text-emerald-600 font-semibold hover:gap-3 transition-all duration-200 text-sm"
              >
                {t.nav.about}
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {t.about.stats.map((stat, i) => (
                <div
                  key={i}
                  className={`fade-in bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all duration-200 fade-in-delay-${i + 1}`}
                >
                  <div className="text-4xl font-bold text-emerald-600 mb-2 tracking-tight">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Zap size={22} />, title: t.lang === 'ru' ? 'Быстро' : t.lang === 'en' ? 'Fast' : 'Жылдам', desc: t.lang === 'ru' ? 'Такси и доставка в минимальные сроки' : t.lang === 'en' ? 'Taxi and delivery in minimal time' : 'Такси және жеткізу ең қысқа мерзімде' },
              { icon: <Shield size={22} />, title: t.lang === 'ru' ? 'Безопасно' : t.lang === 'en' ? 'Safe' : 'Қауіпсіз', desc: t.lang === 'ru' ? 'Проверенные водители и курьеры' : t.lang === 'en' ? 'Verified drivers and couriers' : 'Тексерілген жүргізушілер мен курьерлер' },
              { icon: <Clock size={22} />, title: '24/7', desc: t.lang === 'ru' ? 'Работаем круглосуточно' : t.lang === 'en' ? 'Around the clock service' : 'Тәулік бойы жұмыс жасаймыз' },
              { icon: <TrendingUp size={22} />, title: t.lang === 'ru' ? 'Выгодно' : t.lang === 'en' ? 'Profitable' : 'Тиімді', desc: t.lang === 'ru' ? 'Честные тарифы без скрытых комиссий' : t.lang === 'en' ? 'Fair rates with no hidden fees' : 'Жасырын комиссиясыз әділ тарифтер' },
            ].map((item, i) => (
              <div key={i} className={`fade-in fade-in-delay-${i + 1} text-center`}>
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                  {item.icon}
                </div>
                <div className="text-white font-bold text-lg mb-2">{item.title}</div>
                <div className="text-emerald-100 text-sm leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <FeatureSection />
      <ScreenshotGallery />
      <FAQSection />

      <Section id="contact" className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full mb-5">
            <span className="text-emerald-700 text-xs font-semibold tracking-wide uppercase">{t.contact.badge}</span>
          </div>
          <h2 className="fade-in fade-in-delay-1 text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            {t.contact.title}
          </h2>
          <p className="fade-in fade-in-delay-2 text-lg text-gray-500 leading-relaxed mb-12">
            {t.contact.subtitle}
          </p>

          <div className="fade-in fade-in-delay-3 grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <a
              href="https://t.me/vental_go_support"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-emerald-600 text-white font-semibold rounded-2xl hover:bg-emerald-700 active:scale-95 transition-all duration-200 shadow-lg shadow-emerald-100"
            >
              <MessageCircle size={20} />
              {t.contact.telegram}
            </a>
            <a
              href="mailto:support@vental-go.com"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-white text-gray-700 font-semibold rounded-2xl border border-gray-200 hover:border-emerald-200 hover:text-emerald-700 hover:bg-emerald-50 active:scale-95 transition-all duration-200"
            >
              <Mail size={20} />
              {t.contact.email}
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
