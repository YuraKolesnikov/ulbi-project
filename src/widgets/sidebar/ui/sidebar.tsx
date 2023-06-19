import { FC, useState } from 'react'
import classNames from 'classnames'

import { Button } from 'shared/ui'

import css from './sidebar.module.scss'

interface SidebarProps {

}

export const Sidebar: FC<SidebarProps> = ({}) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => setCollapsed(prev => !prev)

  return (
    <aside className={classNames(css.sidebar, collapsed && css.collapsed)}>
      <Button onClick={onToggle}>{collapsed ? '>' : '<'}</Button>
    </aside>
  )
}
