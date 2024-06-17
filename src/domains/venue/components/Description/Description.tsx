'use client'

import React, { useState, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

import Information from './Information'
import Facility from './Facility'
import Terms from './Terms'

function Description() {
  const [current, setCurrent] = useState('info')

  const renderDesc = useMemo(() => {
    switch (current) {
      case 'info':
        return <Information />
      case 'get':
        return <Facility />
      case 'terms':
        return <Terms />
    }
  }, [current])

  return (
    <div className="mt-6">
      <div className="flex gap-4">
        <div className="cursor-pointer" onClick={() => setCurrent('info')}>
          <div>Description</div>
          <div
            className={twMerge(
              'transition-all duration-300 ease-out mt-2 bg-slate-200 rounded-2xl h-[3px] opacity-100',
              current === 'info' ? 'w-full' : 'w-0',
            )}
          />
        </div>
        <div className="cursor-pointer" onClick={() => setCurrent('get')}>
          <div>Facility</div>
          <div
            className={twMerge(
              'transition-all duration-300 ease-out mt-2 bg-slate-200 rounded-2xl h-[3px] opacity-100',
              current === 'get' ? 'w-full' : 'w-0',
            )}
          />
        </div>
        <div className="cursor-pointer" onClick={() => setCurrent('terms')}>
          <div>Terms</div>
          <div
            className={twMerge(
              'transition-all duration-300 ease-out mt-2 bg-slate-200 rounded-2xl h-[3px] opacity-100',
              current === 'terms' ? 'w-full' : 'w-0',
            )}
          />
        </div>
      </div>
      <div className="py-4">{renderDesc}</div>
    </div>
  )
}

export default Description
