import { FC } from 'react'

import { Button } from 'shared/ui'

import css from './page-error.module.scss'

export const PageError: FC = ({}) => {
  const reload = () => location.reload()

  return (
    <div className={css.pageError}>
      <p>Oops! Something wrong happened!</p>
      <Button onClick={reload}>Reload page</Button>
    </div>
  )
}
