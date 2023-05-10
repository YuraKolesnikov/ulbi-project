import type { FC, ButtonHTMLAttributes, ReactNode } from 'react'

import classNames from 'classnames'

import css from './button.module.scss'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ButtonDesign: ButtonDesign
  type?: ButtonType
  className?: string
  children: ReactNode
}

export enum ButtonDesign {
  CLEAR = 'clear',
}

export enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

export const Button: FC<IButtonProps> = ({
  type = ButtonType.BUTTON,
  ButtonDesign,
  className,
  children,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(css.Button, css[ButtonDesign], className)}
      {...otherProps}
    >
      {children}
    </button>
  )
}
