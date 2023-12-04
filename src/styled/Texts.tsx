import styled from 'styled-components'
import { colorScheme } from 'src/shared'

export const DefaultText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  color: ${colorScheme.text.mainBlack};
`

export const MediumText = styled(DefaultText)`
  font-weight: 500;
`

export const HeadingText = styled.h1`
  font-family: 'Noto Sans Symbols Variable', sans-serif;
  font-weight: 900;
  font-size: 52px;
  line-height: 62.4px;
  color: ${colorScheme.text.mainBlack};
`

export const SecondaryHeadingText = styled.h2`
  font-family: 'Noto Sans Symbols Variable', sans-serif;
  font-weight: 500;
  font-size: 42px;
  line-height: 62.4px;
  color: ${colorScheme.text.lightBlack};
`
