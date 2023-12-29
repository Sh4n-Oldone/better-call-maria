import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getNavLinks } from 'utils'
import { useLangStore } from 'stores'
import { colorScheme } from 'shared'
import {
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from '@chakra-ui/react'
import { AnchorIcon } from './AnchorIcon'

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  flex: 3;

  @media (max-width: 1000px) {
    display: none;
  }
`
const MenuContainer = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: block;
  }
`
const LinksList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.375em;
  padding: 0;
  margin: 0;
  width: 100%;
`
const LinkItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  > a {
    padding: 10px;
    color: ${colorScheme.palette.black};
    text-decoration: none;
  }
`

export const Navigation: React.FC = () => {
	const currLang = useLangStore((state) => state.langTheme)

	return (
		<>
			<NavContainer>
				<LinksList>
					{getNavLinks(currLang).map(({ path, name }) => (
						<LinkItem key={name}>
							<Link to={path}>{name}</Link>
						</LinkItem>
					))}
				</LinksList>
			</NavContainer>

			<MenuContainer>
				<Menu>
					<MenuButton
						as={IconButton}
						aria-label='Options'
						icon={<AnchorIcon />}
						variant='outline'
					/>
					<MenuList>
						{getNavLinks(currLang).map(({ path, name }) => (
							<Link key={name} to={path}>
								<MenuItem>{name}</MenuItem>
							</Link>
						))}
					</MenuList>
				</Menu>
			</MenuContainer>
		</>
	)
}
