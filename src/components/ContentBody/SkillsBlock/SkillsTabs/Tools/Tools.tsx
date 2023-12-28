import React from 'react'
import styled from 'styled-components'
import { useLangStore } from 'stores'
import { getSkillsTabsToolsContent } from 'utils'
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

const StrongerText = styled.span`
  font-weight: 600;
`

const BolderListItem: React.FC<{ text: string }> = ({ text }) => {
	const textArr = text.split(' - ')

	return (
		<ListItem>
			<StrongerText>{textArr[0]}</StrongerText>
			<span> - </span>
			<span>{textArr[1]}</span>
		</ListItem>
	)
}

const LeftContent: React.FC = () => {
	const currLang = useLangStore((state) => state.langTheme)

	const {
		title,
		firstSubtitle,
		secondSubtitle,
		programsListTitle,
		programsList,
	} = getSkillsTabsToolsContent(currLang)

	return (
		<LeftContentWrapper>
			<TitleContainer>
				<Title>{title}</Title>
				<Subtitle>{firstSubtitle}</Subtitle>
				<Subtitle>{secondSubtitle}</Subtitle>
			</TitleContainer>
			<ListContainer>
				<ListTitle>{programsListTitle}</ListTitle>
				<List>
					{programsList.map((item) => (
						<BolderListItem key={item} text={item} />
					))}
				</List>
			</ListContainer>
			<div>social icons</div>
		</LeftContentWrapper>
	)
}

export const Tools: React.FC = () => (
	<CardContent
		leftContent={<LeftContent />}
		cardContent={<div>card</div>}
		changeDirection
	/>
)
