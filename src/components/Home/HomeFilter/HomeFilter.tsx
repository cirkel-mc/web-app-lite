"use client"

import React, { Fragment, useState } from 'react'

import Button from '@/ui/component/Button'
import Location from './Location'
import DateTime from './DateTime'

const HomeFilter = () => {
  return (
    <Fragment>
      <div className='w-full max-w-[500px] bg-white px-4 py-4 rounded-lg -z-[1]' style={{ boxShadow: '0px 8px 16px rgba(3,18,26,0.20)' }}>
        <Location />
        <div className='flex justify-between mt-3 mb-3 gap-2'>
          <div className='w-[65%] h-full'>
            <DateTime type='date' />
          </div>
          <div className='w-[35%] h-full'>
            <DateTime type='time' />
          </div>
        </div>
        <Button size='lg' round='full' classes='w-full' variant='primary'>Find Now</Button>
      </div>
    </Fragment>
  )
}

export default HomeFilter