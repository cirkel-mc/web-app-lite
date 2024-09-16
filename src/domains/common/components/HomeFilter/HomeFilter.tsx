'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import Button from '@/views/common/ui/components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Location from './Location'
import DateTime from './DateTime'
import TimePicker from './DateTime/TimePicker'

function HomeFilter() {
  const router = useRouter()

  return (
    <div className="w-full bg-white px-[10px] py-4 rounded-2xl -z-[1]  mx-auto shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
      <Location />
      <div className="flex justify-between mt-3 mb-3 gap-2">
        <div className="w-[55%] h-full">
          <DateTime type="date" />
        </div>
        <div className="w-[45%] h-full">
          <TimePicker />
        </div>
      </div>
      <Button
        size="sm"
        round="sm"
        classes="w-full py-[6px] mt-2 !rounded-lg"
        variant="primary"
        onClick={() => router.push(`/venue-list?date=2024-02-01`)}
      >
        <div className="flex justify-center items-center gap-2">
          <FontAwesomeIcon icon={faSearch} className="w-4 h-4" />
          <span> Find Now</span>
        </div>
      </Button>
    </div>
  )
}

export default HomeFilter
