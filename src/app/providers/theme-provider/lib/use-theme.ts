import { useContext } from 'react'

import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext
} from './theme-context'

interface IUseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme(): IUseThemeResult {
  const { theme = Theme.LIGHT, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    const updated: Theme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme(updated)
    window.localStorage.setItem(LOCAL_STORAGE_THEME_KEY, updated)
  }

  return {
    theme,
    toggleTheme
  }
}
