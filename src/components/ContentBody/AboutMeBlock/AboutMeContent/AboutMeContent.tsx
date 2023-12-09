import React from 'react'
import styled from 'styled-components'
import { ImagesPart } from './ImagesPart'
import { InfoPart } from './InfoPart'

const ContentContainer = styled.div`
  display: flex;
  gap: 5%;
  width: 100%;
`

export const AboutMeContent: React.FC = () => {
  return (
    <ContentContainer>
      <ImagesPart />
      <InfoPart />
    </ContentContainer>
  )
}
