import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ChipsProps {
  status: 'active' | 'inactive'
}

function Chips({ status }: ChipsProps) {
  return (
    <div
      className={twMerge(
        'block py-[2px] px-2 border-2 rounded-2xl text-sm text-secondary-40',
        status === 'active' ? 'border-secondary-40' : 'border-red-300',
      )}
    >
      {status}
    </div>
  )
}

export default Chips
