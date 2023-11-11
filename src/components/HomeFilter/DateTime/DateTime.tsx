import React, { useState, Fragment, useMemo } from 'react'
import type { FC } from 'react'
import dynamic from 'next/dynamic';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import IconCalendar from '@/components/Icons/Calendar'
import IconSchedule from '@/components/Icons/Schedule'

interface DateTimeProps {
  type: string;
}

const TimePicker = dynamic(() => import('./TimePicker'))
const Calendar = dynamic(() => import('./Calendar'))

const DateTime: FC<DateTimeProps> = (props) => {
  const { type } = props

  const [openDate, setOpenDate] = useState(false)
  const [openTime, setOpenTime] = useState(false)
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(null)

  const handleClick = () => {
    if (type === 'date') {
      setOpenDate(true)
    }
    else if (type === 'time') {
      setOpenTime(true)
    }
  }

  const Icon = useMemo(() => {
    if (type === 'date') {
      return <IconCalendar className='ml-1' />
    }
    else if (type === 'time') {
      return <IconSchedule className='ml-1' />
    }
  }, [type])

  const Label = useMemo(() => {
    if (type === 'date') {
      return date ? date.toLocaleDateString('id-ID', {year: "numeric", month: "short", day: "numeric" }) : new Date().toLocaleDateString('en-us', { weekday: "short", year: "numeric", month: "short", day: "numeric" })
    }
    else if (type === 'time') {
      if (time) {
        // @ts-ignore 
        let hour = time.getHours();
        // @ts-ignore 
        let minute = time.getMinutes()
        
        if (hour < 10) hour = `0${hour}`
        if (minute < 10) minute = `0${minute}`

        return `${hour}.${minute}`
      }

      return 'Time'
    }
  }, [type, date, time])

  return (
    <Fragment>
      <div className='flex flex-nowrap items-center justify-between rounded-full w-full  px-4 py-1 border-[1px] border-gray-400 bg-white text-sm lg:h-8' onClick={handleClick}>{Label} {Icon}</div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        { openDate && <Calendar open={openDate} onClose={() => setOpenDate(false)} value={date} onChange={(newValue: any) => setDate(newValue)} /> }
        { openTime && <TimePicker open={openTime} onClose={() => setOpenTime(false)} value={time} onChange={(newValue: any) => setTime(newValue)} /> }
      </LocalizationProvider>
    </Fragment >
  )
}

export default DateTime