import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Navigation, LangButton, ContactMeButton } from './components'
import {
	Wrapper,
	HeaderContentWrapper,
	LogoContainer,
	RightBlock,
	ButtonContainer,
} from './styled'

const Logo = styled.img`
  height: 18px;
	width: 81px;
  cursor: pointer;
`

export const Header: React.FC = () => {
	const navigate = useNavigate()
	const onLogoClick = () => {
		navigate('/')
	}

	return (
		<Wrapper>
			<HeaderContentWrapper>
				<LogoContainer>
					<Logo src='/xhunter_logo.png' alt='logo' onClick={onLogoClick} />
				</LogoContainer>
				<Navigation />
				<RightBlock>
					<ButtonContainer>
						<LangButton />
					</ButtonContainer>
					<ButtonContainer>
						<ContactMeButton />
					</ButtonContainer>
				</RightBlock>
			</HeaderContentWrapper>
		</Wrapper>
	)
}
