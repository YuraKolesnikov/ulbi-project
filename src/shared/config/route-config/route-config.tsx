import { type ReactNode, useMemo, type ReactElement } from 'react'
import { useRoutes } from 'react-router-dom'

import { HomePage } from 'pages/home-page'
import { AboutPage } from 'pages/about-page'
import { NotFoundPage } from 'pages/not-found-page'

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
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ],
    []
  )

  const currentView = useRoutes(ROUTES)
  return currentView
}
