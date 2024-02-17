'use client'
import React, { useState } from 'react'
import clsx from 'clsx'
import Date from './Date'

const DateRange = () => {
  const [selected, setSelected] = useState('')

  return (
    <div className="w-full justify-center">
      <p className="text-sm mb-2">Choose Date</p>
      <div className="flex gap-2 items-center pb-4 overflow-auto">
        <input type="text" />
      </div>
    </div>
  )
}

export default DateRange
