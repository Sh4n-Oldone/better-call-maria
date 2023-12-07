import React from 'react'
import styled from 'styled-components'
import { StartBlock } from './StartBlock'
import { AboutMeBlock } from './AboutMeBlock'
import { SkillsBlock } from './SkillsBlock'
import { CasesBlock } from './CasesBlock'
import { OtherProjectsBlock } from './OtherProjectsBlock'

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const ContentBody: React.FC = () => {
  return (
    <BodyWrapper>
      <StartBlock />
      <AboutMeBlock />
      <SkillsBlock />
      <CasesBlock />
      <OtherProjectsBlock />
    </BodyWrapper>
  )
}
