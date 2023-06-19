import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'

import css from './app-link.module.scss'
import classNames from 'classnames'

export enum AppLinkThemes {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  theme?: AppLinkThemes
}

export const AppLink: FC<AppLinkProps> = ({ theme = AppLinkThemes.PRIMARY, to, children, ...other }) => {
  return (
    <Link
      to={to}
      className={classNames(css.link, css[theme === AppLinkThemes.PRIMARY ? AppLinkThemes.SECONDARY : AppLinkThemes.PRIMARY])}
      {...other}>
      {children}
    </Link>
  )
}
