import React from 'react'
import styled from 'styled-components'
import { BackToMain } from './BackToMain'
import { DevTabs } from './DevTabs'

const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
  height: 100%;
  width: 100%;
`

const Developer: React.FC = () => {
	return (
		<MainWrapper>
			<BackToMain />
			<DevTabs />
		</MainWrapper>
	)
}

export default Developer
