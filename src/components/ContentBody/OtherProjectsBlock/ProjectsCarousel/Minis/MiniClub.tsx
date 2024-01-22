import React from 'react'
import styled from 'styled-components'
import { MinisContainer } from './shared'

const MainWrapper = styled(MinisContainer)`
  position: relative;
`
const ClubImage = styled.img`
  position: absolute;
  top: 5px;
  left: 4px;
  width: 118.5px;
  height: 80.5px;
  z-index: 1;
`

export const MiniClub: React.FC = () => (
	<MainWrapper>
		<ClubImage src='/projects_club.png' alt='club image' />
	</MainWrapper>
)
