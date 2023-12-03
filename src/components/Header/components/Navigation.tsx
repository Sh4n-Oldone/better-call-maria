import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getNavLinks } from 'utils'
import { useLangStore } from 'stores'

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
const LinksList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
const LinkItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Navigation: React.FC = () => {
  const currLang = useLangStore((state) => state.langTheme)

  return (
    <NavContainer>
      <LinksList>
        {getNavLinks(currLang).map(({ path, name }) => (
          <LinkItem key={name}>
            <Link to={path}>{name}</Link>
          </LinkItem>
        ))}
      </LinksList>
    </NavContainer>
  )
}
