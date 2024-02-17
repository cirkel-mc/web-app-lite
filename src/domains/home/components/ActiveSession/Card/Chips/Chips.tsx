import React from 'react'
import clsx from 'clsx';

interface ChipsProps {
  status: 'active' | 'inactive';
}

const Chips = ({ status }: ChipsProps) => {
  return (
    <div className={clsx('block py-[2px] px-2 border-2 rounded-2xl text-sm text-secondary-40', status === 'active' ? 'border-secondary-40' : 'border-red-300')}>{status}</div>
  )
}

export default Chips