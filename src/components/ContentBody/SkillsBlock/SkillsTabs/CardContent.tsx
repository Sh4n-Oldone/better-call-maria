import React from 'react'
import styled from 'styled-components'
import { cardBorderRadius } from './Card'

interface IProps {
	leftContent: React.ReactNode
	cardContent: React.ReactNode
	changeDirection?: boolean
}

const CardContentWrapper = styled.div<{ changeDirection: boolean }>`
  display: flex;
  justify-content: center;
  gap: 4%;
  width: 100%;
  height: 100%;

  @media (max-width: 1000px) {
    ${({ changeDirection }) => changeDirection && 'flex-direction: column;'}
  }
`

const LeftContentWrapper = styled.div`
  display: flex;
  flex: 0.55;
  padding: 3% 5%;
  width: 100%;

  @media (max-width: 940px) {
    flex: 1;
  }
`

const RightContentWrapper = styled.div`
  display: flex;
  flex: 0.45;
  background: linear-gradient(
    0deg,
    #121212 5%,
    #1E1E1E 100%
    );
  border-radius: ${cardBorderRadius}px;
  padding: 3%;

  @media (max-width: 940px) {
    display: none;
  }
`

export const CardContent: React.FC<IProps> = ({
	leftContent,
	cardContent,
	changeDirection = false,
}) => (
	<CardContentWrapper changeDirection={changeDirection}>
		<LeftContentWrapper>{leftContent}</LeftContentWrapper>
		<RightContentWrapper>{cardContent}</RightContentWrapper>
	</CardContentWrapper>
)
