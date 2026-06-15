import { createContext, useContext } from 'react'
import { ru } from './ru'
import { en } from './en'
import { kk } from './kk'
import type { Translations } from './ru'

export type Lang = 'ru' | 'en' | 'kk'

export const translations: Record<Lang, Translations> = { ru, en, kk }

export const langNames: Record<Lang, string> = {
  ru: 'Русский',
  en: 'English',
  kk: 'Қазақша',
}

export interface I18nContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translations
}

export const I18nContext = createContext<I18nContextType>({
  lang: 'ru',
  setLang: () => {},
  t: ru,
})

export const useI18n = () => useContext(I18nContext)

export { ru, en, kk }
export type { Translations }
