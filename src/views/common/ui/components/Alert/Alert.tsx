'use client'

import React, { useState, useEffect, useTransition } from 'react'
import type { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

interface AlertProps extends PropsWithChildren {
  variant: 'success' | 'error'
}

const Alert = ({ variant, children }: AlertProps) => {
  const [active, setActive] = useState(false)
  const [isPending, startTransition] = useTransition()

  const getVariant = () => {
    switch (variant) {
      case 'success':
        return 'bg-green-600'
      case 'error':
        return 'bg-red-500'
      default:
        break
    }
  }

  const getIcon = () => {
    switch (variant) {
      case 'success':
        return <FontAwesomeIcon className="w-4 h-4" icon={faCheck} />
      case 'error':
        return (
          <FontAwesomeIcon className="w-4 h-4" icon={faCircleExclamation} />
        )
      default:
        break
    }
  }

  useEffect(() => {
    startTransition(() => {
      setActive(true)
    })

    setTimeout(() => {
      setActive(false)
    }, 2000)
  }, [])

  return (
    <div
      className={twMerge(
        ' transition-all w-[80%] duration-500 fixed -top-[999px] left-1/2 -translate-x-1/2 flex items-center gap-4 px-4 py-2 shadow-2xl bg-white text-white rounded z-50',
        getVariant(),
        active && 'top-[0px]',
      )}
    >
      {getIcon()}
      {children}
    </div>
  )
}

export default Alert
