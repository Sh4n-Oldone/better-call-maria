import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: 100%;
  height: 100%;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  animation-name: breathe;
  animation-duration: 5s;

  @keyframes breathe {
    from {
      transform: scale(1);
    }

    to {
      transform: scale(1.04) translateY(10px);
    }
  }
`

export const Workspace: React.FC = () => (
	<Image src='/workspace_compressed.png' alt='Workspace' />
)
