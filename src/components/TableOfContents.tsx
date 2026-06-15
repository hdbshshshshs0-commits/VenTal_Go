import { useState, useEffect } from 'react'
import { List } from 'lucide-react'
import { useI18n } from '../i18n'

interface TocItem {
  id: string
  title: string
  number: string
}

interface Props {
  items: TocItem[]
}

export default function TableOfContents({ items }: Props) {
  const { t } = useI18n()
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [items])

  return (
    <nav className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm sticky top-24">
      <div className="flex items-center gap-2 mb-4">
        <List size={18} className="text-emerald-600" />
        <span className="font-semibold text-gray-900 text-sm">{t.toc}</span>
      </div>
      <ul className="space-y-1 max-h-[60vh] overflow-y-auto pr-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className={`flex gap-2 items-start py-1.5 px-2 rounded-lg text-xs transition-colors duration-150 ${
                active === item.id
                  ? 'bg-emerald-50 text-emerald-700 font-semibold'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <span className="text-emerald-500 font-mono shrink-0 mt-0.5">{item.number}.</span>
              <span className="leading-snug">{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
