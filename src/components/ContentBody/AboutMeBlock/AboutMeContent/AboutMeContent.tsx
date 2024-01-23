import React from 'react'
import styled from 'styled-components'
import { ImagesPart } from './ImagesPart'
import { InfoPart } from './InfoPart'

interface IProps {
	onChangeInView(value: boolean): void
}

const ContentContainer = styled.div`
  display: flex;
  gap: 5%;
  width: 100%;

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 20px;
    padding: 0 10px;
  }
`

export const AboutMeContent: React.FC<IProps> = ({ onChangeInView }) => (
	<ContentContainer>
		<ImagesPart onChangeInView={onChangeInView} />
		<InfoPart />
	</ContentContainer>
)
