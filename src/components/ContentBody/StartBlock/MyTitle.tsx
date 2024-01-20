import React from 'react'
import styled from 'styled-components'
import { HeadingText } from 'src/styled'
import { useLangStore } from 'stores'
import { getStartText } from 'utils'
import { SubtitleText } from '../shared'

const TitleContainer = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 90%;
  max-width: 990px;
  margin-top: 14px;

  @media (max-width: 856px) {
    width: 100%;
  }
`
const SubtitleContainer = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 75%;
  max-width: 686px;
  margin-top: 25px;

  @media (max-width: 856px) {
    width: 90%;
  }
`

export const MyTitle: React.FC = () => {
	const currLang = useLangStore((state) => state.langTheme)

	return (
		<TitleContainer>
			<HeadingText>{getStartText(currLang, 'title')}</HeadingText>
		</TitleContainer>
	)
}

export const MySubTitle: React.FC = () => {
	const currLang = useLangStore((state) => state.langTheme)

	return (
		<SubtitleContainer>
			<SubtitleText>{getStartText(currLang, 'subtitle')}</SubtitleText>
		</SubtitleContainer>
	)
}
