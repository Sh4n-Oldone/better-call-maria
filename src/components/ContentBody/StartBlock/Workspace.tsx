import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const Workspace: React.FC = () => (
  <Image src="/workspace_compressed.png" alt="Workspace" />
)
