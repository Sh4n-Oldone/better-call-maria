import React from 'react'
import styled from 'styled-components'
import { useLangStore } from 'stores'
import { getStartText } from 'utils'
import { colorScheme } from 'shared'

const Button = styled.button`
  all: unset;
  margin-top: 42px;
  padding: 6px 10px;
  width: 200px;
  height: 44px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  text-align: center;
  color: ${colorScheme.palette.white};
  border: 1px solid ${colorScheme.grayFamily.lightGray};
  border-radius: 16px;
  background:
    linear-gradient(180deg, ${colorScheme.gradients.blackToBlue.start} 0%, ${colorScheme.gradients.blackToBlue.end} 100%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    border: 1px solid ${colorScheme.grayFamily.lightGray};
  }

  &:focus {
    outline: 0;
  }
`

export const CallMeButton: React.FC = () => {
  const currLang = useLangStore((state) => state.langTheme)

  return (
    <Button>{getStartText(currLang, 'callMeButton')}</Button>
  )
}
