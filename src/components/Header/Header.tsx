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
				<LogoContainer>Logo</LogoContainer>
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
