import React from 'react'
import styled from 'styled-components'
import { darkLilac, goldColor } from 'shared'
import { ContactsIcon, PersonIcon, TechIcon } from './DevIcons'

interface IProps {
	isActive: boolean
	index: number
	onClick(index: number): void
}

const DevIconContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  ${({ isActive }) =>
		isActive &&
		`border: 2px dotted ${darkLilac};
  border-radius: 50%;
  border-top: none;
  border-bottom: none;
  transform: scale(1.05);`}
  cursor: pointer;

  &:hover {
    ${({ isActive }) =>
			!isActive &&
			`border: 2px dotted ${goldColor};
    border-radius: 50%;
    border-top: none;
    border-bottom: none;
    transition: all 0.3s ease;
    transform: scale(1.05);`}
  }
`

const DevIcon: React.FC<{ index: number; color?: string }> = ({
	index,
	color,
}) => {
	switch (index) {
		case 0:
			return <TechIcon color={color} width={38} />
		case 1:
			return <PersonIcon color={color} height={40} />
		case 2:
			return <ContactsIcon color={color} width={38} />
		default:
			return null
	}
}

export const IconsPicker: React.FC<IProps> = ({
	onClick,
	index,
	isActive,
}) => (
	<DevIconContainer onClick={() => onClick(index)} isActive={isActive}>
		<DevIcon index={index} color={isActive ? darkLilac : goldColor} />
	</DevIconContainer>
)
