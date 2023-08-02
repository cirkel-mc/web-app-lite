import React, { useState, Fragment, useMemo } from 'react'
import type { FC } from 'react'

import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import BottomSheet from '@/components/BottomSheet';
import IconCalendar from '@/components/Icons/Calendar'
import IconSchedule from '@/components/Icons/Schedule'



interface DateTimeProps {
  type: string;
}

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
      return date ? date.toLocaleDateString('en-us', { weekday: "short", year: "numeric", month: "short", day: "numeric" }) : new Date().toLocaleDateString('en-us', { weekday: "short", year: "numeric", month: "short", day: "numeric" })
    }
    else if (type === 'time') {
      // @ts-ignore 
      return time ? `${time.getHours()}.${time.getMinutes()}` : 'Time'
    }
  }, [type, date, time])

  return (
    <Fragment>
      <div className='flex flex-nowrap items-center justify-between rounded-full w-full px-4 py-2 border-[1px] border-gray-400 bg-white text-sm' onClick={handleClick}>{Label} {Icon}</div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <BottomSheet title='Date' open={openDate} onClose={() => setOpenDate(false)}>
          <div className='max-w-[500px] mx-auto overflow-auto h-[400px]'>
            <DateCalendar value={date} onChange={(newValue) => setDate(newValue?? new Date())} />
          </div>
        </BottomSheet>
        <BottomSheet title='Time' open={openTime} onClose={() => setOpenTime(false)}>
          <div>
            <StaticTimePicker value={time} onChange={(newValue) => setTime(newValue)} />
          </div>
        </BottomSheet>
      </LocalizationProvider>
    </Fragment >
  )
}

export default DateTime