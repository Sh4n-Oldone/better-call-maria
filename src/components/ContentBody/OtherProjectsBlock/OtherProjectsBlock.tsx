import React, { useState } from 'react'
import styled from 'styled-components'
import { useLangStore } from 'stores'
import { getOtherProjectsProjects, getOtherProjectsText } from 'utils'
import { HeaderWrapper, ModSubtitleText, ShowUpSection } from '../shared'
import { SecondaryHeadingText } from 'src/styled'
import { ProjectsCarousel } from './ProjectsCarousel'
import { Buttons } from './Buttons'
import { CopyrightFooter } from './CopyrightFooter'
import { colorScheme } from 'shared'

const MainWrapper = styled(ShowUpSection)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1880px;
  margin-top: 20px;
  border-radius: 42px;
  background: linear-gradient(180deg, ${colorScheme.gradients.grayToWhite.start} 0%, ${colorScheme.gradients.grayToWhite.end} 70%);
  overflow: hidden;
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
const BlobWrapper = styled.div`
  position: relative;
  width: 100%;
`
const Blob = styled.img`
  position: absolute;
  z-index: 0;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  width: 100%;
  animation-name: hop;
  animation-duration: 7s;
  left: 0;
  top: 20px;

  @keyframes hop {
    from {
      opacity: 0.7;
    }

    50% {
      opacity: 1;
      filter: blur(1px);
    }

    to {
      transform: rotate(13deg) scale(1.1) translateY(7px);
      filter: hue-rotate(40deg);
      opacity: 0.8;
    }
  }
`

export const OtherProjectsBlock: React.FC = () => {
	const [currentItem, setCurrentItem] = useState(0)
	const [inView, setInView] = useState<boolean>(false)
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

	const onChangeInView = (value: boolean) => {
		setInView(value)
	}

	return (
		<MainWrapper id='projects' inView={inView}>
			<BlobWrapper>
				<Blob src='/blob_mega.png' alt='blob' />
			</BlobWrapper>
			<InnerWrapper>
				<HeaderWrapper>
					<SecondaryHeadingText>
						{getOtherProjectsText(currLang, 'title')}
					</SecondaryHeadingText>
					<ModSubtitleText>
						{getOtherProjectsText(currLang, 'subtitle')}
					</ModSubtitleText>
				</HeaderWrapper>

				<ProjectsCarousel
					items={projects}
					currentItem={currentItem}
					onChangeInView={onChangeInView}
				/>
			</InnerWrapper>

			<Buttons onNext={handleNextClick} onPrev={handlePrevClick} />

			<CopyrightFooter />
		</MainWrapper>
	)
}
