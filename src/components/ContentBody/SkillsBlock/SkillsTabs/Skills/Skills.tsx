import React from 'react'
import styled from 'styled-components'
import { useLangStore } from 'stores'
import { getResumeAsLang, getSkillsTabsSkillsContent } from 'utils'
import { CardContent } from '../CardContent'
import {
	LeftContentWrapper,
	List,
	ListContainer,
	ListItem,
	ListTitle,
	Subtitle,
	Title,
	TitleContainer,
} from '../sharedCardContentStyles'

const ResumeButton = styled.a`
  color: #705FFF;
  font-weight: 600;
  text-decoration-line: underline;
  cursor: pointer;
`

const SecondSubtitle: React.FC<{ text: string }> = ({ text }) => {
	const currLang = useLangStore((state) => state.langTheme)

	const handleClick = () => {
		window.open(
			'https://t3.ftcdn.net/jpg/05/77/51/48/360_F_577514801_dQYirVqOAgFDFZMyI9Ea7tinfQOITO1R.jpg',
			'_blank',
		)
	}

	const textArr = text.split(getResumeAsLang(currLang).toLowerCase())

	return (
		<Subtitle>
			{textArr[0]}
			<ResumeButton onClick={handleClick}>
				{currLang === 'EN' ? 'resume' : 'резюме'}
			</ResumeButton>
			{textArr[1]}
		</Subtitle>
	)
}

const LeftContent: React.FC = () => {
	const currLang = useLangStore((state) => state.langTheme)

	const {
		title,
		firstSubtitle,
		secondSubtitle,
		methodsListTitle,
		methodsList,
		skillsListTitle,
		skillsList,
	} = getSkillsTabsSkillsContent(currLang)

	return (
		<LeftContentWrapper>
			<TitleContainer>
				<Title>{title}</Title>
				<Subtitle>{firstSubtitle}</Subtitle>
				<SecondSubtitle text={secondSubtitle} />
			</TitleContainer>
			<ListContainer>
				<ListTitle>{methodsListTitle}</ListTitle>
				<List>
					{methodsList.map((item) => (
						<ListItem key={item}>{item}</ListItem>
					))}
				</List>
			</ListContainer>
			<ListContainer>
				<ListTitle>{skillsListTitle}</ListTitle>
				<List>
					{skillsList.map((item) => (
						<ListItem key={item}>{item}</ListItem>
					))}
				</List>
			</ListContainer>
		</LeftContentWrapper>
	)
}

export const Skills: React.FC = () => (
	<CardContent
		leftContent={<LeftContent />}
		cardContent={<div>card</div>}
		changeDirection
	/>
)
