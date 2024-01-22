import React from 'react'
import styled from 'styled-components'

interface IProps {
	icon: string
	text: string
	link: string
}

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 128px;
  height: 56px;
  gap: 7px;
  border-radius: 12px;
  border: 1px solid #E6E6E6;
  background: #FFF;
  box-shadow: 12px 12px 32px 10px rgba(108, 108, 108, 0.12);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f5f5f5;
  }
`
const Icon = styled.img`
  margin-top: 2px;
  height: 16px;
`
const Text = styled.span`
  color: #8F81F3;
  font-family: 'Noto Sans Symbols Variable', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.14px;
`

export const BlockLink: React.FC<IProps> = ({ icon, text, link }) => {
	const handleClick = () => {
		window.open(link, '_blank')
	}

	return (
		<Container onClick={handleClick}>
			<Icon src={icon} alt='mini social icon' />
			<Text>{text}</Text>
		</Container>
	)
}
