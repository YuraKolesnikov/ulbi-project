import { type FC, useCallback, useState } from 'react'
import classNames from 'classnames'

import { ThemeSwitcher } from 'widgets/theme-switcher'
import { LangSwitcher } from 'widgets/lang-switcher'

import { Button } from 'shared/ui/button'

import css from './sidebar.module.scss'

interface ISidebarProps {
  className?: string
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
  const [isCollapsed, setCollapsed] = useState(false)

  const onToggle = useCallback(() => {
    setCollapsed(!isCollapsed)
  }, [isCollapsed])

  return (
    <aside
      data-testid="sidebar"
      className={classNames(
        css.Sidebar,
        isCollapsed && css.collapsed,
        className
      )}
    >
      <Button data-testid="sidebar-toggle" onClick={onToggle}>Toggle sidebar</Button>
      <div className={css.controls}>
        <ThemeSwitcher />
        <LangSwitcher className={css.rightControl} />
      </div>
    </aside>
  )
}
