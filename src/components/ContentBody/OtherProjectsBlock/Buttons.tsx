import React from 'react'
import styled from 'styled-components'
import { colorScheme } from 'shared'
import { useScreenSize } from 'hooks'

interface IProps {
	onNext(): void
	onPrev(): void
}

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 768px) {
    gap: 12px;
    margin-top: 20px;
  }
`
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 86px;
  height: 68px;
  border-radius: 14px;
  border: 1px solid ${colorScheme.grayFamily.gray_4};
  background: ${colorScheme.palette.white};
  box-shadow: 12px 12px 32px 10px rgba(108, 108, 108, 0.12);

  @media (max-width: 768px) {
    transform: scale(0.7);
  }
`
const ArrowImage = styled.img<{ isReverse?: boolean }>`
  height: 35px;
  ${({ isReverse }) => isReverse && 'transform: rotate(180deg);'}
`

export const LeftArrow: React.FC = () => (
	<ArrowImage src='/chevron_left.png' alt='chevron left' />
)

export const RightArrow: React.FC = () => (
	<ArrowImage src='/chevron_left.png' alt='chevron right' isReverse />
)

export const Buttons: React.FC<IProps> = ({ onNext, onPrev }) => {
	const { width } = useScreenSize()

	if (width < 1210) return null

	return (
		<ButtonsWrapper>
			<Button onClick={onPrev}>
				<ArrowImage src='/chevron_left.png' alt='chevron left' />
			</Button>
			<Button onClick={onNext}>
				<ArrowImage src='/chevron_left.png' alt='chevron right' isReverse />
			</Button>
		</ButtonsWrapper>
	)
}
