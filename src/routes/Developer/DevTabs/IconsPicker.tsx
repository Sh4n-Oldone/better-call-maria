import React from 'react'
import styled from 'styled-components'
import { ContactsIcon, PersonIcon, TechIcon } from './DevIcons'

interface IProps {
	isActive: boolean
	index: number
	onClick(index: number): void
}

const baseColor = '#D4AF37'
const activeColor = '#764d80'

const DevIconContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  ${({ isActive }) =>
		isActive &&
		`border: 2px dotted ${activeColor};
  border-radius: 50%;
  border-top: none;
  border-bottom: none;`}
  cursor: pointer;
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
		<DevIcon index={index} color={isActive ? activeColor : baseColor} />
	</DevIconContainer>
)
