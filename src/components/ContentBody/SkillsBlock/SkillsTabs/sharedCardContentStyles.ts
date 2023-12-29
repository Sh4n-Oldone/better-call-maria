import styled from 'styled-components'

export const LeftContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: 940px) {
    width: 100%;
  }
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 1000px) {
    padding: 0 5% 20px;
  }
`
export const Title = styled.span`
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 52px;
  letter-spacing: 0.28px;
`
export const Subtitle = styled.span`
  font-size: 14px;
  line-height: 22px;
`
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const ListTitle = styled.span`
  font-size: 12px;
  font-weight: 700;
`
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
export const ListItem = styled.li`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-left: 18px;
`
