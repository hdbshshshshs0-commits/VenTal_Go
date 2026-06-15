import { useState } from 'react'
import { Check, Users, Car, Package, UtensilsCrossed } from 'lucide-react'
import { useI18n } from '../i18n'
import Section from './Section'

type TabKey = 'clients' | 'drivers' | 'couriers' | 'restaurants'

const icons: Record<TabKey, React.ReactNode> = {
  clients: <Users size={18} />,
  drivers: <Car size={18} />,
  couriers: <Package size={18} />,
  restaurants: <UtensilsCrossed size={18} />,
}

const tabEmojis: Record<TabKey, string> = {
  clients: '👤',
  drivers: '🚗',
  couriers: '📦',
  restaurants: '🍽️',
}

export default function FeatureSection() {
  const { t } = useI18n()
  const [active, setActive] = useState<TabKey>('clients')

  const tabs: TabKey[] = ['clients', 'drivers', 'couriers', 'restaurants']
  const data = t.features[active]

  return (
    <Section id="features" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="fade-in inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full mb-4">
            <span className="text-emerald-700 text-xs font-semibold tracking-wide uppercase">{t.features.badge}</span>
          </div>
          <h2 className="fade-in fade-in-delay-1 text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            {t.features.title}
          </h2>
          <p className="fade-in fade-in-delay-2 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        <div className="fade-in fade-in-delay-3 flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-medium transition-all duration-200 ${
                active === tab
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-100'
                  : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-emerald-200'
              }`}
            >
              <span>{tabEmojis[tab]}</span>
              {t.features.tabs[tab]}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 rounded-full mb-5">
              <span className="text-emerald-600">{icons[active]}</span>
              <span className="text-emerald-700 text-xs font-semibold">{data.badge}</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
              {data.title}
            </h3>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">{data.subtitle}</p>
            <ul className="space-y-4">
              {data.items.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} className="text-emerald-600 stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-0.5">{item.title}</div>
                    <div className="text-gray-500 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-[2.5rem] scale-105 blur-xl" />
              <div className="relative w-64 sm:w-72 bg-gray-900 rounded-[2.5rem] shadow-2xl overflow-hidden border-[3px] border-gray-800">
                <div className="w-20 h-5 bg-gray-800 rounded-full mx-auto mt-2" />
                <img
                  src={`/screenshot-${tabs.indexOf(active) + 1}.png`}
                  alt={`${data.title} App Screen`}
                  className="w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/screenshot-1.png'
                  }}
                />
                <div className="h-2 bg-gray-900" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
