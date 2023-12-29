import { Langs, RouteNames } from 'types'
import jsonData from './text.json'

type StartBlocks = 'title' | 'subtitle' | 'callMeButton'
type AboutMeBlocks = 'title' | 'hello' | 'lastYears' | 'accordion'
type SkillsBlocks = 'title' | 'subtitle' | 'tabs' | 'tabsContent'

// type SkillsTabsSkills = 'title' | 'firstSubtitle' | 'secondSubtitle' | 'methodsListTitle' | 'methodsList' | 'skillsListTitle' | 'skillsList'
// type SkillsTabsManagement = 'title' | 'firstSubtitle' | 'secondSubtitle' | 'methodsListTitle' | 'methodsList'
// type SkillsTabsPrograms = 'title' | 'firstSubtitle' | 'secondSubtitle' | 'programsListTitle' | 'programsList'


type LangStringArray = {
  [key in Langs]: string
}

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
export const getSkillsText = (lang: Langs, block: Exclude<SkillsBlocks, 'tabs'>) =>
  textDataObj.skills[block][lang]
export const getSkillsTabs = (lang: Langs): string[] =>
  textDataObj.skills.tabs.map((tab: LangStringArray) => tab[lang])

export const getNavLinks = (lang: Langs) => {
  const links = Object.keys(textDataObj.navigation).map((route) => ({
    name: textDataObj.navigation[route][lang],
    path: `/#${route}`,
  }))
  return links
}

export const getSkillsTabsSkillsContent = (lang: Langs) => {
  const {
    title, 
    firstSubtitle, 
    secondSubtitle, 
    methodsListTitle, 
    methodsList, 
    skillsListTitle, 
    skillsList
  } = textDataObj.skills.tabsContent.skills

  return {
    title: title[lang],
    firstSubtitle: firstSubtitle[lang] as string,
    secondSubtitle: secondSubtitle[lang] as string,
    methodsListTitle: methodsListTitle[lang] as string,
    methodsList: methodsList.map((item: LangStringArray) => item[lang]) as string[],
    skillsListTitle: skillsListTitle[lang] as string,
    skillsList: skillsList.map((item: LangStringArray) => item[lang]) as string[],
  }
}

export const getSkillsTabsManagementContent = (lang: Langs) => {
  const {
    title, 
    firstSubtitle, 
    secondSubtitle, 
    methodsListTitle, 
    methodsList,
  } = textDataObj.skills.tabsContent.management

  return {
    title: title[lang],
    firstSubtitle: firstSubtitle[lang] as string,
    secondSubtitle: secondSubtitle[lang] as string,
    methodsListTitle: methodsListTitle[lang] as string,
    methodsList: methodsList.map((item: LangStringArray) => item[lang]) as string[],
  }
}

export const getSkillsTabsToolsContent = (lang: Langs) => {
  const {
    title, 
    firstSubtitle, 
    secondSubtitle, 
    programsListTitle, 
    programsList,
  } = textDataObj.skills.tabsContent.tools

  return {
    title: title[lang],
    firstSubtitle: firstSubtitle[lang] as string,
    secondSubtitle: secondSubtitle[lang] as string,
    programsListTitle: programsListTitle[lang] as string,
    programsList: programsList.map((item: LangStringArray) => item[lang]) as string[],
  }
}

export const getSkillsTabsMethodsContent = (lang: Langs) => {
  const {
    title, 
    firstSubtitle, 
    secondSubtitle,
  } = textDataObj.skills.tabsContent.methods

  return {
    title: title[lang],
    firstSubtitle: firstSubtitle[lang] as string,
    secondSubtitle: secondSubtitle[lang] as string,
  }
}
