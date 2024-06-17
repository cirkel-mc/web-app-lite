import React from 'react'
import { twMerge } from 'tailwind-merge'

interface DateProps {
  text: string
  isActive?: boolean
  onClick: () => void
}

function Date({ text, isActive, onClick }: DateProps) {
  return (
    <div
      className={twMerge(
        'flex flex-col p-1',
        isActive ? 'bg-secondary-40 rounded-lg !text-white' : ''
      )}
      onClick={onClick}
    >
      <p className='text-xs text-center mb-0'>Mon</p>
      <p className='text-sm text-center mb-0'>31/5/2023</p>
    </div>
  )
}

export default Date
