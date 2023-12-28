import React from 'react'
import { useLangStore } from 'stores'
import { getSkillsTabsManagementContent } from 'utils'
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

const LeftContent: React.FC = () => {
	const currLang = useLangStore((state) => state.langTheme)

	const {
		title,
		firstSubtitle,
		secondSubtitle,
		methodsListTitle,
		methodsList,
	} = getSkillsTabsManagementContent(currLang)

	return (
		<LeftContentWrapper>
			<TitleContainer>
				<Title>{title}</Title>
				<Subtitle>{firstSubtitle}</Subtitle>
				<Subtitle>{secondSubtitle}</Subtitle>
			</TitleContainer>
			<ListContainer>
				<ListTitle>{methodsListTitle}</ListTitle>
				<List>
					{methodsList.map((item) => (
						<ListItem key={item}>{item}</ListItem>
					))}
				</List>
			</ListContainer>
		</LeftContentWrapper>
	)
}

export const Management: React.FC = () => (
	<CardContent
		leftContent={<LeftContent />}
		cardContent={<div>card</div>}
		changeDirection
	/>
)
