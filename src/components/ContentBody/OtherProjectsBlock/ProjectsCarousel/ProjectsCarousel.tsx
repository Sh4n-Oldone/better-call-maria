import React from 'react'
import styled from 'styled-components'
import { MappedOtherProjectsProject } from 'utils'
import { useScreenSize } from 'hooks'
import { Carousel as MyCarousel } from './Carousel'
import { SmallScreenCarousel } from './SmallScreenCarousel'

interface IProps {
	items: MappedOtherProjectsProject[]
	currentItem: number
}

const CarouselWrapper = styled.div`
  display: block;
  margin-top: 36px;
  height: 100%;
  width: 100%;
  padding-bottom: 170px;
  overflow: hidden;

  @media (max-width: 1210px) {
    padding-bottom: 0;
  }

  @media (max-width: 642px) {
    padding-bottom: 24px;
  }
`

export const ProjectsCarousel: React.FC<IProps> = ({
	items,
	currentItem,
}) => {
	const { width } = useScreenSize()

	if (width >= 1210)
		return (
			<CarouselWrapper>
				<MyCarousel currentItem={currentItem} items={items} />
			</CarouselWrapper>
		)

	return (
		<CarouselWrapper>
			<SmallScreenCarousel items={items} />
		</CarouselWrapper>
	)
}
