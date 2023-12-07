import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import {
  Header,
  ContentBody,
  Footer,
} from 'components'
import { HeaderHeight } from 'constants'

type Props =  {
  children?: React.ReactNode
}

const Wrapper = styled.section<{ size: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  min-width: calc(100vw - ${({ size }) => size}px);
`
const ContentContainer = styled.div`
  max-width: 1920px;
  padding-top: ${HeaderHeight}px;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const ContentSwitcher: React.FC<Props> = ({ children }) => {
  const isMain = useLocation().pathname === '/'

  if (isMain) return (
    <ContentContainer>
      <Header />
      <ContentBody />
      <Footer />
    </ContentContainer>
  )

  return (
    <ContentContainer>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </ContentContainer>
  )
}

export const ScreenLayout: React.FC<Props> = ({ children }) => {
  const [scrollbarSize, setScrollbarSize] = useState(0)

  useEffect(() => {
    setScrollbarSize(window.innerWidth - document.documentElement.clientWidth)
  }, [document.documentElement.clientWidth])
  
  return (
    <Wrapper size={scrollbarSize}>
      <ContentSwitcher children={children} />
    </Wrapper>
  )
}