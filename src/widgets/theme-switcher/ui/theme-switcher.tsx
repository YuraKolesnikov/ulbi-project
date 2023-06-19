import React, { FC } from 'react'

import { Theme, useTheme } from 'app/providers/theme-provider'
import { Button } from 'shared/ui'

import css from './theme-switcher.module.scss'

export const ThemeSwitcher: FC = ({}) => {
  const { theme, toggleTheme } = useTheme()
  return (
    <Button
      className={css.ThemeSwitcher}
      onClick={toggleTheme}>
      {theme === Theme.LIGHT ? 'Dark' : 'Light'} theme
    </Button>
  )
}
