import React, { useState } from 'react'
import styled from 'styled-components'
import { useLangStore } from 'stores'
import { getOtherProjectsProjects, getOtherProjectsText } from 'utils'
import { HeaderWrapper, ModSubtitleText } from '../shared'
import { SecondaryHeadingText } from 'src/styled'
import { ProjectsCarousel } from './ProjectsCarousel'
import { Buttons } from './Buttons'
import { CopyrightFooter } from './CopyrightFooter'
import { colorScheme } from 'shared'

const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1880px;
  margin-top: 20px;
  border-radius: 42px;
  background: linear-gradient(180deg, ${colorScheme.gradients.grayToWhite.start} 0%, ${colorScheme.gradients.grayToWhite.end} 70%);
`
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 72px;
  margin-top: 130px;
  width: 100%;
  max-width: 1470px;
  border-radius: 56px;
  background: linear-gradient(0deg, ${colorScheme.gradients.grayToWhite.start} 0%, ${colorScheme.gradients.grayToWhite.end} 90%);
  backdrop-filter: blur(21px);

  @media (max-width: 768px) {
    margin-top: 90px;
    padding: 32px 5px 0;
  }
`

export const OtherProjectsBlock: React.FC = () => {
	const [currentItem, setCurrentItem] = useState(0)
	const currLang = useLangStore((state) => state.langTheme)
	const projects = getOtherProjectsProjects(currLang)

	const handleNextClick = () => {
		setCurrentItem((prev) =>
			prev + 1 > projects.length - 1 ? 0 : prev + 1,
		)
	}

	const handlePrevClick = () => {
		setCurrentItem((prev) =>
			prev - 1 < 0 ? projects.length - 1 : prev - 1,
		)
	}

	return (
		<MainWrapper id='projects'>
			<InnerWrapper>
				<HeaderWrapper>
					<SecondaryHeadingText>
						{getOtherProjectsText(currLang, 'title')}
					</SecondaryHeadingText>
					<ModSubtitleText>
						{getOtherProjectsText(currLang, 'subtitle')}
					</ModSubtitleText>
				</HeaderWrapper>

				<ProjectsCarousel items={projects} currentItem={currentItem} />
			</InnerWrapper>

			<Buttons onNext={handleNextClick} onPrev={handlePrevClick} />

			<CopyrightFooter />
		</MainWrapper>
	)
}
