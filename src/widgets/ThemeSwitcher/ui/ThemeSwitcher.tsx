import { FC } from 'react'
import classNames from 'classnames'

import { useTheme } from 'app/providers/ThemeProvider'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'

import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'

import css from './ThemeSwitcher.module.scss'

interface IThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()
  return (
    <button className={classNames(css.btn, className)} onClick={toggleTheme}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </button>
  )
}
