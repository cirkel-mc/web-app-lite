"use client"

import React, { Fragment, useState } from 'react'

import Button from '@/ui/component/Button'
import BottomSheet from '@/components/BottomSheet'
import Location from './Location'
import DateTime from './DateTime'

const HomeFilter = () => {
  return (
    <Fragment>
      <div className='w-full max-w-[500px] bg-neutral-100 px-4 py-4 rounded-md -z-[1]' style={{ boxShadow: '0px 8px 16px rgba(3,18,26,0.20)' }}>
        <Location />
        <div className='flex justify-between mt-3 mb-3 gap-2'>
          <DateTime label='Select Date' type='date' />
          <DateTime label='Select Time' type='time' />
        </div>
        <Button size='lg' round='full' classes='w-full' variant='primary'>Find Now</Button>
      </div>
    </Fragment>
  )
}

export default HomeFilter