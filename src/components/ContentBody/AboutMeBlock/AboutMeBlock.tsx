import React, { useState } from 'react'
import styled from 'styled-components'
import { useLangStore } from 'stores'
import { getAboutMeText } from 'utils'
import { SecondaryHeadingText } from 'src/styled'
import { colorScheme } from 'shared'
import { AboutMeContent } from './AboutMeContent'
import { ShowUpSection } from '../shared'

const MainWrapper = styled(ShowUpSection)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;
  width: 100%;
  max-width: 1880px;
  background-color: ${colorScheme.palette.gray};
  border-radius: 42px;
  margin-top: 20px;
  padding-top: 72px;
`

export const AboutMeBlock: React.FC = () => {
	const [inView, setInView] = useState<boolean>(false)
	const currLang = useLangStore((state) => state.langTheme)

	const onChangeInView = (value: boolean) => {
		setInView(value)
	}

	return (
		<MainWrapper id='about-me' inView={inView}>
			<SecondaryHeadingText>
				{getAboutMeText(currLang, 'title')}
			</SecondaryHeadingText>
			<AboutMeContent onChangeInView={onChangeInView} />
		</MainWrapper>
	)
}
