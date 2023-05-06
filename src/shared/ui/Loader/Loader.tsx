import type { ReactElement } from 'react'
import css from './Loader.module.scss'

export const Loader = (): ReactElement => (
  <div className={css.Loader}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
)
