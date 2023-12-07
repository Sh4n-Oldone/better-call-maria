import React from 'react'
import { Outlet } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { ScreenLayout } from '../layouts'

export const App: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <ChakraProvider>
    <ScreenLayout>
      <Outlet />
      {children}
    </ScreenLayout>
  </ChakraProvider>
)
