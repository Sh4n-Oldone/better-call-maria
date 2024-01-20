import React from 'react'
import styled from 'styled-components'
import { colorScheme } from 'shared'
import { useLangStore } from 'stores'
import { Langs } from 'types'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  background-color: ${colorScheme.palette.lightGreen};
  border: 1px solid ${colorScheme.grayFamily.gray_4};
  border-radius: 8px;
  gap: 10px;
  z-index: 10;
`
const TextContainer = styled.div`
  display: flex;
  gap: 4px;
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  line-height: 16.9px;
  letter-spacing: 0.13px;
  color: ${colorScheme.palette.black};
`
const Bulb = styled.img`
  margin-top: -2px;
`

export const IdeaToProfit: React.FC = () => {
	const currLang = useLangStore((state) => state.langTheme)

	const firstLine = currLang === Langs.RU ? '→ от идеи' : '→ from idea'
	const secondLine =
		currLang === Langs.RU ? '→ до реальной пользы' : '→ to real benefit'

	return (
		<Container>
			<TextContainer>
				<span>{firstLine}</span>
				<Bulb src='/emoji_bulb.png' alt='idea emoji' width={17} />
			</TextContainer>
			<TextContainer>
				<span>{secondLine}</span>
				<img src='/emoji_rocket.png' alt='rocket emoji' width={14} />
			</TextContainer>
		</Container>
	)
}
