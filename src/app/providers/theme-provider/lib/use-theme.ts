import { useContext } from 'react'

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'app/providers/theme-provider'

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    const newTheme: Theme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    setTheme!(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return <UseThemeResult>{
    theme,
    toggleTheme,
  }
}
