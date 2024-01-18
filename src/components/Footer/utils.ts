import { Langs } from 'types'

export type AdditionalLinksKeys = 'linkedIn' | 'telegram' | 'instagram' | 'x'

type BlockLinks = {
  RU: string,
  EN: string,
  localLink: string | null,
  globalLink: string | null,
  additionalLinks?: Record<AdditionalLinksKeys, string>
}

export type FooterLink = {
  title: string,
  localLink: string | null,
  globalLink: string | null,
  additionalLinks?: Record<AdditionalLinksKeys, string>
}

export type FooterColumn = {
  title: string,
  links: FooterLink[]
}

export const blockTitles = [
  {
    RU: 'Обо мне',
    EN: 'About me'
  },{
    RU: 'Про дизайн',
    EN: 'About design',
  },{
    RU: 'Менторство',
    EN: 'Mentoring'
  },{
    RU: 'Контакты',
    EN: 'Contacts'
  }
]

export const blockLinks: BlockLinks[][]= [
  [
    {
      RU: 'Про опыт',
      EN: 'About experience',
      localLink: '#about-me',
      globalLink: null,
    },
    {
      RU: 'Навыки',
      EN: 'Skills',
      localLink: '#skills',
      globalLink: null,
    },
    {
      RU: 'Другие проекты',
      EN: 'Other projects',
      localLink: '#projects',
      globalLink: null,
    }
  ],
  [
    {
      RU: 'Карта компетенций',
      EN: 'Competency map',
      localLink: null,
      globalLink: 'https://i.imgur.com/nxT0fVV.jpeg',
    },
    {
      RU: 'Мои кейсы',
      EN: 'My cases',
      localLink: '#cases',
      globalLink: null,
    }, {
      RU: 'Как я стала дизайнером',
      EN: 'How I became a designer',
      localLink: null,
      globalLink: 'https://i.imgur.com/PTqE2su.png',
    }
  ],
  [
    {
      RU: 'Блог на Medium',
      EN: 'Medium blog',
      localLink: null,
      globalLink: 'https://uxhunter.medium.com',
    },
    {
      RU: 'UX Speaking Club',
      EN: 'UX Speaking Club',
      localLink: null,
      globalLink: 'https://t.me/esc_ux',
    },
    {
      RU: 'Uxworkflow',
      EN: 'Uxworkflow',
      localLink: null,
      globalLink: 'https://www.instagram.com/uxworkflow?igsh=ZXl1OHl1eDU1ZTNn',
    }
  ],
  [
    {
      RU: 'Icons',
      EN: 'Icons',
      localLink: null,
      globalLink: null,
      additionalLinks: {
        linkedIn: 'https://www.linkedin.com/in/mariya-avramenko-09895b11a/',
        telegram: 'https://t.me/avramenkomariya',
        instagram: 'https://www.instagram.com/uxworkflow?igsh=ZXl1OHl1eDU1ZTNn',
        x: 'https://x.com/uxworkflow?s=21&t=dublZEuFMcMxrYDQN65DPA'
      }
    },
    {
      RU: 'Gmail',
      EN: 'Gmail',
      localLink: null,
      globalLink: 'mailto:uxworkflow@gmail.com',
    },
    {
      RU: 'Figma Community',
      EN: 'Figma Community',
      localLink: null,
      globalLink: 'https://www.figma.com/@uxhunter',
    }
  ]
]

export const getColumns = (lang: Langs): FooterColumn[]=> {
  const columns = new Array(blockTitles.length).fill(null)
  
  for (let i = 0; i < blockTitles.length; i++) {
    columns[i] = {
      title: blockTitles[i][lang],
    }
  }

  for (let i = 0; i < blockLinks.length; i++) {
    columns[i].links = blockLinks[i].map(link => ({
      title: link[lang],
      localLink: link.localLink,
      globalLink: link.globalLink,
      additionalLinks: link.additionalLinks,
    }))
  }

  return columns
}