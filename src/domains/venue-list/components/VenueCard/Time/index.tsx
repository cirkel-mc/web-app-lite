import React from 'react'
import { twMerge } from 'tailwind-merge'

interface TimeProps {
  isActive: boolean
  label: string
  onClick: () => void
}

const Time = ({ isActive, label, onClick }: TimeProps) => {
  return (
    <div
      className={twMerge(
        'px-1 rounded-md',
        isActive
          ? 'bg-[#717171] text-white '
          : 'border-[1px] border-[#717171] bg-white text-[#717171] ',
      )}
      onClick={onClick}
    >
      {label}
    </div>
  )
}

export default Time
