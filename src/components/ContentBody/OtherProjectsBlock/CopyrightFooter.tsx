import React from 'react'
import styled from 'styled-components'
import { colorScheme } from 'shared'
import { useScreenSize } from 'hooks'

const MainWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 24px;
`
const InnerWrapper = styled.div<{ width: number; size: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 42px 5%;
  width: 100%;
  max-width: 1880px;
  z-index: 2;

  @media (max-width: 410px) {
    flex-direction: column;
    gap: 6px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: calc(-100vw / 2 + ${({ width, size }) =>
			width > 1880 ? 940 : width / 2 - size}px);
    width: 100vw;
    height: 100%;
    background: #FCFCFC;
    border-top: 1px solid #DEDEDE;
    border-bottom: 1px solid #DEDEDE;
    z-index: -1;
  }
`
const Copyright = styled.span`
  color: ${colorScheme.palette.black};
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
`
const Logo = styled.img`
  height: 18px;
  margin-top: -4px;
`

const COPYRIGHT_TEXT = '© uxhunter 2023. Все права защищены.'

export const CopyrightFooter: React.FC = () => {
	const { width, scrollbarSize } = useScreenSize()

	return (
		<MainWrapper>
			<InnerWrapper width={width} size={scrollbarSize}>
				<Logo src='/xhunter_logo.png' alt='logo' />
				<Copyright>{COPYRIGHT_TEXT}</Copyright>
			</InnerWrapper>
		</MainWrapper>
	)
}
