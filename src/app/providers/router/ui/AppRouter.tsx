import { type ReactElement, Suspense } from 'react'

import { RouterView } from 'shared/config/routeConfig/routeConfig'

const AppRouter = (): ReactElement => (
  <Suspense fallback={<div>Loading...</div>}>
    <RouterView />
  </Suspense>
)

export default AppRouter
