import React from 'react'
import styled from 'styled-components'
import { useLangStore } from 'stores'
import { getStartText } from 'utils'
import { colorScheme } from 'shared'
import { CallMeModal } from 'UIComponents'
import { ContactIcon } from './ContactIcon'
import { useDisclosure } from '@chakra-ui/react'

const BorderWrapper = styled.div`
  max-width: 110px;
  position: relative;
  background: linear-gradient(
    0deg,
    ${colorScheme.grayFamily.lightGray}, 
    rgba(0,0,0,0)
  );
  padding: 1px;
  border-radius: 12px;

  @media (max-width: 1000px) {
    display: none;
  }
`
const Button = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 88px;
  padding: 6px 10px;
  border-radius: 12px;
  color: ${colorScheme.palette.white};
  background: linear-gradient(
    ${colorScheme.gradients.transparentToBlack.degree}deg,
    ${colorScheme.gradients.transparentToBlack.start}, 
    ${colorScheme.gradients.transparentToBlack.end},
    ${colorScheme.gradients.transparentToBlack.end},
    ${colorScheme.gradients.transparentToBlack.end}
  );

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: 0;
  }
`
const ButtonIcon = styled.div`
  display: none;
  padding: 6px;
  transform: scale(1.3);
  border: 1px solid #E2E8F0;
  border-radius: 0.375rem;

  > svg:hover {
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
    animation-name: shake;
    animation-duration: 700ms;
  
    @keyframes shake {
      0% {
        transform: rotate(0deg);
      }
    
      10% {
        transform: rotate(5deg) scale(1.1);
      }

      15% {
        transform: rotate(0deg);
      }

      30% {
        transform: rotate(5deg) scale(1.1);
      }

      40% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(0deg);
      }
    }
  }

  &:hover {
    background-color: #EDF2F7;
    border-color: #646cff;
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const ContactMeButton: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const currLang = useLangStore((state) => state.langTheme)

	const handleClick = () => {
		onOpen()
	}

	return (
		<>
			<BorderWrapper>
				<Button onClick={handleClick}>
					{getStartText(currLang, 'callMeButton')}
				</Button>
			</BorderWrapper>

			<ButtonIcon onClick={handleClick}>
				<ContactIcon />
			</ButtonIcon>

			<CallMeModal isOpen={isOpen} onClose={onClose} />
		</>
	)
}
