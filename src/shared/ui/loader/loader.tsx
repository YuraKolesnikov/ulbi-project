import type { ReactElement } from 'react'
import css from './loader.module.scss'

export const Loader = (): ReactElement => (
  <div className={css.Loader}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
)
