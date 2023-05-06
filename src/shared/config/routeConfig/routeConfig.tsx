import { type ReactNode, useMemo, type ReactElement } from 'react'
import { useRoutes } from 'react-router-dom'

import { HomePage } from 'pages/HomePage'
import { AboutPage } from 'pages/AboutPage'

interface IRouteInterface {
  path: string
  element: ReactNode
  children?: IRouteInterface[]
}

export const RouterView = (): ReactElement | null => {
  const ROUTES: IRouteInterface[] = useMemo(
    () => [
      { path: '/', element: <HomePage /> },
      {
        path: '/about',
        element: <AboutPage />
      }
    ],
    []
  )

  const currentView = useRoutes(ROUTES)
  return currentView
}
