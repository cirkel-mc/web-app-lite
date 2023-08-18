"use client"
import React, {useState} from 'react'
import clsx from 'clsx'

const AvailableTime = () => {
  const [selected, setSelected] = useState('')

  return (
    <div className='mt-4'>
      <p className='text-sm'>Choose Time</p>
      <div className='flex gap-2 pb-4 items-center justify-between overflow-auto'>
        <div className={clsx('rounded-lg shadow-md px-3 py-1 border-2 border-slate-200 text-base', selected === '13.00' && 'bg-sky-400 border-sky-300 text-white border-0')} onClick={() => setSelected('13.00')}>13.00</div>
        <div className={clsx('rounded-lg shadow-md px-3 py-1 border-2 border-slate-200 text-base', selected === '15.00' && 'bg-sky-400 border-sky-300 text-white border-0')} onClick={() => setSelected('15.00')}>15.00</div>
        <div className={clsx('rounded-lg shadow-md px-3 py-1 border-2 border-slate-200 text-base', selected === '17.00' && 'bg-sky-400 border-sky-300 text-white border-0')} onClick={() => setSelected('17.00')}>17.00</div>
        <div className={clsx('rounded-lg shadow-md px-3 py-1 border-2 border-slate-200 text-base', selected === '19.00' && 'bg-sky-400 border-sky-300 text-white border-0')} onClick={() => setSelected('19.00')}>19.00</div>
        <div className={clsx('rounded-lg shadow-md px-3 py-1 border-2 border-slate-200 text-base', selected === '21.00' && 'bg-sky-400 border-sky-300 text-white border-0')} onClick={() => setSelected('21.00')}>21.00</div>
        <div className={clsx('rounded-lg shadow-md px-3 py-1 border-2 border-slate-200 text-base', selected === '23.00' && 'bg-sky-400 border-sky-300 text-white border-0')} onClick={() => setSelected('23.00')}>23.00</div>
      </div>
    </div>
  )
}

export default AvailableTime