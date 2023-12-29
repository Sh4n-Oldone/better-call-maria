import React from 'react'
import { colorScheme } from 'shared'
import styled from 'styled-components'

interface IProps {
	children: React.ReactNode
}

export const cardBorderRadius = 40
const padding = 20
const outerWrapperBorderRadius = cardBorderRadius + padding

const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1048px;
  padding: ${padding}px;
  margin: 0 auto;
  border-radius: ${outerWrapperBorderRadius}px;
  box-shadow: 20px 20px 64px 10px rgba(0, 0, 0, 0.12);
  background-color: ${colorScheme.palette.white};
`
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: ${cardBorderRadius}px;
  background: linear-gradient(
    0deg,
    ${colorScheme.palette.white} 32.81%,
    ${colorScheme.palette.gray} 100%
    );
  overflow: hidden;
`

export const Card: React.FC<IProps> = ({ children }) => (
	<CardWrapper>
		<InnerWrapper>{children}</InnerWrapper>
	</CardWrapper>
)
