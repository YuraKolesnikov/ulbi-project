import React, { FC } from 'react'

import { useTheme } from 'app/providers/theme-provider'

import css from './theme-switcher.module.scss'

interface ThemeSwitcherProps {

}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({}) => {
  const { toggleTheme } = useTheme()
  return <button className={css.ThemeSwitcher} onClick={toggleTheme}>Toggle theme</button>
}
