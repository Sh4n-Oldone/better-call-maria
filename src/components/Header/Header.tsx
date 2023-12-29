import React from 'react'
import { Navigation, LangButton, ContactMeButton } from './components'
import {
	Wrapper,
	HeaderContentWrapper,
	LogoContainer,
	RightBlock,
	ButtonContainer,
} from './styled'

export const Header: React.FC = () => {
	return (
		<Wrapper>
			<HeaderContentWrapper>
				<LogoContainer>
					<img
						src='/xhunter_logo.png'
						alt='logo'
						height='18px'
						width='81px'
					/>
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
