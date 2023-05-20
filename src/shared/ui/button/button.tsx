import type { FC, ButtonHTMLAttributes, ReactNode } from 'react'

import classNames from 'classnames'

import css from './button.module.scss'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  design?: ButtonDesign
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
  design = ButtonDesign.CLEAR,
  className,
  children,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(css.Button, css[design], className)}
      {...otherProps}
    >
      {children}
    </button>
  )
}
