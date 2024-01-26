import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
`
const Blob = styled.img`
  position: absolute;
  z-index: 1;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
`
const SmallBlob = styled(Blob)`
  width: 30%;
  animation-name: left-tilting;
  animation-duration: 5s;
  left: 0;
  top: 0;

  @keyframes left-tilting {
    from {
      opacity: 0.7;
    }

    50% {
      opacity: 1;
      filter: blur(1px);
    }

    to {
      transform: rotate(7deg) scale(1.1) translateX(-10px) translateY(10px);
      opacity: 0.8;
    }
  }
`
const BigBlob = styled(Blob)`
  width: 50%;
  animation-name: right-tilting;
  animation-duration: 7s;
  right: 5px;
  top: 5px;

  @keyframes right-tilting {
    from {
      transform: rotate(0deg);
      opacity: 0.7;
    }
  
    50% {
      opacity: 1;
    }
  
    to {
      transform: rotate(-3deg) scale(0.9) translateX(10px) translateY(10px);
      opacity: 0.8;
      filter: hue-rotate(30deg);
    }
  }
`

export const CasesBlobsScreen: React.FC = () => (
	<MainWrapper>
		<SmallBlob src='/blob_small.png' loading='lazy' />
		<BigBlob src='/blob_big.png' loading='lazy' />
	</MainWrapper>
)
