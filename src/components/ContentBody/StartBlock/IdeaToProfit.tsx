import React from 'react'
import styled from 'styled-components'
import { colorScheme } from 'shared'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 273px;
  padding: 8px 10px;
  background-color: ${colorScheme.palette.lightGreen};
  border: 1px solid ${colorScheme.grayFamily.gray_4};
  border-radius: 8px;
`

export const IdeaToProfit: React.FC = () => {
  return (
    <Container>IdeaToProfit</Container>
  )
}
