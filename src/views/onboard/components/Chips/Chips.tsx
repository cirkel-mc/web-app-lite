import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ChipsProps {
  classname: string
  dataValue: string
  onClick: () => void
}

function Chips({ classname, onClick, dataValue }: ChipsProps) {
  return (
    <div
      className={twMerge(
        'px-4 py-2  border-solid border-[1px] rounded-lg cursor-pointer',
        classname,
      )}
      data-value={dataValue}
      onClick={onClick}
    >
      Guitar
    </div>
  )
}

export default Chips
