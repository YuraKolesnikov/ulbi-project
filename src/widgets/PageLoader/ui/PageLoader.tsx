import type { ReactElement } from 'react'

import { Loader } from 'shared/ui/Loader'

import css from './PageLoader.module.scss'

export const PageLoader = (): ReactElement => {
  return (
    <div className={css.PageLoader}>
      <Loader />
    </div>
  )
}
