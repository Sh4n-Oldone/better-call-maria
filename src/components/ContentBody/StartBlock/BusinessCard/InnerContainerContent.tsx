import React from 'react'
import styled from 'styled-components'
import { useLangStore } from 'stores'
import { colorScheme } from 'shared'
import { Langs } from 'types'

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 456px) {
    display: none;
  }
`
const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #D7D7D7;

  @media (max-width: 456px) {
    display: none;
  }
`
const Name = styled.span`
  font-family: Inter;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 20px;
  color: ${colorScheme.palette.black};

  @media (max-width: 800px) {
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`
const Position = styled(Name)`
  font-weight: 400;
  font-size: 0.7rem;
  color: ${colorScheme.grayFamily.lightGray};

  @media (max-width: 800px) {
    font-size: 0.6rem;
  }

  @media (max-width: 600px) {
    font-size: 0.5rem;
  }
`
const BottomTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
const Icon = styled.img`
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;

  @media (max-width: 800px) {
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`
const TopInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;

  @media (max-width: 580) {
    gap: 2px;
  }
`
const TopInfoTitle = styled.span`
  font-family: Inter;
  font-size: 10px;
  font-weight: 600;
  color: ${colorScheme.palette.black};

  @media (max-width: 580px) {
    font-size: 8px;
  }
`
const TopInfoValue = styled.span`
  font-family: Inter;
  font-size: 8px;
  font-weight: 400;
  color: ${colorScheme.grayFamily.lightGray};

  @media (max-width: 580px) {
    font-size: 6px;
  }
`

const TEXTS = {
	name: {
		[Langs.RU]: 'Авраменко Мария',
		[Langs.EN]: 'Avramenko Maria',
	},
	position: {
		[Langs.RU]: 'Дизайнер продукта',
		[Langs.EN]: 'Product designer',
	},
}
const TOP_INFO = [
	{
		title: {
			[Langs.RU]: 'Опыт',
			[Langs.EN]: 'Exp',
		},
		value: {
			[Langs.RU]: '5+ лет',
			[Langs.EN]: '5+ y',
		},
	},
	{
		title: {
			[Langs.RU]: 'Домены',
			[Langs.EN]: 'Domains',
		},
		value: {
			[Langs.RU]: 'Ed-Tech, E-Commerce, B2B, B2C и др.',
			[Langs.EN]: 'Ed-Tech, E-Commerce, B2B, B2C etc.',
		},
	},
	{
		title: {
			[Langs.RU]: 'Проекты',
			[Langs.EN]: 'Projects',
		},
		value: {
			[Langs.RU]: '30+',
			[Langs.EN]: '30+',
		},
	},
]

const getTopInfo = (lang: Langs) => {
	return TOP_INFO.map((item) => ({
		title: item.title[lang],
		value: item.value[lang],
	}))
}

export const InnerContainerContent: React.FC = () => {
	const currLang = useLangStore((state) => state.langTheme)

	const topInfo = getTopInfo(currLang)

	return (
		<>
			<TopContainer>
				{topInfo.map(({ title, value }) => (
					<TopInfoBlock key={title}>
						<TopInfoTitle>{title}</TopInfoTitle>
						<TopInfoValue>{value}</TopInfoValue>
					</TopInfoBlock>
				))}
			</TopContainer>
			<Divider />
			<BottomContainer>
				<BottomTextContainer>
					<Name>{TEXTS.name[currLang]}</Name>
					<Position>{TEXTS.position[currLang]}</Position>
				</BottomTextContainer>
				<Icon src='/logo.png' />
			</BottomContainer>
		</>
	)
}
