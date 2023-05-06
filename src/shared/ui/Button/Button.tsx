import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

import classNames from 'classnames'

import css from './Button.module.scss'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: ButtonType
  className?: string
  children: ReactNode
}

export enum ButtonType {
  CLEAR = 'clear',
}

export const Button: FC<IButtonProps> = ({
  buttonType,
  className,
  children,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(css.Button, css[buttonType], className)}
      {...otherProps}
    >
      {children}
    </button>
  )
}
