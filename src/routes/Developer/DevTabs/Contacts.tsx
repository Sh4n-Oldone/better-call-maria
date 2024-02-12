import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Contacts: React.FC = () => {
	return (
		<MainWrapper>
			<span>Contacts</span>
		</MainWrapper>
	)
}
