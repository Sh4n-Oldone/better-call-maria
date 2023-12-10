import { Langs, RouteNames } from 'types'
import jsonData from './text.json'

type StartBlocks = 'title' | 'subtitle' | 'callMeButton'
type AboutMeBlocks = 'title' | 'hello' | 'lastYears' | 'accordion'

type AboutMeAccordionItem = {
  title: {[key in Langs]: string}
  content: {[key in Langs]: string}[]
}
type MappedAboutMeAccordionItem = {
  title: string
  content: string[]
}

const textDataObj = JSON.parse(JSON.stringify(jsonData))

export const getNavText = (lang: Langs, route: RouteNames) =>
  textDataObj.navigation[route][lang]
export const getStartText = (lang: Langs, block: StartBlocks) =>
  textDataObj.start[block][lang]
export const getAboutMeText = (lang: Langs, block: AboutMeBlocks) =>
  textDataObj.aboutMe[block][lang]
export const getAboutMeAccordion = (lang: Langs): MappedAboutMeAccordionItem[] =>
  textDataObj.aboutMe.accordion.map((item: AboutMeAccordionItem) => ({
    title: item.title[lang],
    content: item.content.map((contentItem: {[key in Langs]: string}) => contentItem[lang]),
  }))

export const getNavLinks = (lang: Langs) => {
  const links = Object.keys(textDataObj.navigation).map((route) => ({
    name: textDataObj.navigation[route][lang],
    path: `/#${route}`,
  }))
  return links
}
