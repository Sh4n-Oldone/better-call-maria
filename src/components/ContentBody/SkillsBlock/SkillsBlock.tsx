import React, { useState } from 'react'
import styled from 'styled-components'
import { useLangStore } from 'stores'
import { getSkillsText } from 'utils'
import { colorScheme } from 'shared'
import { SecondaryHeadingText } from 'src/styled'
import { HeaderWrapper, ModSubtitleText, ShowUpSection } from '../shared'
import { SkillsTabs } from './SkillsTabs'

const MainWrapper = styled(ShowUpSection)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1880px;
  background-color: ${colorScheme.palette.gray};
  border-radius: 42px;
  margin-top: 20px;
  padding-top: 72px;
`

export const SkillsBlock: React.FC = () => {
	const [inView, setInView] = useState<boolean>(false)
	const currLang = useLangStore((state) => state.langTheme)

	const onChangeInView = (value: boolean) => {
		setInView(value)
	}

	return (
		<MainWrapper id='skills' inView={inView}>
			<HeaderWrapper>
				<SecondaryHeadingText>
					{getSkillsText(currLang, 'title')}
				</SecondaryHeadingText>
				<ModSubtitleText>
					{getSkillsText(currLang, 'subtitle')}
				</ModSubtitleText>
			</HeaderWrapper>

			<SkillsTabs onChangeInView={onChangeInView} />
		</MainWrapper>
	)
}
