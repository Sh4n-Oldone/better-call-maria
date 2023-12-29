import React from 'react'
import styled from 'styled-components'
import { useLangStore } from 'stores'
import { getSkillsText } from 'utils'
import { colorScheme } from 'shared'
import { SecondaryHeadingText } from 'src/styled'
import { SubtitleText } from '../shared'
// import { SkillsTabs } from './SkillsTabs'

const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1880px;
  background-color: ${colorScheme.palette.gray};
  border-radius: 42px;
  margin-top: 20px;
  padding-top: 72px;
`
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`
const ModSubtitleText = styled(SubtitleText)`
  max-width: 572px;
  margin-top: 16px;
  text-align: center;
`

export const SkillsBlock: React.FC = () => {
	const currLang = useLangStore((state) => state.langTheme)

	return (
		<MainWrapper id='skills'>
			<HeaderWrapper>
				<SecondaryHeadingText>
					{getSkillsText(currLang, 'title')}
				</SecondaryHeadingText>
				<ModSubtitleText>
					{getSkillsText(currLang, 'subtitle')}
				</ModSubtitleText>
			</HeaderWrapper>

			{/* <SkillsTabs /> */}
		</MainWrapper>
	)
}
