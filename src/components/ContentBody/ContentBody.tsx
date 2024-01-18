import React from 'react'
import styled from 'styled-components'
import { StartBlock } from './StartBlock'
import { AboutMeBlock } from './AboutMeBlock'
import { SkillsBlock } from './SkillsBlock'
import { CasesBlock, CasesBlobsScreen } from './CasesBlock'
import { OtherProjectsBlock } from './OtherProjectsBlock'
import { colorScheme } from 'shared'
import { useScreenSize } from 'hooks'

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const BackgroundWrapper = styled.div<{
	isBlack?: boolean
	width: number
	size: number
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1880px;
  border-radius: 42px;
  z-index: 2;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: calc(-100vw / 2 + ${({ width, size }) =>
			width > 1880 ? 940 : width / 2 - size}px);
    width: 100vw;
    height: 100%;
    background: linear-gradient(
      0deg,
      ${colorScheme.palette.gray} 0%, 
      ${colorScheme.palette.gray} 55%,
      ${colorScheme.palette.white} 100%);
    ${({ isBlack }) =>
			isBlack && `background: ${colorScheme.palette.black};`}
    z-index: -1;
  }
`

export const ContentBody: React.FC = () => {
	const { width, scrollbarSize } = useScreenSize()

	return (
		<BodyWrapper>
			<StartBlock />
			<BackgroundWrapper width={width} size={scrollbarSize}>
				<AboutMeBlock />
				<SkillsBlock />
			</BackgroundWrapper>
			<BackgroundWrapper isBlack width={width} size={scrollbarSize}>
				<CasesBlobsScreen />
				<CasesBlock />
			</BackgroundWrapper>
			<OtherProjectsBlock />
		</BodyWrapper>
	)
}
