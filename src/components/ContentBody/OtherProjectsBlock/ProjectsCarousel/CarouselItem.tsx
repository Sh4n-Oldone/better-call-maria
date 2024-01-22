import React from 'react'
import styled from 'styled-components'
import { colorScheme } from 'shared'
import {
	MiniDoggo,
	MiniYoutube,
	MiniClub,
	MiniDesignSpot,
	MiniCreative,
} from './Minis'
import { BlockLink } from './BlockLink'

interface ICarouselItemProps {
	dates: string
	title: string
	subtitle: string
	index: number
	isCurrent: boolean
	isLeft?: boolean
	isSimpleWrapper?: boolean
}

// todo: clean up this mess and make unique gap and width as variables
const SimpleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 46px 64px;
  border-radius: 30px;
  background-color: ${colorScheme.palette.white};

  @media (max-width: 642px) {
    padding: 20px 30px;
  }
`
const CarouselItemContainer = styled.div<{ isCurrent: boolean }>`
  position: relative;
  width: 100%;
  /* max-width: 645px; */
  /* max-width: 95%; */
  height: min(500px, 700px);
  min-width: auto;
`
const CarouselItemStyleContainer = styled.div<{
	isCurrent: boolean
	isLeft?: boolean
}>`
  position: absolute;
  top: 90px;
  left: -54%;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  ${({ isLeft }) => isLeft && 'clip: rect(0, auto, auto, 322px);'}
  ${({ isCurrent, isLeft }) =>
		!isLeft && !isCurrent && 'clip: rect(0, 322px, auto, auto);'}
  padding: 46px 64px;
  border-radius: 30px;
  background-color: ${colorScheme.palette.white};
  min-width: auto;
`
const ItemDates = styled.span`
  color: #8E8E8E;
  font-family: Inter;
  font-size: 14px;
  line-height: 24px;
`
const ItemTitle = styled.span`
  color: #0F0F0F;
  font-family: 'Noto Sans Symbols Variable', sans-serif;
  font-size: 48px;
  font-weight: 500;
  line-height: 64px;
  margin-top: 11px;
`
const ItemSubtitle = styled.span`
  color: #646464;
  font-family: Inter;
  font-size: 14px;
  line-height: 24px;
  margin-top: 17px;

  @media (max-width: 642px) {
    padding-bottom: 12px;
  }
`
const BottomInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;

  @media (max-width: 642px) {
    flex-direction: column;
    gap: 8px;
    margin-top: auto;
  }
`
const BlockLinksWrapper = styled.div<{ isSimple?: boolean }>`
  display: flex;
  ${({ isSimple }) => isSimple && 'flex-wrap: wrap;'}
  gap: 10px;
`

const MINIS = [
	<MiniDoggo />,
	<MiniYoutube />,
	<MiniClub />,
	<MiniDesignSpot />,
	<MiniCreative />,
]
const LINKS = [
	['https://www.innerjoy.space'],
	['https://www.youtube.com/@helloentropy'],
	['https://t.me/esc_ux'],
	[
		'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwj6lsbis_2CAxXzKxAIHQg2AY4QFnoECA0QAQ&url=https%3A%2F%2Fwearecommunity.io%2Fcommunities%2Fdesignspot-community&usg=AOvVaw1YMyctfIR6OELC3L0EU4_2&opi=89978449',
	],
	[
		'https://instagram.com/uxworkflow?igshid=MTNiYzNiMzkwZA==',
		'https://i.imgur.com/uvFEcJN.jpeg',
	],
]
const TEXTS = [
	['InnerJoy'],
	['YouTube'],
	['Telegram'],
	['Instagram'],
	['Instagram', 'Medium'],
]
const ICONS = [
	['/projects_icon_innerjoy.svg'],
	['/projects_icon_youtube.svg'],
	['/projects_icon_telegram.svg'],
	['/projects_icon_instagram.svg'],
	['/projects_icon_instagram.svg', '/projects_icon_medium.svg'],
]

export const CarouselItem: React.FC<ICarouselItemProps> = ({
	dates,
	title,
	subtitle,
	index,
	isCurrent,
	isLeft,
	isSimpleWrapper,
}) => {
	if (isSimpleWrapper)
		return (
			<SimpleWrapper>
				<ItemDates>{dates}</ItemDates>
				<ItemTitle>{title}</ItemTitle>
				<ItemSubtitle>{subtitle}</ItemSubtitle>
				<BottomInfoContainer>
					<BlockLinksWrapper isSimple>
						{ICONS[index].map((_, i) => (
							<BlockLink
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={i}
								icon={ICONS[index][i]}
								text={TEXTS[index][i]}
								link={LINKS[index][i]}
							/>
						))}
					</BlockLinksWrapper>
					{MINIS[index]}
				</BottomInfoContainer>
			</SimpleWrapper>
		)

	return (
		<CarouselItemContainer isCurrent={isCurrent}>
			<CarouselItemStyleContainer isCurrent={isCurrent} isLeft={isLeft}>
				<ItemDates>{dates}</ItemDates>
				<ItemTitle>{title}</ItemTitle>
				<ItemSubtitle>{subtitle}</ItemSubtitle>
				<BottomInfoContainer>
					<BlockLinksWrapper>
						{ICONS[index].map((_, i) => (
							<BlockLink
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={i}
								icon={ICONS[index][i]}
								text={TEXTS[index][i]}
								link={LINKS[index][i]}
							/>
						))}
					</BlockLinksWrapper>
					{MINIS[index]}
				</BottomInfoContainer>
			</CarouselItemStyleContainer>
		</CarouselItemContainer>
	)
}
