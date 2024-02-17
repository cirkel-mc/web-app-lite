import React from 'react'
import clsx from 'clsx'

interface ChipsProps {
  classname: string
  dataValue: string
  onClick: () => void
}

const Chips = ({ classname, onClick, dataValue }: ChipsProps) => {
  return (
    <div
      className={clsx(
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
