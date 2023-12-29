import React from 'react'
import { Outlet } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { ScreenLayout } from '../layouts'

const theme = extendTheme({
	fonts: {
		heading: `'Inter', sans-serif`,
		body: `'Inter', sans-serif`,
	},
})

export const App: React.FC<{ children?: React.ReactNode }> = ({
	children,
}) => (
	<ChakraProvider theme={theme}>
		<ScreenLayout>
			<Outlet />
			{children}
		</ScreenLayout>
	</ChakraProvider>
)
