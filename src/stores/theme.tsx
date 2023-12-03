import { create } from 'zustand'
import { Langs } from '../types'

type Store = {
  langTheme: Langs
  changeLangTheme(lang: Langs): void
  resetLangTheme(): void
}

const LANG_THEME = 'langTheme'

const getFirstLang = (): Langs => {
  const storageLang = localStorage.getItem(LANG_THEME) as Langs | null

  return storageLang || Langs.RU
}

export const setLangToStorage = (lang: Langs) => {
  localStorage.setItem(LANG_THEME, lang)
}

export const useLangStore = create<Store>((set) => ({
  langTheme: getFirstLang(),
  changeLangTheme: (langTheme) => set({ langTheme }),
  resetLangTheme: () => set({ langTheme: Langs.RU }),
}))
