import React from 'react'
import styled from 'styled-components'
import { MinisContainer } from './shared'

const ModMinisContainer = styled(MinisContainer)`
  background-color: transparent;
  background-image: url(/projects_youtube.png);
  background-size: cover;
`

export const MiniYoutube: React.FC = () => <ModMinisContainer />
