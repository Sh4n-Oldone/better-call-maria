import React from 'react'
import styled from 'styled-components'
import { MinisContainer } from './shared'

const ModMinisContainer = styled(MinisContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
`
const DesignSpotImage = styled.img`
  height: 100%;
`

export const MiniDesignSpot: React.FC = () => (
	<ModMinisContainer>
		<DesignSpotImage
			src='/projects_design-spot.png'
			alt='design spot image'
		/>
	</ModMinisContainer>
)
