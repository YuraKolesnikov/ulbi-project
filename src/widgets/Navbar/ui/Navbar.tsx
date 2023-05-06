import { useTheme } from 'app/providers/ThemeProvider'

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'

import css from './Navbar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

interface INavbarProps {
  className?: string
}

export const Navbar = ({}: INavbarProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className={css.navbar}>
      <ul className={css.nav}>
        <li>
          <AppLink
            to='/'
            theme={
              theme === Theme.LIGHT
                ? AppLinkTheme.SECONDARY
                : AppLinkTheme.PRIMARY
            }
          >
            Home
          </AppLink>
        </li>
        <li>
          <AppLink
            to='/about'
            theme={
              theme === Theme.LIGHT
                ? AppLinkTheme.SECONDARY
                : AppLinkTheme.PRIMARY
            }
          >
            About
          </AppLink>
        </li>
      </ul>
      <ThemeSwitcher className={css.themeSwitcher} />
    </nav>
  )
}
