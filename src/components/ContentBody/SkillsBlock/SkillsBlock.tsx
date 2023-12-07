import React from 'react'
import styled from 'styled-components'
// import { colorScheme } from 'shared'

const MainWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1880px;
`

export const SkillsBlock: React.FC = () => {
  return (
    <MainWrapper id='skills'>
      SkillsBlock
    </MainWrapper>
  )
}
