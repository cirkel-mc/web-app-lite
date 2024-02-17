'use client'

import React, { Fragment } from 'react'
import { useRouter } from 'next/navigation'

import Button from '@/views/common/ui/components/Button'
import Location from './Location'
import DateTime from './DateTime'

const HomeFilter = () => {
  const router = useRouter()
  return (
    <Fragment>
      <div className="w-full bg-white px-[10px] py-5 rounded-lg -z-[1] md:w-4/5  mx-auto lg:max-w-[1024px] lg:flex lg:items-center lg:mb-16 shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
        <Location />
        <div className="flex justify-between mt-3 mb-3 gap-2 lg:mt-0 lg:mb-0 lg:items-center lg:ml-4">
          <div className="w-[55%] h-full lg:mr-0 lg:w-[200px]">
            <DateTime type="date" />
          </div>
          <div className="w-[45%] h-full lg:mr-4 lg:w-[200px]">
            <DateTime type="time" />
          </div>
        </div>
        <Button
          size="md"
          round="full"
          classes="w-full lg:w-[300px]"
          variant="primary"
          onClick={() => router.push('/discovery')}
        >
          Find Now
        </Button>
      </div>
    </Fragment>
  )
}

export default HomeFilter
