import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      <Icon
        className="duration-400"
        color="#9a01bf"
        size={26}
        variant={isActive ? 'Bold' : 'Outline'}
      />
      <span className="text-[12px] text-neutral-500 inline-block mt-1">
        {title}
      </span>
    </div>
  )
}

export default BottomNavigationItem
