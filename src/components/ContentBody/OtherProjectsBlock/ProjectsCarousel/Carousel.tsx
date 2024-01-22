import React from 'react'
import styled from 'styled-components'
import { MappedOtherProjectsProject } from 'utils'
import { CarouselItem } from './CarouselItem'

interface IProps {
	items: MappedOtherProjectsProject[]
	currentItem: number
}

const CarouselCurrentItemsContainer = styled.div`
  position: relative;
  display: flex;
  gap: 2%;
  height: 100%;
  width: 154%;
  transition: all 0.2s ease-in-out;
`

export const Carousel: React.FC<IProps> = ({ items, currentItem }) => {
	const prevItemIndex =
		currentItem - 1 < 0 ? items.length - 1 : currentItem - 1
	const nextItemIndex =
		currentItem + 1 > items.length - 1 ? 0 : currentItem + 1
	return (
		<CarouselCurrentItemsContainer>
			<CarouselItem
				dates={items[prevItemIndex].dates}
				title={items[prevItemIndex].title}
				subtitle={items[prevItemIndex].subtitle}
				index={prevItemIndex}
				isCurrent={false}
				isLeft={true}
			/>
			<CarouselItem
				dates={items[currentItem].dates}
				title={items[currentItem].title}
				subtitle={items[currentItem].subtitle}
				index={currentItem}
				isCurrent={true}
			/>
			<CarouselItem
				dates={items[nextItemIndex].dates}
				title={items[nextItemIndex].title}
				subtitle={items[nextItemIndex].subtitle}
				index={nextItemIndex}
				isCurrent={false}
				isLeft={false}
			/>
		</CarouselCurrentItemsContainer>
	)
}
