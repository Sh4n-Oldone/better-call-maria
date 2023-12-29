import React from 'react'
import styled from 'styled-components'
import { useLangStore } from 'stores'
import { getSkillsTabsMethodsContent } from 'utils'
import { colorScheme } from 'shared'
import {
	LeftContentWrapper,
	Subtitle,
	Title,
	TitleContainer,
} from '../sharedCardContentStyles'
import { MethodsTabs } from './types'
import { getMethodTabText } from './utils'
import { MethodsCardContent } from './MethodsCardContent'

interface ILeftContentProps {
	activeTab: MethodsTabs
	onTabChange(tab: MethodsTabs): void
}
interface IButtonProps {
	isActive: boolean
	text: string
	onClick(): void
}

const ModSubtitle = styled(Subtitle)`
  white-space: pre-line;
`
const AltCard = styled.div`
  display: none;

  @media (max-width: 940px) {
    display: block;
  }
`
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 8px;
  margin-top: 30px;
`
const StyledButton = styled.button<{ isActive: boolean }>`
  position: relative;
  z-index: 2;
  width: ${({ isActive }) => (isActive ? '100%' : '90%')};
  display: flex;
  border-radius: 16px;
  padding: 15px 20px;
  border: 1px solid ${colorScheme.grayFamily.gray_4};
  background: ${({ isActive }) =>
		isActive
			? 'linear-gradient(180deg, #D2E3F7 0%, #FFF4FF 100%)'
			: colorScheme.palette.white};

  &:hover {
    cursor: pointer;
    border: 1px solid ${colorScheme.grayFamily.gray_4};
  }
`
const InnerContainer = styled.div<{ isActive: boolean }>`
  content: '';
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 16px;
  background-color: #FFF;
  opacity: ${({ isActive }) => (isActive ? '0.3' : '0.5')};
  background-image:
    linear-gradient(30deg, #DEDEDE 12%, transparent 12.5%, transparent 87%, #DEDEDE 87.5%, #DEDEDE),
    linear-gradient(150deg, #DEDEDE 12%, transparent 12.5%, transparent 87%, #DEDEDE 87.5%, #DEDEDE),
    linear-gradient(30deg, #DEDEDE 12%, transparent 12.5%, transparent 87%, #DEDEDE 87.5%, #DEDEDE),
    linear-gradient(150deg, #DEDEDE 12%, transparent 12.5%, transparent 87%, #DEDEDE 87.5%, #DEDEDE),
    linear-gradient(60deg, #DEDEDE77 25%, transparent 25.5%, transparent 75%, #DEDEDE77 75%, #DEDEDE77), linear-gradient(60deg, #DEDEDE77 25%, transparent 25.5%, transparent 75%, #DEDEDE77 75%, #DEDEDE77);
  background-size: 18px 32px;
  background-position: 0 0, 0 0, 9px 16px, 9px 16px, 0 0, 9px 16px;
`
const TransparentContainer = styled.div`
  content: '';
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 16px;
  background: linear-gradient(90deg, #FFF 50%, transparent 70%);
`
const Image = styled.img<{ isActive: boolean }>`
  z-index: 3;
  ${({ isActive }) => !isActive && 'opacity: 0.5;'}
`
const ArrowImage = styled(Image)`
  @media (max-width: 940px) {
    transform: rotate(90deg);
  }
`
const ButtonText = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0.16px;
  color: ${colorScheme.grayFamily.gray_3};
  z-index: 3;
`
const ButtonContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 3;
`
const ButtonLeftContentContainer = styled.div`
  display: flex;
  gap: 13px;
`

const Button: React.FC<IButtonProps> = ({ isActive, text, onClick }) => (
	<StyledButton isActive={isActive} onClick={onClick}>
		<InnerContainer isActive={isActive} />
		<TransparentContainer />
		<ButtonContentContainer>
			<ButtonLeftContentContainer>
				<Image
					src='src/assets/check.svg'
					alt='checkmark_icon'
					isActive={isActive}
				/>
				<ButtonText>{text}</ButtonText>
			</ButtonLeftContentContainer>
			{isActive && (
				<ArrowImage
					src='src/assets/arrowRight.svg'
					alt='arrow_icon'
					isActive
					width={34}
				/>
			)}
		</ButtonContentContainer>
	</StyledButton>
)

export const LeftContent: React.FC<ILeftContentProps> = ({
	activeTab,
	onTabChange,
}) => {
	const currLang = useLangStore((state) => state.langTheme)

	const { title, firstSubtitle, secondSubtitle } =
		getSkillsTabsMethodsContent(currLang)

	const handleTabChange = (tab: MethodsTabs) => {
		onTabChange(tab)
	}

	return (
		<LeftContentWrapper>
			<TitleContainer>
				<Title>{title}</Title>
				<Subtitle>{firstSubtitle}</Subtitle>
				<ModSubtitle>{secondSubtitle}</ModSubtitle>
			</TitleContainer>
			<ButtonsWrapper>
				<Button
					isActive={activeTab === MethodsTabs.RESEARCH}
					text={getMethodTabText(MethodsTabs.RESEARCH, currLang)}
					onClick={() => handleTabChange(MethodsTabs.RESEARCH)}
				/>
				<Button
					isActive={activeTab === MethodsTabs.ANALYSIS}
					text={getMethodTabText(MethodsTabs.ANALYSIS, currLang)}
					onClick={() => handleTabChange(MethodsTabs.ANALYSIS)}
				/>
				<Button
					isActive={activeTab === MethodsTabs.FORMATION}
					text={getMethodTabText(MethodsTabs.FORMATION, currLang)}
					onClick={() => handleTabChange(MethodsTabs.FORMATION)}
				/>
				<Button
					isActive={activeTab === MethodsTabs.TESTING}
					text={getMethodTabText(MethodsTabs.TESTING, currLang)}
					onClick={() => handleTabChange(MethodsTabs.TESTING)}
				/>
			</ButtonsWrapper>
			<AltCard>
				<MethodsCardContent
					activeTab={activeTab}
					onTabChange={handleTabChange}
				/>
			</AltCard>
		</LeftContentWrapper>
	)
}
