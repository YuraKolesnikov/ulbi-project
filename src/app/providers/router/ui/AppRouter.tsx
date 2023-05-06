import { Suspense } from 'react'

import { RouterView } from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterView />
    </Suspense>
  )
}

export default AppRouter
