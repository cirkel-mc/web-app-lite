'use client'

import React, { useState, useMemo } from 'react'
import clsx from 'clsx'

import Information from './Information'
import Facility from './Facility'
import Terms from './Terms'

const Description = () => {
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
    <div className='mt-6'>
      <div className='flex gap-4'>
        <div onClick={() => setCurrent('info')}>
          <div>Detail Information</div>
          <div className={clsx('transition-all duration-300 ease-out mt-2 bg-slate-200 rounded-2xl h-[2px] opacity-100', current === 'info' ? 'w-full' : 'w-0')} />
        </div>
        <div onClick={() => setCurrent('get')}>
          <div>What will you get</div>
         <div className={clsx('transition-all duration-300 ease-out mt-2 bg-slate-200 rounded-2xl h-[2px] opacity-100', current === 'get' ? 'w-full' : 'w-0')} />
        </div>
        <div onClick={() => setCurrent('terms')}>
          <div>Terms</div>
          <div className={clsx('transition-all duration-300 ease-out mt-2 bg-slate-200 rounded-2xl h-[2px] opacity-100', current === 'terms' ? 'w-full' : 'w-0')} />
        </div>
      </div>
      <div className='py-4'>
        {renderDesc}
      </div>
    </div>
  )
}

export default Description