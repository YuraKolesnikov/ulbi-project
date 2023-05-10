import { type FC, useCallback, useState } from 'react'
import classNames from 'classnames'

import { ThemeSwitcher } from 'widgets/theme-switcher'
import { LangSwitcher } from 'widgets/lang-switcher'

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
      className={classNames(
        css.Sidebar,
        isCollapsed && css.collapsed,
        className
      )}
    >
      <button onClick={onToggle}>Toggle sidebar</button>
      <div className={css.controls}>
        <ThemeSwitcher />
        <LangSwitcher className={css.rightControl} />
      </div>
    </aside>
  )
}
