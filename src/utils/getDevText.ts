import { Langs } from 'types'
import jsonData from './text.json'

enum DevBlocksNames {
  TABS = 'tabs'
}

type Tab = {
  [key in Langs]: string
}
const textDataObj = JSON.parse(JSON.stringify(jsonData))

export const getDevTabsText = (lang: Langs) => textDataObj
  .developer[DevBlocksNames.TABS]
  .map((tab: Tab) => tab[lang]) as string[]