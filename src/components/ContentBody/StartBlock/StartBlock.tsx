import React from 'react'
import { colorScheme } from 'shared'
import styled from 'styled-components'
import { IdeaToProfit } from './IdeaToProfit'
import { MyTitle, MySubTitle } from './MyTitle'
import { CallMeButton } from './CallMeButton'
import { Workspace } from './Workspace'

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1880px;
  background-color: ${colorScheme.palette.gray};
  border-radius: 42px;
`
const MainContainerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 90%;
  /* height: 800px; */
  margin-top: auto;
`
const Checkers = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  height: 800px;

  background-color: transparent;
  opacity: 0.2;
  background-image: linear-gradient(rgba(105, 105, 105, 0.3) 1px, transparent 1px), linear-gradient(to right, rgba(105, 105, 105, 0.3) 1px, transparent 1px);
  background-size: 20px 20px;
  background-position: top 20px left 20px;
  box-shadow: inset 0px 60px 50px 50px ${colorScheme.palette.gray};
`
const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 100%;
  padding-top: 130px;
`

export const StartBlock: React.FC = () => {
  return (
    <MainWrapper>
      <MainContainerWrapper>
        <Checkers />
        <ContentContainer>
          <IdeaToProfit />
          <MyTitle />
          <MySubTitle />
          <CallMeButton />
          <Workspace />
        </ContentContainer>
      </MainContainerWrapper>
    </MainWrapper>
  )
}
