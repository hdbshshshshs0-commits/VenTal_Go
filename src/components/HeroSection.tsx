import { useI18n } from '../i18n'
import { ArrowRight, Star } from 'lucide-react'

export default function HeroSection() {
  const { t } = useI18n()

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-100 rounded-full blur-3xl opacity-40 -translate-x-1/4 translate-y-1/4" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.04)_0%,transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-700 text-xs font-semibold tracking-wide uppercase">
                {t.hero.badge}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.05] mb-6">
              {t.hero.title.split('\n').map((line, i) => (
                <span key={i}>
                  {i === 1 ? (
                    <span className="text-emerald-600">{line}</span>
                  ) : (
                    line
                  )}
                  {i === 0 && <br />}
                </span>
              ))}
            </h1>

            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-10 max-w-lg">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12" id="download">
              <a
                href="#"
                className="flex items-center gap-2.5 px-6 py-3.5 bg-emerald-600 text-white font-semibold rounded-2xl hover:bg-emerald-700 active:scale-95 transition-all duration-200 shadow-lg shadow-emerald-100 text-base"
              >
                {t.hero.cta}
                <ArrowRight size={18} />
              </a>
              <a
                href="/about"
                className="flex items-center gap-2 px-6 py-3.5 bg-white text-gray-700 font-semibold rounded-2xl border border-gray-200 hover:border-emerald-200 hover:text-emerald-700 hover:bg-emerald-50 active:scale-95 transition-all duration-200 text-base"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm"
                  >
                    {['К', 'В', 'К', 'Р'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#10b981" className="text-emerald-500" />
                  ))}
                </div>
                <p className="text-xs text-gray-500">Казахстан</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-[3rem] blur-2xl opacity-50 scale-95" />
              <div className="relative w-72 sm:w-80 bg-gray-900 rounded-[3rem] shadow-2xl overflow-hidden border-4 border-gray-800">
                <div className="w-24 h-6 bg-gray-800 rounded-full mx-auto mt-3 mb-0" />
                <img
                  src="/screenshot-1.png"
                  alt="VenTal Go App"
                  className="w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className="h-2 bg-gray-900" />
              </div>

              <div className="absolute -left-12 top-1/4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 w-44">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <span className="text-lg">🚗</span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">Такси</div>
                    <div className="text-xs text-emerald-600">Едет к вам</div>
                  </div>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-emerald-500 rounded-full" />
                </div>
              </div>

              <div className="absolute -right-8 bottom-1/3 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 w-40">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">🍔</span>
                  <div className="text-xs font-semibold text-gray-900">Доставка</div>
                </div>
                <div className="text-xs text-gray-500">≈ 25 мин</div>
                <div className="mt-2 text-sm font-bold text-emerald-600">2 890 ₸</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
