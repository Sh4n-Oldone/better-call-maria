import React from 'react'
import { Outlet } from 'react-router-dom'
import { ScrollToAnchor } from 'components'
import { ScreenLayout } from '../layouts'

export const App: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <ScreenLayout>
    <ScrollToAnchor />
    <Outlet />
    {children}
  </ScreenLayout>
)
