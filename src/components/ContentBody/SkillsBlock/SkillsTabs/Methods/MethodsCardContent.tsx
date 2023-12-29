import React from 'react'
import styled from 'styled-components'
import Carousel from 'nuka-carousel'
import { MethodsTabs } from './types'
import {
	getMethodIndex,
	getMethodTab,
	getMethodTabAnalysisText,
	getMethodTabFormationText,
	getMethodTabResearchText,
	getMethodTabTestingText,
} from './utils'
import { Langs } from 'types'
import { useLangStore } from 'stores'
import { cardBorderRadius } from '../Card'

interface IProps {
	activeTab: MethodsTabs
	onTabChange(tab: MethodsTabs): void
}
interface ITabProps {
	lang: Langs
}

const CarouselWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 556px;

  > .slider-container > div:nth-child(4) > .slider-control-bottomcenter {
    margin-right: auto;
    margin-bottom: 6%;
  }
  > .slider-container > div:nth-child(4) > .slider-control-bottomcenter > div {
    gap: 8px;
  }
  > .slider-container > div:nth-child(4) > .slider-control-bottomcenter > div > .paging-item > svg {
    fill: rgba(217, 217, 217, 0.50);
  }
  > .slider-container > div:nth-child(4) > .slider-control-bottomcenter > div > .paging-item.active > svg {
    fill: #D9D9D9;
  }
  > .slider-container > div:nth-child(5) > div {
    height: 100%;
  }

  @media (max-width: 940px) {
    position: absolute;
    left: 8%;
    bottom: 140px;
    width: 84%;
    height: 300px;
    background: linear-gradient(
      0deg,
      #121212 5%,
      #1E1E1E 100%
    );
    border-radius: ${cardBorderRadius}px;
    padding: 5%;

    > .slider-container {
      width: 100%;
      padding-top: 20px;
    }
  }
`
const MiniScreenSpacer = styled.div`
  display: none;

  @media (max-width: 940px) {
    display: block;
    height: 540px;
  }
`
const TabOuterContainer = styled.div`
  height: 100%;
`
const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  color: white;
`
const TabImage = styled.img`
  width: 100%;

  @media (max-width: 940px) {
    height: 40%;
    object-fit: cover;
    border-radius: 40px;
    transform: scale(1.01);
  }
`
const TabSmallImage = styled.img`
  margin-top: 47px;
  width: 32px;
  height: 32px;
  margin-right: auto;
`
const TabText = styled.span`
  margin-top: 25px;
  margin-right: auto;

  @media (max-width: 940px) {
    margin-bottom: 100px;
    max-width: 100%;
  }
`

const ResearchTab: React.FC<ITabProps> = ({ lang }) => (
	<TabOuterContainer>
		<TabContainer>
			<TabImage src='/research_photo.png' />
			<TabSmallImage src='/research_icon.png' />
			<TabText>{getMethodTabResearchText(lang)}</TabText>
		</TabContainer>
	</TabOuterContainer>
)

const AnalysisTab: React.FC<ITabProps> = ({ lang }) => (
	<TabOuterContainer>
		<TabContainer>
			<TabImage src='/analysis_photo.png' />
			<TabSmallImage src='/analysis_icon.png' />
			<TabText>{getMethodTabAnalysisText(lang)}</TabText>
		</TabContainer>
	</TabOuterContainer>
)

const FormationTab: React.FC<ITabProps> = ({ lang }) => (
	<TabOuterContainer>
		<TabContainer>
			<TabImage src='/formation_photo.png' />
			<TabSmallImage src='/formation_icon.png' />
			<TabText>{getMethodTabFormationText(lang)}</TabText>
		</TabContainer>
	</TabOuterContainer>
)

const TestingTab: React.FC<ITabProps> = ({ lang }) => (
	<TabOuterContainer>
		<TabContainer>
			<TabImage src='/testing_photo.png' />
			<TabSmallImage src='/testing_icon.png' />
			<TabText>{getMethodTabTestingText(lang)}</TabText>
		</TabContainer>
	</TabOuterContainer>
)

export const MethodsCardContent: React.FC<IProps> = ({
	activeTab,
	onTabChange,
}) => {
	const currLang = useLangStore((state) => state.langTheme)

	const handleDrag = (newIndex: number) => {
		onTabChange(getMethodTab(newIndex))
	}

	return (
		<>
			<MiniScreenSpacer />
			<CarouselWrapper>
				<Carousel
					slideIndex={getMethodIndex(activeTab)}
					style={{ height: '100%' }}
					renderCenterLeftControls={() => null}
					renderCenterRightControls={() => null}
					afterSlide={handleDrag}
					speed={3}
				>
					<ResearchTab lang={currLang} />
					<AnalysisTab lang={currLang} />
					<FormationTab lang={currLang} />
					<TestingTab lang={currLang} />
				</Carousel>
			</CarouselWrapper>
		</>
	)
}
