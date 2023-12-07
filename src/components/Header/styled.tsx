import styled from 'styled-components'
import { HeaderHeight } from 'constants'
import { colorScheme } from 'shared'

export const Wrapper = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${colorScheme.palette.white};
  color: ${colorScheme.palette.black};
  display: flex;
  justify-content: center;
  height: 100%;
  max-height: ${HeaderHeight}px;
  width: 100%;
  gap: 20px;
  z-index: 999;
`
export const HeaderContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1920px;
`
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`
export const RightBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 10px;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
