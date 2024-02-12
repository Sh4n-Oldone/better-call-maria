import React from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import styled from 'styled-components'
import { useLangStore } from 'stores'
import { colorScheme } from 'shared'
import { useScreenSize } from 'hooks'
import { Langs } from 'types'
import { FooterLink, getColumns } from './utils'
import { IconsLinks } from './IconsLinks'

const FooterWrapper = styled.footer`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 44px 0;
`
const FooterContentWrapper = styled.div<{
	width: number
	size: number
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1048px;
  z-index: 11;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: calc(-100vw / 2 + ${({ width, size }) =>
			width > 1880 ? 960 : width / 2 - size}px);
    width: 100vw;
    height: 100%;
    background: linear-gradient(0deg, #171323 0%, #0F0F0F 100%);
    z-index: -1;
  }

  @media (max-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 44px;
  }
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
  padding: 16px;

  @media (max-width: 1100px) {
    justify-content: center;
    align-items: center;
  }
`
const ColumnTitle = styled.h3`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  color: ${colorScheme.palette.white};
`
const ColumnLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style: none;
  margin: 0;

  @media (max-width: 1100px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    gap: 16px;
  }
`
const ColumnLink = styled.li`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: ${colorScheme.grayFamily.gray_4};
  cursor: pointer;

  @media (max-width: 768px) {
    text-align: center;
  }
`
const ToDev = styled.button`
  position: absolute;
  z-index: 100;
  bottom: 4px;
  right: 4px;
  color: #fff;
  cursor: pointer;
  border: none;
  font: inherit;
  font-size: 12px;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    text-decoration: underline;
  }
`

const CustomLinkItem: React.FC<FooterLink> = ({
	title,
	localLink,
	globalLink,
	additionalLinks,
}) => {
	const location = useLocation()

	if (additionalLinks) return <IconsLinks {...additionalLinks} />

	if (localLink)
		return (
			<Link to={location.pathname === '/' ? localLink : `/${localLink}`}>
				<span>{title}</span>
			</Link>
		)

	if (globalLink)
		return (
			<a href={globalLink} target='_blank' rel='noreferrer'>
				{title}
			</a>
		)

	return null
}

export const Footer: React.FC = () => {
	const navigate = useNavigate()
	const currLang = useLangStore((state) => state.langTheme)
	const { width, scrollbarSize } = useScreenSize()

	const columns = getColumns(currLang)

	const toDevLine =
		currLang === Langs.RU ? '→ А.Павлов, 2024' : '→ A.Pavlov, 2024'

	const handleToDevClick = () => {
		navigate('/developer')
	}

	return (
		<FooterWrapper>
			<FooterContentWrapper width={width} size={scrollbarSize}>
				{columns.map(({ title, links }) => (
					<Column key={title}>
						<ColumnTitle>{title}</ColumnTitle>
						<ColumnLinks>
							{links.map((link) => (
								<ColumnLink key={link.title}>
									<CustomLinkItem {...link} />
								</ColumnLink>
							))}
						</ColumnLinks>
					</Column>
				))}
			</FooterContentWrapper>
			<ToDev onClick={handleToDevClick}>{toDevLine}</ToDev>
		</FooterWrapper>
	)
}
