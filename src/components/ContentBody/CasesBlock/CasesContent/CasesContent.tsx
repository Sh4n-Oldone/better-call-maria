import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { useLangStore } from 'stores'
import { getCasesCards } from 'utils'
import { CasesCards } from './CasesCards'

interface IProps {
	onChangeInView(value: boolean): void
}

const CasesContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1712px;
  border-radius: 42px 42px 0 0;
  margin: 42px auto 0;
  z-index: 10;
  box-shadow: 0px 170px 200px 0px rgba(169, 169, 169, 0.1);
  overflow: hidden;
`
const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1712px;
  margin-top: auto;
`
const Checkers = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  max-width: 1712px;
  height: 100%;

  background-color: transparent;
  opacity: 0.2;
  background-image: 
    linear-gradient(rgba(105, 105, 105, 0.5) 1px, transparent 1px),
    linear-gradient(to right, rgba(105, 105, 105, 0.5) 1px, transparent 1px);
  background-size: 32px 32px;
  background-position: top 32px right 32px;
`
const ContentContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 80px;
`

export const CasesContent: React.FC<IProps> = ({ onChangeInView }) => {
	const { ref, inView } = useInView()
	const currLang = useLangStore((state) => state.langTheme)

	const cards = getCasesCards(currLang)

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		onChangeInView(inView)
	}, [inView])

	return (
		<CasesContentWrapper>
			<MainContainer>
				<Checkers />
				<ContentContainer ref={ref}>
					<CasesCards cards={cards} />
				</ContentContainer>
			</MainContainer>
		</CasesContentWrapper>
	)
}
