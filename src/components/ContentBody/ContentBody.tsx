import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { StartBlock } from './StartBlock'
import { AboutMeBlock } from './AboutMeBlock'
import { SkillsBlock } from './SkillsBlock'
import { CasesBlock } from './CasesBlock'
import { OtherProjectsBlock } from './OtherProjectsBlock'
import { colorScheme } from 'shared'

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const BackgroundWrapper = styled.section<{ width: number, size: number }>`
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
    left: calc(-100vw / 2 + ${({ width, size }) => width > 1880 ? 940 : width / 2 - size}px);
    width: 100vw;
    height: 100%;
    background: linear-gradient(
      0deg,
      ${colorScheme.gradients.grayToWhite.start} 0%, 
      ${colorScheme.gradients.grayToWhite.end} 100%);
    z-index: -1;
  }
`

export const ContentBody: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth ?? 0)
  const [scrollbarSize, setScrollbarSize] = useState(0)

  useEffect(() => {
    setScrollbarSize(window.innerWidth - document.documentElement.clientWidth)
  }, [document.documentElement.clientWidth])
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth ?? 2)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [window.innerWidth])

  return (
    <BodyWrapper>
      <StartBlock />
      <BackgroundWrapper width={width} size={scrollbarSize}>
        <AboutMeBlock />
        <SkillsBlock />
      </BackgroundWrapper>
      <CasesBlock />
      <OtherProjectsBlock />
    </BodyWrapper>
  )
}
