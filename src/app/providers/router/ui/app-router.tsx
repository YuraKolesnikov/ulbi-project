import { type ReactElement, Suspense } from 'react'

import { RouterView } from 'shared/config/route-config/route-config'
import { PageLoader } from 'widgets/page-loader'

const AppRouter = (): ReactElement => (
  <Suspense fallback={<PageLoader />}>
    <RouterView />
  </Suspense>
)

export default AppRouter
