import { Langs } from 'types'
import { MethodsTabs } from './types'

// not so fancy but it good for now
export const getMethodTabText = (tab: MethodsTabs, lang: Langs) => {
  if (!tab || !lang) return ''

  switch (tab) {
    case MethodsTabs.RESEARCH:
      return lang === Langs.EN ? 'Research' : 'Исследование'
    case MethodsTabs.ANALYSIS:
      return lang === Langs.EN ? 'Analysis' : 'Анализ'
    case MethodsTabs.FORMATION:
      return lang === Langs.EN ? 'Formation' : 'Формирование'
    case MethodsTabs.TESTING:
      return lang === Langs.EN ? 'Testing' : 'Проверка'
    default:
      return ''
  }
}

export const getMethodIndex = (tab: MethodsTabs) => {
	switch (tab) {
		case MethodsTabs.RESEARCH:
			return 0
		case MethodsTabs.ANALYSIS:
			return 1
		case MethodsTabs.FORMATION:
			return 2
		case MethodsTabs.TESTING:
			return 3
		default:
			return 0
	}
}

export const getMethodTab = (index: number) => {
  switch (index) {
    case 0:
      return MethodsTabs.RESEARCH
    case 1:
      return MethodsTabs.ANALYSIS
    case 2:
      return MethodsTabs.FORMATION
    case 3:
      return MethodsTabs.TESTING
    default:
      return MethodsTabs.RESEARCH
  }
}

export const getMethodTabResearchText = (lang: Langs) => {
	switch (lang) {
		case Langs.EN:
			return 'We get the initial data. We collect all available material on the topic, study the existing documentation and form a brief.'
		case Langs.RU:
			return 'Получаем вводные данные. Собираем весь доступный материал по теме, изучаем существующую документацию и формируем бриф.'
		default:
			return ''
	}
}

export const getMethodTabAnalysisText = (lang: Langs) => {
  switch (lang) {
    case Langs.EN:
      return 'We analyze the collected data, study the target audience, competitors and the market as a whole.'
    case Langs.RU:
      return 'Получаем вводные данные. Собираем весь доступный материал по теме, изучаем существующую документацию и формируем бриф.'
    default:
      return ''
  }
}

export const getMethodTabFormationText = (lang: Langs) => {
  switch (lang) {
    case Langs.EN:
      return 'We form the concept of the project, create a prototype, develop a design and prepare the project for implementation.'
    case Langs.RU:
      return 'Получаем вводные данные. Собираем весь доступный материал по теме, изучаем существующую документацию и формируем бриф.'
    default:
      return ''
  }
}

export const getMethodTabTestingText = (lang: Langs) => {
  switch (lang) {
    case Langs.EN:
      return 'We test the project, make edits and prepare it for launch.'
    case Langs.RU:
      return 'Получаем вводные данные. Собираем весь доступный материал по теме, изучаем существующую документацию и формируем бриф.'
    default:
      return ''
  }
}