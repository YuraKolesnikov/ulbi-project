import { type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

import { useTheme, Theme } from 'app/providers/ThemeProvider'

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

import css from './Navbar.module.scss'

interface INavbarProps {
  className?: string
}

export const Navbar = ({ className }: INavbarProps): ReactElement => {
  const { theme } = useTheme()
  const { t } = useTranslation()

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
            {t('Navbar.home')}
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
            {t('Navbar.about')}
          </AppLink>
        </li>
      </ul>
    </nav>
  )
}
