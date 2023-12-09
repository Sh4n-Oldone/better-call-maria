import { Langs, RouteNames } from 'types'
import jsonData from './text.json'

type StartBlocks = 'title' | 'subtitle' | 'callMeButton'
type AboutMeBlocks = 'title' | 'hello' | 'lastYears'

const textDataObj = JSON.parse(JSON.stringify(jsonData))

export const getNavText = (lang: Langs, route: RouteNames) =>
  textDataObj.navigation[route][lang]
export const getStartText = (lang: Langs, block: StartBlocks) =>
  textDataObj.start[block][lang]
export const getAboutMeText = (lang: Langs, block: AboutMeBlocks) =>
  textDataObj.aboutMe[block][lang]

export const getNavLinks = (lang: Langs) => {
  const links = Object.keys(textDataObj.navigation).map((route) => ({
    name: textDataObj.navigation[route][lang],
    path: `/#${route}`,
  }))
  return links
}
