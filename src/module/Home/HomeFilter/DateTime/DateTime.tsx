import React, { useState, Fragment } from 'react'
import BottomSheet from '@/components/BottomSheet';

interface DateTimeProps {
  label: string;
  type: string;
}

const DateTime = (props: DateTimeProps) => {
  const { label, type } = props

  const [openDate, setOpenDate] = useState(false)
  const [openTime, setOpenTime] = useState(false)

  const handleClick = () => {
    if (type === 'date') setOpenDate(true)
    else if (type === 'time') setOpenTime(true)

    console.log(openDate)
  }

  return (
    <Fragment>
      <div className='rounded-full w-1/2 px-4 py-2 border-[1px] border-gray-400 bg-white' onClick={handleClick}>{label}</div>
      <BottomSheet title='Date' open={openDate} onClose={() => setOpenDate(false)}>
        <div>Date</div>
      </BottomSheet>
      <BottomSheet title='Time' open={openTime} onClose={() => setOpenTime(false)}>
        <div>Time</div>
      </BottomSheet>
    </Fragment>
  )
}

export default DateTime