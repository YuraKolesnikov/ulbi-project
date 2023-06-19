import { type ButtonHTMLAttributes, type FC } from 'react'
import classNames from 'classnames'

import css from './button.module.scss'

export enum ButtonThemes {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonThemes
  onClick: () => void
}

export const Button: FC<ButtonProps> = ({ theme = ButtonThemes.CLEAR, children, onClick, ...other }) => {
  const buttonClassList = classNames(css.button, css[theme])
  return <button onClick={onClick} className={buttonClassList} {...other}>{children}</button>
}
