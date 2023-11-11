"use client"

import React, { Fragment, useState } from 'react'

import Button from '@/ui/component/Button'
import Location from './Location'
import DateTime from './DateTime'

const HomeFilter = () => {
  return (
    <Fragment>
      <div className='w-full bg-white px-4 py-4 rounded-lg -z-[1] md:w-4/5 mx-auto lg:flex lg:items-center lg:mb-16' style={{ boxShadow: '0px 8px 16px rgba(3,18,26,0.20)' }}>
        <Location />
        <div className='flex justify-between mt-3 mb-3 gap-2 lg:mt-0 lg:mb-0 lg:items-center lg:ml-4'>
          <div className='w-[65%] h-full lg:mr-0 lg:w-[200px]'>
            <DateTime type='date' />
          </div>
          <div className='w-[35%] h-full lg:mr-4 lg:w-[200px]'>
            <DateTime type='time' />
          </div>
        </div>
        <Button size='sm' round='full' classes='w-full text-sm lg:w-[300px]' variant='primary'>Find Now</Button>
      </div>
    </Fragment>
  )
}

export default HomeFilter