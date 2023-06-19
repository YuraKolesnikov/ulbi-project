import React from 'react'

import { AppLink } from 'shared/ui'
import { ThemeSwitcher } from 'widgets'

import css from './navbar.module.scss'

export const Navbar = () => (
  <nav className={css.navbar}>
    <div className={css.links}>
      <AppLink to={'/'}>Home</AppLink>
      <AppLink to={'/about'}>About</AppLink>
    </div>
    <ThemeSwitcher/>
  </nav>
)
