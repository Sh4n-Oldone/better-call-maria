import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { CaseRoutes } from 'constants'
import { CasesCardItem } from 'utils'

interface IProps {
	cards: CasesCardItem[]
}

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 32px;
  width: 100%;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 342px;
  margin: 0 16px;
  background-color: #fff;
  border-radius: 32px 32px 0 0;
  backdrop-filter: blur(10px);
  background: linear-gradient(90deg, rgba(40, 40, 40, 0.6), rgba(0, 0, 0, 0.6));
  transition: all 500ms cubic-bezier(0.420, 0.000, 0.580, 1.000);
  cursor: pointer;

  &:hover {
    transform: scale(1.1) translateY(-23px);
  }
`
const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 36px 32px;
`
const CardDate = styled.span`
  color: #8E8E8E;
  font-family: Inter;
  font-size: 13px;
  font-weight: 400;
  line-height: 16.9px;
`
const CardTitle = styled.span`
  color: #FFF;
  font-family: Noto Sans Symbols;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
`
const CardSubtitle = styled(CardDate)`
  font-size: 14px;
  line-height: 24px;
`

const images = [
	'/cases_preview_1.png',
	'/cases_preview_2.png',
	'/cases_preview_3.png',
	'/cases_preview_4.png',
]

const getCaseRoute = (index: number): string => {
	switch (index) {
		case 0:
			return CaseRoutes.DHRP
		case 1:
			return CaseRoutes.ATHENA
		case 2:
			return CaseRoutes.ADMIXER
		case 3:
			return CaseRoutes.DESIGN
		default:
			return ''
	}
}

export const CasesCards: React.FC<IProps> = ({ cards }) => {
	const navigate = useNavigate()
	const onCardClick = (index: number) => {
		navigate(`/case/${getCaseRoute(index)}`)
	}

	return (
		<CardsContainer>
			{cards.map(({ title, subtitle, date }, index) => (
				<Card key={title} onClick={() => onCardClick(index)}>
					<CardHeader>
						<CardDate>{date}</CardDate>
						<CardTitle>{title}</CardTitle>
						<CardSubtitle>{subtitle}</CardSubtitle>
					</CardHeader>
					<img src={images[index]} alt='case preview' />
				</Card>
			))}
		</CardsContainer>
	)
}
