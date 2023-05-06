import { type ReactElement, Suspense } from 'react'

import { RouterView } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

const AppRouter = (): ReactElement => (
  <Suspense fallback={<PageLoader />}>
    <RouterView />
  </Suspense>
)

export default AppRouter
