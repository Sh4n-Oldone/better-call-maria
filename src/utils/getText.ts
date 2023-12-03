import { Langs, RouteNames } from 'types'
import jsonData from './text.json'

const navigationObj = JSON.parse(JSON.stringify(jsonData)).navigation

export const getNavText = (lang: Langs, route: RouteNames) => navigationObj[route][lang]

export const getNavLinks = (lang: Langs) => {
  const links = Object.keys(navigationObj).map((route) => ({
    name: navigationObj[route][lang],
    path: `/${route}`,
  }))
  return links
}
