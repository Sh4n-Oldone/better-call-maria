import React from 'react'
import {
  Navigation,
  LangButton,
  ContactMeButton,
} from './components'
import {
  Wrapper,
  LogoContainer,
  RightBlock,
  ButtonContainer,
} from './styled'

export const Header: React.FC = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  )
}
