import { createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import Developer from '../routes/Developer'
import Case from '../routes/Case'
import NotFound from '../routes/NotFound'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				path: '/developer',
				element: <Developer />,
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
