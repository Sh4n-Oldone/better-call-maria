import React from 'react'
import { Navigation } from './components'
import {
  Wrapper,
  LogoContainer,
  SwitchContainer,
  ContactMeButton,
} from './styled'

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <LogoContainer>Logo</LogoContainer>
      <Navigation />
      <SwitchContainer>Switch</SwitchContainer>
      <ContactMeButton>Contact me</ContactMeButton>
    </Wrapper>
  )
}
