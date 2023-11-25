import React from 'react'
import type { ReactNode, ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode | ReactNode[];
  classes?: string;
  id?: string;
  dataTestId?: string;
  size: 'sm' | 'md' | 'lg' | 'xl';
  btnType?: 'text' | 'fill' | 'outlined';
  fullwidth?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  disabled?: boolean;
  round: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '' | 'full',
  variant: 'primary' | 'secondary',
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const { children, classes, disabled,btnType, endIcon, round, startIcon, size, variant, onClick, ...rest } = props

  const switchSize = (btnSize: string) => {
    switch (btnSize) {
      case 'sm':
        return 'px-1 py-1'
      case 'md':
        return 'px-2 py-2'
      case 'lg':
        return 'px-4 py-2'
      case 'xl':
        return 'px-6 py-2.5'
      default:
        return ''
    }
  }

  const switchVariant = (varBtn: string) => {
    switch (varBtn) {
      case 'primary':
        return 'bg-teal-500 hover:bg-teal-400'
      case 'secondary':
        return 'bg-teal-100 hover:bg-teal-50'
      default:
        return ''
    }
  }

  let mergedClass = clsx('text-white', switchVariant(variant), switchSize(size), `rounded-${round}`,disabled ? '!bg-gray-400 !hover:bg-gray-400 !focus:bg-gray-400' : '' , classes)

  return (
    <button
      className={mergedClass}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  )
}

export default Button