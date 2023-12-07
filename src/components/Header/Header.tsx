import React from 'react'
import { Navigation } from './components'
import {
  Wrapper,
  LogoContainer,
  RightBlock,
  SwitchContainer,
  ContactMeButton,
} from './styled'

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <LogoContainer>Logo</LogoContainer>
      <Navigation />
      <RightBlock>
        <SwitchContainer>Switch</SwitchContainer>
        <ContactMeButton>Contact me</ContactMeButton>
      </RightBlock>
    </Wrapper>
  )
}
