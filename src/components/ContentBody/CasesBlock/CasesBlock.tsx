import React, { useState } from 'react'
import styled from 'styled-components'
import { useLangStore } from 'stores'
import { HeaderWrapper, ShowUpSection, SubtitleText } from '../shared'
import { SecondaryHeadingText } from 'src/styled'
import { getCasesText } from 'utils'
import { colorScheme } from 'shared'
import { CasesContent } from './CasesContent'

const MainWrapper = styled(ShowUpSection)`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  width: 100%;
  max-width: 1880px;
  z-index: 10;
`
const ModSecondaryHeadingText = styled(SecondaryHeadingText)`
  color: ${colorScheme.palette.white};
  margin-top: 62px;
`
const ModSubtitleText = styled(SubtitleText)`
  max-width: 572px;
  margin-top: 16px;
  text-align: center;
  color: ${colorScheme.palette.white};
`

export const CasesBlock: React.FC = () => {
	const [inView, setInView] = useState<boolean>(false)
	const currLang = useLangStore((state) => state.langTheme)

	const onChangeInView = (value: boolean) => {
		setInView(value)
	}

	return (
		<MainWrapper id='cases' inView={inView}>
			<HeaderWrapper>
				<ModSecondaryHeadingText>
					{getCasesText(currLang, 'title')}
				</ModSecondaryHeadingText>
				<ModSubtitleText>
					{getCasesText(currLang, 'subtitle')}
				</ModSubtitleText>
			</HeaderWrapper>

			<CasesContent onChangeInView={onChangeInView} />
		</MainWrapper>
	)
}
