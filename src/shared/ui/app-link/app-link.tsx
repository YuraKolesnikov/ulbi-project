import classNames from 'classnames'
import { type FC, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

import css from './app-link.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface IAppLinkProps extends LinkProps {
  to: string
  children: ReactNode
  theme?: AppLinkTheme
  className?: string
}

export const AppLink: FC<IAppLinkProps> = ({
  to,
  children,
  theme = AppLinkTheme.PRIMARY,
  className
}) => {
  return (
    <Link className={classNames(css.link, css[theme], className)} to={to}>
      {children}
    </Link>
  )
}
