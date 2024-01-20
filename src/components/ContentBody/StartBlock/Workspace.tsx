import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: 100%;
  max-width: 900px;
  height: 100%;
  z-index: 8;

  /* &:not(:hover) */
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
      transform: scale(1.04) translateY(-1%);
    }
  }

  &:hover {
    animation: none;
    transition: all 500ms cubic-bezier(0.420, 0.000, 0.580, 1.000);
    transform: scale(1.08) translateY(-1%);
  }
`

export const Workspace: React.FC = () => (
	<Image src='/workspace_compressed.png' alt='Workspace' />
)
