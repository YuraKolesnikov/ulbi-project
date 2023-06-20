import { type FC, useState } from 'react'
import classNames from 'classnames'

import { Button } from 'shared/ui'

import css from './sidebar.module.scss'

export const Sidebar: FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => setCollapsed(prev => !prev)

  return (
    <aside data-testid="sidebar" className={classNames(css.sidebar, collapsed && css.collapsed)}>
      <Button onClick={onToggle}>{collapsed ? '>' : '<'}</Button>
    </aside>
  )
}
