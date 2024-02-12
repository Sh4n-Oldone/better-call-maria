import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Switch } from '@chakra-ui/react'
import { useLangStore } from 'stores'
import { Langs } from 'types'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  font-size: 14px;
  color: #000000;
`
const SizeContainer = styled.div<{ toLeft?: boolean }>`
  width: 50px;

  ${({ toLeft }) =>
		toLeft &&
		`display: flex;
    justify-content: flex-end;`}
`
const EasterEgg = styled.span`
  opacity: 0.05;
`
const DevHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 152px;
  justify-content: flex-end;
`
const DevHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
  cursor: pointer;
`
const Logo = styled.img`
  height: 18px;
	width: 81px;
  cursor: pointer;
`

export const BackToMain: React.FC = () => {
	const navigate = useNavigate()

	const currLang = useLangStore((state) => state.langTheme)
	const switchLangTheme = useLangStore((state) => state.switchLangTheme)

	const line = currLang === Langs.RU ? 'Назад к →' : 'Back to →'
	const easterEgg = currLang === Langs.RU ? 'IDDQD' : 'IDKFA'

	const handleLogoClick = () => {
		navigate('/')
	}

	return (
		<Wrapper>
			<SizeContainer>
				<EasterEgg>{easterEgg}</EasterEgg>
			</SizeContainer>
			<DevHeaderContainer>
				<DevHeader onClick={handleLogoClick}>
					<span>{line}</span>
					<Logo src='/xhunter_logo.png' alt='logo' />
				</DevHeader>
			</DevHeaderContainer>
			<SizeContainer toLeft>
				<Switch
					defaultChecked={currLang === Langs.EN}
					onChange={switchLangTheme}
					colorScheme='purple'
				/>
			</SizeContainer>
		</Wrapper>
	)
}
