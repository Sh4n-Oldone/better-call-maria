/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { DevLoader } from 'components'

const Developer = lazy(() => import('../routes/Developer'))
const Case = lazy(() => import('../routes/Case'))
const NotFound = lazy(() => import('../routes/NotFound'))

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				path: '/developer',
				element: (
					<Suspense fallback={<DevLoader />}>
						<Developer />
					</Suspense>
				),
			},
			{
				path: '/case/:id',
				element: <Case />,
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
])
