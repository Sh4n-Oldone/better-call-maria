import React from 'react'
import styled from 'styled-components'
import { useLangStore } from 'stores'
import { getStartText } from 'utils'
import { colorScheme } from 'shared'

const BorderWrapper = styled.div`
  max-width: 110px;
  position: relative;
  background: linear-gradient(
    0deg,
    ${colorScheme.grayFamily.lightGray}, 
    rgba(0,0,0,0)
  );
  padding: 1px;
  border-radius: 12px;
`
const Button = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 86px;
  padding: 6px 10px;
  border-radius: 12px;
  color: ${colorScheme.palette.white};
  background: linear-gradient(
    ${colorScheme.gradients.transparentToBlack.degree}deg,
    ${colorScheme.gradients.transparentToBlack.start}, 
    ${colorScheme.gradients.transparentToBlack.end},
    ${colorScheme.gradients.transparentToBlack.end},
    ${colorScheme.gradients.transparentToBlack.end}
  );

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: 0;
  }
`

export const ContactMeButton: React.FC = () => {
  const currLang = useLangStore((state) => state.langTheme)

  const handleClick = () => { }

  return (
    <BorderWrapper>
      <Button onClick={handleClick}>
        {getStartText(currLang, 'callMeButton')}
      </Button>
    </BorderWrapper>
  )
}
