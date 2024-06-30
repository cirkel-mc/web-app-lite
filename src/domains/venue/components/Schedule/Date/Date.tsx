import React from 'react'
import { twMerge } from 'tailwind-merge'

interface DateProps {
  day: string
  date: string
  isActive?: boolean
  onClick: () => void
}

function Date({ day, date, isActive, onClick }: DateProps) {
  return (
    <div
      className={twMerge(
        'flex flex-col p-1',
        isActive ? 'bg-secondary-40 rounded-lg !text-white' : ''
      )}
      onClick={onClick}
    >
      <p className='text-xs text-center mb-0'>{day}</p>
      <p className='text-sm text-center mb-0'>{date}</p>
    </div>
  )
}

export default Date
