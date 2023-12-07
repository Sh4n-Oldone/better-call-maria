import React from 'react'
import styled from 'styled-components'
import { colorScheme } from 'shared'

const MainWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1880px;
  background-color: ${colorScheme.palette.gray};
  border-radius: 42px;
`

export const AboutMeBlock: React.FC = () => {
  return (
    <MainWrapper id='about-me'>
      AboutMeBlock
    </MainWrapper>
  )
}
