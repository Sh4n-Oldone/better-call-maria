import React, { useState } from 'react'
import styled from 'styled-components'
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
} from '@chakra-ui/react'
import { useLangStore } from 'stores'
import { getAboutMeAccordion } from 'utils'
import { colorScheme } from 'shared'

const MainContainer = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  height: 100%;
  flex: 1.05;

  @media (max-width: 850px) {
    justify-content: center;
  }
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 610px;

  @media (max-width: 850px) {
    padding-bottom: 20px;
  }
`
const TextContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 27px;
  width: 100%;
`
const ControllableWrapper = styled.span<{ isActive: boolean }>`
  > button:hover {
    ${({ isActive }) =>
			isActive &&
			`
      background-color: #FFF;
      cursor: default;
    `}
  }
`
const StyledAccordionButton = styled(AccordionButton)<{
	isActive: boolean
}>`
  &:hover {
    border-color: transparent;
  }

  &:focus {
    outline: none;
  }
`
const StyledBox = styled.span<{ isActive: boolean }>`
  display: flex;
  flex: 1;
  text-align: left;
  font-size: 22px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.66px;

  color: ${({ isActive }) =>
		isActive
			? colorScheme.grayFamily.darkGray
			: colorScheme.grayFamily.lightGray};
`
const StyledAccordionPanel = styled(AccordionPanel)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  background-color: #FFF;
  border-radius: 12px;
`

const getAccordionItemStyles = (isActive: boolean) => ({
	background: isActive ? '#FFF' : colorScheme.palette.gray,
	border: `1px solid ${colorScheme.grayFamily.gray_2}`,
	borderRadius: isActive ? '0 12px 12px 0' : '12px',
	borderLeft: isActive
		? `3px solid ${colorScheme.palette.black}`
		: `1px solid ${colorScheme.grayFamily.gray_2}`,
})

export const InfoPart: React.FC = () => {
	const [openItem, setOpenItem] = useState<number>(0)
	const currLang = useLangStore((state) => state.langTheme)
	const accordionItems = getAboutMeAccordion(currLang)

	const handleItemClick = (index: number) => {
		setOpenItem(index)
	}

	return (
		<MainContainer>
			<ContentContainer>
				<Accordion defaultIndex={0} onChange={handleItemClick}>
					{accordionItems.map((item, index) => (
						<AccordionItem
							key={item.title}
							m={4}
							style={getAccordionItemStyles(index === openItem)}
						>
							<ControllableWrapper isActive={index === openItem}>
								<StyledAccordionButton
									padding={'10px 15px'}
									isActive={index === openItem}
								>
									<StyledBox isActive={index === openItem}>
										{item.title}
									</StyledBox>
									<AccordionIcon />
								</StyledAccordionButton>
							</ControllableWrapper>
							<StyledAccordionPanel pb={4}>
								{item.content.map((text) => (
									<TextContentContainer key={text}>
										<Box as='span' textAlign='left'>
											{text}
										</Box>
									</TextContentContainer>
								))}
							</StyledAccordionPanel>
						</AccordionItem>
					))}
				</Accordion>
			</ContentContainer>
		</MainContainer>
	)
}
