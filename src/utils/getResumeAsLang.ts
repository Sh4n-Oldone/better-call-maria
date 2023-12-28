import { Langs } from 'types'

export const getResumeAsLang = (lang: Langs) => {
  switch (lang) {
    case Langs.RU:
      return 'Резюме'
    case Langs.EN:
      return 'Resume'
  }
}
