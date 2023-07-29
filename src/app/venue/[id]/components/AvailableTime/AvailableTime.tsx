"use client"

import React, {useState} from 'react'
import clsx from 'clsx'

const AvailableTime = () => {
  const [selected, setSelected] = useState('')

  return (
    <div className='overflow-auto pb-4 mt-6'>
      <div className='flex gap-2 items-center justify-between'>
        <div className={clsx('rounded-lg shadow-md px-3 py-1 border-2 border-slate-200 text-base', selected === '13.00' && 'bg-sky-300 border-sky-300 text-white')} onClick={() => setSelected('13.00')}>13.00</div>
        <div className={clsx('rounded-lg shadow-md px-3 py-1 border-2 border-slate-200 text-base', selected === '15.00' && 'bg-sky-300 border-sky-300 text-white')} onClick={() => setSelected('15.00')}>15.00</div>
        <div className={clsx('rounded-lg shadow-md px-3 py-1 border-2 border-slate-200 text-base', selected === '17.00' && 'bg-sky-300 border-sky-300 text-white')} onClick={() => setSelected('17.00')}>17.00</div>
        <div className={clsx('rounded-lg shadow-md px-3 py-1 border-2 border-slate-200 text-base', selected === '19.00' && 'bg-sky-300 border-sky-300 text-white')} onClick={() => setSelected('19.00')}>19.00</div>
        <div className={clsx('rounded-lg shadow-md px-3 py-1 border-2 border-slate-200 text-base', selected === '21.00' && 'bg-sky-300 border-sky-300 text-white')} onClick={() => setSelected('21.00')}>21.00</div>
        <div className={clsx('rounded-lg shadow-md px-3 py-1 border-2 border-slate-200 text-base', selected === '23.00' && 'bg-sky-300 border-sky-300 text-white')} onClick={() => setSelected('23.00')}>23.00</div>
      </div>
    </div>
  )
}

export default AvailableTime