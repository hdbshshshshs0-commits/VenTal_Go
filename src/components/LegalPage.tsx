import { useEffect, useState } from 'react'
import { Calendar, Clock } from 'lucide-react'
import { useI18n } from '../i18n'
import TableOfContents from './TableOfContents'
import BackToTopButton from './BackToTopButton'

interface Section {
  id: string
  number: string
  title: string
  content: string[]
}

interface Props {
  rawText: string
  pageTitle: string
  metaTitle: string
  metaDescription: string
}

function parseTextToSections(text: string): { docTitle: string; date: string; sections: Section[] } {
  const lines = text.split('\n')
  const docTitle = lines[0]?.trim() || ''
  const dateLine = lines.find((l) => l.includes('Дата') || l.includes('Date') || l.includes('Күні'))?.trim() || ''

  const sectionsRaw = text.split(/\n\s*---+\s*\n/)

  const sections: Section[] = []
  sectionsRaw.forEach((chunk, idx) => {
    const chunkLines = chunk.trim().split('\n').filter((l) => l.trim())
    const titleLine = chunkLines.find((l) => /^\d+[\.\)]/.test(l.trim()))
    if (!titleLine) {
      if (idx === 0) return
    }
    if (!titleLine) return

    const match = titleLine.match(/^(\d+)[\.\)]\s*(.+)/)
    if (!match) return
    const num = match[1]
    const title = match[2].trim()

    const contentStart = chunkLines.indexOf(titleLine) + 1
    const contentLines = chunkLines.slice(contentStart).map((l) => l.trim()).filter(Boolean)

    sections.push({
      id: `section-${num}`,
      number: num,
      title,
      content: contentLines,
    })
  })

  return { docTitle, date: dateLine, sections }
}

function renderContent(lines: string[]) {
  return lines.map((line, i) => {
    const isBullet = line.startsWith('-') || line.startsWith('•') || line.startsWith('*')
    if (isBullet) {
      return (
        <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
          <span className="text-emerald-500 mt-1.5 shrink-0">•</span>
          <span>{line.replace(/^[-•*]\s*/, '')}</span>
        </li>
      )
    }
    return (
      <p key={i} className="text-gray-600 text-sm leading-relaxed">
        {line}
      </p>
    )
  })
}

export default function LegalPage({ rawText, pageTitle, metaTitle, metaDescription }: Props) {
  const { t } = useI18n()
  const [parsed, setParsed] = useState<ReturnType<typeof parseTextToSections> | null>(null)

  useEffect(() => {
    document.title = metaTitle
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', metaDescription)
  }, [metaTitle, metaDescription])

  useEffect(() => {
    setParsed(parseTextToSections(rawText))
  }, [rawText])

  if (!parsed) return null

  const readingMinutes = Math.ceil(rawText.split(' ').length / 200)

  return (
    <>
      <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full mb-5">
            <span className="text-emerald-700 text-xs font-semibold tracking-wide uppercase">{t.legalBadge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            {pageTitle}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500">
            {parsed.date && (
              <div className="flex items-center gap-1.5">
                <Calendar size={14} className="text-emerald-500" />
                {parsed.date}
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-emerald-500" />
              {readingMinutes} {t.readTime}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              {parsed.sections.length} {t.lang === 'ru' ? 'разделов' : t.lang === 'en' ? 'sections' : 'бөлім'}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-10 lg:gap-16">
          <div className="hidden lg:block w-72 shrink-0">
            <TableOfContents
              items={parsed.sections.map((s) => ({ id: s.id, title: s.title, number: s.number }))}
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="space-y-10">
              {parsed.sections.map((section) => {
                const hasBullets = section.content.some((l) => /^[-•*]/.test(l))
                return (
                  <div
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28 bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                        <span className="text-emerald-700 text-sm font-bold font-mono">{section.number}</span>
                      </div>
                      <h2 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug pt-1.5">
                        {section.title}
                      </h2>
                    </div>
                    <div className="space-y-3 ml-14">
                      {hasBullets ? (
                        <ul className="space-y-2">{renderContent(section.content)}</ul>
                      ) : (
                        renderContent(section.content)
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <BackToTopButton />
    </>
  )
}
