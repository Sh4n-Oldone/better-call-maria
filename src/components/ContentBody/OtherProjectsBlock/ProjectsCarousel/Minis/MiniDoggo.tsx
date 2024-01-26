import React from 'react'
import styled from 'styled-components'
import { MinisContainer } from './shared'

const MainWrapper = styled(MinisContainer)`
  position: relative;
  background: linear-gradient(180deg, #D2E3F7 0%, #FFF4FF 100%);
`
const DoggoImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 32px;
  width: 79px;
  height: 116px;
  z-index: 1;
`

export const MiniDoggo: React.FC = () => (
	<MainWrapper>
		<DoggoImage
			src='/projects_doggo.png'
			alt='doggo image'
			loading='lazy'
		/>
	</MainWrapper>
)
