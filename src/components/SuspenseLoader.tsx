import React from 'react'
import styled from 'styled-components'
import { Spinner } from '@chakra-ui/react'
import { darkLilac, goldColor, lightSkyAquamarine } from 'shared'
import { useLangStore } from 'stores'
import { Langs } from 'types'

interface IProps {
	children?: React.ReactNode
	spinnerColor?: string
	spinnerEmptyColor?: string
}

const LoaderWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
  height: 100%;
  width: 100%;

  > div {
    opacity: 0.5;
  }
`
const SuspenseText = styled.span`
  margin-top: 20px;
  font-size: 1.5rem;
  color: ${darkLilac};
  background: linear-gradient(to right, ${darkLilac}, ${goldColor}); 
            -webkit-text-fill-color: transparent; 
            -webkit-background-clip: text; 
`

const EN_TO_DEV_TEXT = 'Thanks for stopping by. Loading Developer Page.'
const RU_TO_DEV_TEXT = 'Спасибо за визит. Загружаем страницу разработчика.'

export const SuspenseLoader: React.FC<IProps> = ({
	children,
	spinnerColor,
	spinnerEmptyColor,
}) => (
	<LoaderWrapper>
		<Spinner
			thickness='5px'
			speed='0.3s'
			emptyColor={spinnerEmptyColor || 'gray.200'}
			color={spinnerColor || 'black'}
			size='xl'
		/>
		{children}
	</LoaderWrapper>
)

export const DevLoader: React.FC = () => {
	const currLang = useLangStore((state) => state.langTheme)

	return (
		<SuspenseLoader
			spinnerColor={darkLilac}
			spinnerEmptyColor={lightSkyAquamarine}
		>
			<SuspenseText>
				{currLang === Langs.EN ? EN_TO_DEV_TEXT : RU_TO_DEV_TEXT}
			</SuspenseText>
		</SuspenseLoader>
	)
}
