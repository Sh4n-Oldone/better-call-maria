import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { MappedOtherProjectsProject } from 'utils'
import { useScreenSize } from 'hooks'
import { Carousel as MyCarousel } from './Carousel'
import { SmallScreenCarousel } from './SmallScreenCarousel'

interface IProps {
	items: MappedOtherProjectsProject[]
	currentItem: number
	onChangeInView(value: boolean): void
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
	onChangeInView,
}) => {
	const { ref, inView } = useInView()
	const { width } = useScreenSize()

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		onChangeInView(inView)
	}, [inView])

	if (width >= 1210)
		return (
			<CarouselWrapper ref={ref}>
				<MyCarousel currentItem={currentItem} items={items} />
			</CarouselWrapper>
		)

	return (
		<CarouselWrapper ref={ref}>
			<SmallScreenCarousel items={items} />
		</CarouselWrapper>
	)
}
