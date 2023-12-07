import React from 'react'
import styled from 'styled-components'
import { useLangStore } from 'stores'
import { Langs } from 'types'

const LangBtn = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 6px 10px;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: 0;
  }
`

const ButtonText = styled.span<{ isActive: boolean }>`
  ${({ isActive }) => isActive && 'font-weight: 600;'}
`

export const LangButton: React.FC = () => {
  const switchLangTheme = useLangStore((state) => state.switchLangTheme)
  const langTheme = useLangStore((state) => state.langTheme)

  return (
    <LangBtn onClick={switchLangTheme}>
      <ButtonText isActive={langTheme === Langs.EN}>en</ButtonText>
      <ButtonText isActive={langTheme === Langs.RU}>рус</ButtonText>
    </LangBtn>
  )
}
