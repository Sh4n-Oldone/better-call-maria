import React from 'react'
import styled from 'styled-components'
import { colorScheme } from 'shared'
import { getAboutMeText } from 'utils'
import { useLangStore } from 'stores'
import { DefaultText } from 'src/styled'

const MainContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  flex: 0.95;

  @media (max-width: 850px) {
    justify-content: center;
  }
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 27px;
  width: 100%;
  max-width: 518px;
`
const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 42px;
  aspect-ratio: 1/1;
  background-image: 
    linear-gradient(rgba(234, 237, 232, 1) 1px, transparent 1px),
    linear-gradient(to right, rgba(234, 237, 232, 1) 1px, transparent 1px);
  background-size: 26px 26px;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-image:
      linear-gradient(
        115deg,
        #e1e1e1,
        transparent);
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    border-radius: 42px;
  }
`
const Frame = styled.div`
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  background: radial-gradient(circle, #808080 0%, #FFF 60%, #FFF 100%);
  width: 100%;
  height: 100%;
  border: 12px solid ${colorScheme.palette.black};
  border-radius: 72px;
  transform: rotate(6.5deg) translate(-13%, 4%);
`
const ImageContent = styled.div`
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  border-radius: 42px;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-10%, 10%) scale(1.05);
`
const HelloText = styled.span`
  position: absolute;
  z-index: 999;
  top: 13%;
  right: 3%;
  max-width: 205px;
  padding: 16px 24px;
  border-radius: 18px;
  border: 2px solid ${colorScheme.palette.white};
  background-color: ${colorScheme.grayFamily.darkGray};
  font-size: 16px;
  line-height: 24px;
  color: ${colorScheme.palette.white};
  box-shadow: 6px 6px 12px 0px rgba(140, 140, 140, 0.35);
`
const BottomTextContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-left: 2px solid #282828;
`
const BottomText = styled(DefaultText)`
  padding: 0 10px 0 24px;
  font-size: 14px;
  font-style: italic;
  line-height: 16.8px;
  letter-spacing: 1.4px;
  color: ${colorScheme.grayFamily.lightGray};
`

export const ImagesPart: React.FC = () => {
	const currLang = useLangStore((state) => state.langTheme)

	return (
		<MainContainer>
			<ContentContainer>
				<ImageContainer>
					<Frame />
					<ImageContent>
						<Image src='/avatar_compressed.png' alt='avatar' />
					</ImageContent>
					<HelloText>{getAboutMeText(currLang, 'hello')}</HelloText>
				</ImageContainer>
				<BottomTextContainer>
					<BottomText>{getAboutMeText(currLang, 'lastYears')}</BottomText>
				</BottomTextContainer>
			</ContentContainer>
		</MainContainer>
	)
}
