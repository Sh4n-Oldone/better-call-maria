import React from 'react'
import { Outlet } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { ScrollToAnchor } from 'components'
import { ScreenLayout } from '../layouts'

export const App: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <ChakraProvider>
    <ScreenLayout>
      <ScrollToAnchor />
      <Outlet />
      {children}
    </ScreenLayout>
  </ChakraProvider>
)
