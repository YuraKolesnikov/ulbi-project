import React from 'react'
import { useTranslation } from 'react-i18next'

import { AppLink } from 'shared/ui'
import { LangSwitcher, ThemeSwitcher } from 'widgets'

import css from './navbar.module.scss'

export const Navbar = () => {
  const { t } = useTranslation()

  return (
    <nav className={css.navbar}>
      <div className={css.item}>
        <AppLink to={'/'}>{t('HomePage')}</AppLink>
        <AppLink to={'/about'}>{t('AboutPage')}</AppLink>
      </div>
      <div className={css.item}>
        <ThemeSwitcher/>
      </div>
      <div className={css.item}>
        <LangSwitcher/>
      </div>
    </nav>
  )
}
