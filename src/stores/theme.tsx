import { create } from 'zustand'
import { Langs } from '../types'

type Store = {
  langTheme: Langs
  changeLangTheme(lang: Langs): void
  switchLangTheme(): void
  resetLangTheme(): void
}

const LANG_THEME = 'langTheme'

const getFirstLang = (): Langs => {
  const storageLang = localStorage.getItem(LANG_THEME) as Langs | null

  return storageLang || Langs.EN
}

export const setLangToStorage = (lang: Langs) => {
  localStorage.setItem(LANG_THEME, lang)
}

export const useLangStore = create<Store>((set) => ({
  langTheme: getFirstLang(),
  changeLangTheme: (langTheme) => set({ langTheme }),
  switchLangTheme: () => set((state) => {
    const changedLang = state.langTheme === Langs.RU ? Langs.EN : Langs.RU

    localStorage.setItem(LANG_THEME, changedLang)

    return { langTheme: changedLang }
  }),
  resetLangTheme: () => set({ langTheme: Langs.EN }),
}))
