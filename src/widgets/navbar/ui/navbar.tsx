import React from 'react';
import { AppLink } from 'shared/ui/app-link'

import css from './navbar.module.scss'
import { ThemeSwitcher } from 'widgets'

export const Navbar = () => {


  return (
    <nav className={css.navbar}>
      <div className={css.links}>
        <AppLink to={'/'}>Home</AppLink>
        <AppLink to={'/about'}>About</AppLink>
      </div>
      <ThemeSwitcher/>
    </nav>
  );
};
