import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 9;
`
const AbsoluteImage = styled.img`
  position: absolute;
  z-index: 9;
`
const ItemsImage = styled(AbsoluteImage)`
  width: 154px;
  max-width: 10%;
  aspect-ratio: 154/136;
  bottom: 20%;
  left: 2%;

  animation: items-bounce 5s ease-in-out infinite alternate;

  @keyframes items-bounce {
    0% {
      transform: none;
    }

    100% {
      transform: translateY(-35px) rotate(-10deg);
    }
  }

  @media (max-width: 800px) {
    bottom: 15%;
  }
`
const LetterImage = styled(AbsoluteImage)`
  width: 75px;
  max-width: 7%;
  aspect-ratio: 1/1;
  bottom: 35%;
  left: 12%;

  animation: letter-bounce 7s ease-in-out infinite alternate;

  @keyframes letter-bounce {
    0% {
      transform: none;
    }

    100% {
      transform: translateY(-45px) rotate(3deg);
    }
  }

  @media (max-width: 800px) {
    bottom: 15%;
  }
`
const SwitchImage = styled(AbsoluteImage)`
  width: 45px;
  max-width: 7%;
  aspect-ratio: 1.5/1;
  bottom: 40%;
  left: 28%;

  animation: switch-bounce 3s ease-in-out infinite alternate;

  @keyframes switch-bounce {
    0% {
      transform: none;
    }

    100% {
      transform: translateY(-24px) rotate(8deg);
    }
  }

  @media (max-width: 800px) {
    bottom: 18%;
  }
`
const ToolboxImage = styled(AbsoluteImage)`
  width: 45px;
  max-width: 9%;
  aspect-ratio: 1/1.5;
  bottom: 45%;
  right: 23%;

  animation: switch-bounce 5s ease-in-out infinite alternate;

  @keyframes switch-bounce {
    0% {
      transform: none;
    }

    100% {
      transform: translateY(20px) rotate(9deg);
    }
  }

  @media (max-width: 800px) {
    bottom: 23%;
  }
`
const PointerImage = styled(AbsoluteImage)`
  width: 140px;
  max-width: 19%;
  aspect-ratio: 140/123;
  bottom: 30%;
  right: 7%;

  animation: pointer-bounce 9s ease-in-out infinite alternate;

  @keyframes pointer-bounce {
    0% {
      transform: none;
    }

    100% {
      transform: translateY(17px) rotate(6deg);
    }
  }

  @media (max-width: 800px) {
    bottom: 16%;
  }
`

export const FloatingPictures: React.FC = () => (
	<MainWrapper>
		<ItemsImage src='/random-pics_items.png' alt='items pic' />
		<LetterImage src='/random-pics_letter.png' alt='letter pic' />
		<SwitchImage src='/random-pics_switch.png' alt='switch pic' />
		<ToolboxImage src='/random-pics_toolbox.png' alt='toolbox pic' />
		<PointerImage src='/random-pics_pointer.png' alt='pointer pic' />
	</MainWrapper>
)
