import React from 'react'
import styled from 'styled-components'
import { colorScheme } from 'shared'
import { Heart } from './Heart'
import { InnerContainerContent } from './InnerContainerContent'

const MainContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 280px;
  max-width: 50%;
  aspect-ratio: 280/150;
  right: 0.5%;
  bottom: 2%;
  cursor: pointer;

  &:hover > div {
    transform: rotateX(180deg);
    transition: transform 0.5s;
  }

  @keyframes dissolve {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`
const ContentContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  transition: transform 1s;
  transform-style: preserve-3d;
`
const InnerContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  padding: 7% 5%;
  background-color: ${colorScheme.palette.white};
  border: 1px solid #D7D7D7;
  border-radius: 24px;
  box-shadow: 6px 6px 12px 0px rgba(180, 180, 180, 0.25);
  backface-visibility: hidden;

  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
  }
`
const AltInnerContainer = styled(InnerContainer)`
  transform: rotateY( 180deg );
`
const AltInnerContainerContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(180deg);

  @media (max-width: 800px) {
    transform: rotate(180deg) scale(0.7);
  }
`

export const BusinessCard: React.FC = () => (
	<MainContainer>
		<ContentContainer>
			<InnerContainer>
				<InnerContainerContent />
			</InnerContainer>
			<AltInnerContainer>
				<AltInnerContainerContent>
					<Heart />
				</AltInnerContainerContent>
			</AltInnerContainer>
		</ContentContainer>
	</MainContainer>
)
