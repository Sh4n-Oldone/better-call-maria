import styled from 'styled-components'
import { DefaultText } from 'src/styled'

export const SubtitleText = styled(DefaultText)`
  font-size: 16px;
  line-height: 24px;
`

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`

export const ModSubtitleText = styled(SubtitleText)`
  max-width: 572px;
  margin-top: 16px;
  text-align: center;
`

export const ShowUpSection = styled.section<{ inView: boolean }>`
  animation-name: showUp;
  animation-duration: 1.5s;
  animation-direction: normal;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-play-state: ${({ inView }) => (inView ? 'running' : 'paused')};

  @keyframes showUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
	  
	  100% {
		  opacity: 1;
      transform: translateY(0);
	  }
  }
`