import React, { type FC } from 'react'

import { Theme, useTheme } from 'app/providers/theme-provider'
import { Button } from 'shared/ui'

export const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <Button onClick={toggleTheme}>
      {theme === Theme.LIGHT ? 'Dark' : 'Light'} theme
    </Button>
  )
}
