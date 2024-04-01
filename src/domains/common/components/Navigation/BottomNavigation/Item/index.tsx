import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { twMerge } from 'tailwind-merge'

interface BottomNavigationItemProps {
  Icon: any
  isActive: boolean
  title: string
  onClick?: () => void
}

function BottomNavigationItem(props: BottomNavigationItemProps) {
  const { Icon, isActive, title, onClick } = props

  return (
    <div
      className="flex flex-col justify-center items-center gap-1"
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={Icon}
        className={twMerge(
          'duration-400',
          isActive ? 'text-primary-40' : 'text-neutral-500',
        )}
      />
      <span
        className={twMerge(
          'text-[12px] inline-block mt-1',
          isActive ? 'text-primary-40' : 'text-neutral-500',
        )}
      >
        {title}
      </span>
    </div>
  )
}

export default BottomNavigationItem
