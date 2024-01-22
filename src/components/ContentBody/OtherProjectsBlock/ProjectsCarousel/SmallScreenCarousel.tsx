import React from 'react'
import styled from 'styled-components'
import Carousel from 'nuka-carousel'
import { MappedOtherProjectsProject } from 'utils'
import { CarouselItem } from './CarouselItem'
import { LeftArrow, RightArrow } from '../Buttons'

interface IProps {
	items: MappedOtherProjectsProject[]
}

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 556px;
  padding: 0 1%;

  > .slider-container > div:nth-child(4) > .slider-control-bottomcenter > div {
    gap: 8px;
  }
`
const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 12px;
  border-radius: 8px;
  background-color: #aeaeaeab;
  cursor: pointer;
`

export const SmallScreenCarousel: React.FC<IProps> = ({ items }) => {
	return (
		<CarouselWrapper>
			<Carousel
				style={{ margin: '0 auto', width: '90%' }}
				renderCenterLeftControls={({ previousSlide }) => (
					<ArrowContainer onClick={previousSlide}>
						<LeftArrow />
					</ArrowContainer>
				)}
				renderCenterRightControls={({ nextSlide }) => (
					<ArrowContainer onClick={nextSlide}>
						<RightArrow />
					</ArrowContainer>
				)}
				speed={300}
				slidesToShow={1}
				wrapAround={true}
			>
				{items.map(({ dates, title, subtitle }, index) => (
					<CarouselItem
						key={title}
						dates={dates}
						title={title}
						subtitle={subtitle}
						index={index}
						isCurrent
						isSimpleWrapper
					/>
				))}
			</Carousel>
		</CarouselWrapper>
	)
}
