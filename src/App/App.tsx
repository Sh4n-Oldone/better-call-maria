import React from 'react'
import { Outlet } from 'react-router-dom'
import { ScreenLayout } from '../layouts'

export const App: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <ScreenLayout>
    <Outlet />
    {children}
  </ScreenLayout>
)
