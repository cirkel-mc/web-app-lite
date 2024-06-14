'use client'

import React from 'react'

function DateRange() {
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
