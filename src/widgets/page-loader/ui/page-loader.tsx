import type { ReactElement } from 'react'

import { Loader } from 'loader'

import css from './page-loader.module.scss'

export const PageLoader = (): ReactElement => {
  return (
    <div className={css.PageLoader}>
      <Loader />
    </div>
  )
}
