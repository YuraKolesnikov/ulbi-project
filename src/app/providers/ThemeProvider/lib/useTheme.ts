import { useContext } from 'react'

import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../lib/ThemeContext'

interface IUseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme(): IUseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const updated = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme(updated)
    window.localStorage.setItem(LOCAL_STORAGE_THEME_KEY, updated)
  }

  return {
    theme,
    toggleTheme,
  }
}
