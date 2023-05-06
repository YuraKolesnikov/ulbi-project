import { ReactNode } from 'react'
import { useRoutes } from 'react-router-dom'

import { HomePage } from 'pages/HomePage'
import { AboutPage } from 'pages/AboutPage'
import { useMemo } from 'react'

interface IRouteInterface {
  path: string
  element: ReactNode
  children?: IRouteInterface[]
}

export const RouterView = () => {
  const ROUTES: IRouteInterface[] = useMemo(
    () => [
      { path: '/', element: <HomePage /> },
      {
        path: '/about',
        element: <AboutPage />,
      },
    ],
    []
  )

  const currentView = useRoutes(ROUTES)
  return currentView
}
