import React from 'react'
import styled from 'styled-components'
import { MinisContainer } from './shared'

const ModMinisContainer = styled(MinisContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
`
const CreativeImage = styled.img`
  height: 60px;
`

export const MiniCreative: React.FC = () => (
	<ModMinisContainer>
		<CreativeImage src='/projects_creative.png' alt='creative image' />
	</ModMinisContainer>
)
