'use client'
import React, { useState } from 'react'
import clsx from 'clsx'
import Date from './Date'

const DateRange = () => {
  const [selected, setSelected] = useState('')

  return (
    <div className='w-full justify-center'>
      <p className='text-sm mb-2'>Choose Date</p>
      <div className='flex gap-2 items-center pb-4 overflow-auto'>
        <Date text='7 Agustus 2023' onClick={() => setSelected('7 Agustus 2023')} isActive={selected === '7 Agustus 2023'} />
        <Date text='8 Agustus 2023' onClick={() => setSelected('8 Agustus 2023')} isActive={selected === '8 Agustus 2023'} />
        <Date text='9 Agustus 2023' onClick={() => setSelected('9 Agustus 2023')} isActive={selected === '9 Agustus 2023'} />
        <Date text='10 Agustus 2023' onClick={() => setSelected('10 Agustus 2023')} isActive={selected === '10 Agustus 2023'} />
        <Date text='11 Agustus 2023' onClick={() => setSelected('11 Agustus 2023')} isActive={selected === '11 Agustus 2023'} />
      </div>
    </div>
  )
}

export default DateRange