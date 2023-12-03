import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from 'components'
import { HeaderHeight } from 'constants'
import { RouteNames } from 'types'

type Props =  {
  children?: React.ReactNode
}

const Wrapper = styled.section`
  font-family: Montserrat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
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

export const ScreenLayout: React.FC<Props> = ({ children }) => {
  const isMain = useLocation().pathname === '/'
  const navigate = useNavigate()

  useEffect(() => {
    if (isMain) {
      navigate(`/${RouteNames.START}`)
    }
  
  }, [isMain])
  
  return (
  <Wrapper>
    <ContentContainer>
      <Header />
      <Content>{children}</Content>
    </ContentContainer>
  </Wrapper>
)
}