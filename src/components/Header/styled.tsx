import { HeaderHeight } from 'constants'
import styled from 'styled-components'

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-height: ${HeaderHeight}px;
  width: 100%;
  gap: 20px;
`
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ContactMeButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`
