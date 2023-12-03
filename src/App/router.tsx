import { createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { RouteNames } from '../types'
import Start from '../routes/Start'
import NotFound from '../routes/NotFound'
import AboutMe from '../routes/AboutMe'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/start',
        element: <Start />,
      },
      {
        path: `/${RouteNames.ABOUT_ME}`,
        element: <AboutMe />,
      },
    ],
  },
])
