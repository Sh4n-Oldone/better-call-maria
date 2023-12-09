import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  height: 100%;
  flex: 1.05;
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 100%;
  max-width: 518px; */
  background-color: green;
`

export const InfoPart: React.FC = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <span>InfoPart</span>
      </ContentContainer>
    </MainContainer>
  )
}
