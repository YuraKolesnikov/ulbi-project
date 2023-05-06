import { ButtonHTMLAttributes, FC } from 'react'
import classNames from 'classnames'

import { useTheme } from 'app/providers/ThemeProvider'
import { Theme } from 'app/providers/ThemeProvider'

import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'

import css from './ThemeSwitcher.module.scss'

interface IThemeSwitcherProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()
  return (
    <button className={classNames(css.Button, className)} onClick={toggleTheme}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </button>
  )
}
