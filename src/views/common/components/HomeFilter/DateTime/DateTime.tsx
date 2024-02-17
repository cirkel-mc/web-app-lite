import React, { useState, Fragment, useMemo } from 'react'
import type { FC } from 'react'
import dynamic from 'next/dynamic'

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

import IconCalendar from '@/views/common/components/Icons/Calendar'
import IconSchedule from '@/views/common/components/Icons/Clock'

interface DateTimeProps {
  type: string
}

const TimePicker = dynamic(() => import('./TimePicker'))
const Calendar = dynamic(() => import('./Calendar'))

const DateTime: FC<DateTimeProps> = (props) => {
  const { type } = props

  const [openDate, setOpenDate] = useState(false)
  const [openTime, setOpenTime] = useState(false)
  const [date, setDate] = useState<any>(null)
  const [time, setTime] = useState(null)

  const handleClick = () => {
    if (type === 'date') {
      setOpenDate(true)
    } else if (type === 'time') {
      setOpenTime(true)
    }
  }

  const Icon = useMemo(() => {
    if (type === 'date') {
      return <IconCalendar className="ml-1" size={16} />
    } else if (type === 'time') {
      return <IconSchedule className="ml-1" size={16} />
    }
  }, [type])

  const Label = useMemo(() => {
    if (type === 'date') {
      return (
        <span className="font-semibold text-[#717171]">
          {!date
            ? 'DD/MM/YYYY'
            : date.toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
        </span>
      )
    } else if (type === 'time') {
      if (time) {
        // @ts-ignore
        let hour = time.getHours()
        // @ts-ignore
        let minute = time.getMinutes()

        if (hour < 10) hour = `0${hour}`
        if (minute < 10) minute = `0${minute}`

        return (
          <span className="font-semibold text-[#717171]">{`${hour}.${minute}`}</span>
        )
      }

      return <span className="font-semibold text-[#717171]">HH:MM</span>
    }
  }, [type, date, time])

  return (
    <Fragment>
      <div
        className="flex flex-nowrap items-center justify-between rounded-full w-full  px-4 py-1 box-border border-[2px] border-[#717171] bg-white lg:h-8"
        onClick={handleClick}
      >
        {Label} {Icon}
      </div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {openDate && (
          <Calendar
            open={openDate}
            onClose={() => setOpenDate(false)}
            value={date}
            onChange={(newValue: any) => setDate(newValue)}
          />
        )}
        {openTime && (
          <TimePicker
            open={openTime}
            onClose={() => setOpenTime(false)}
            value={time}
            onChange={(newValue: any) => setTime(newValue)}
          />
        )}
      </LocalizationProvider>
    </Fragment>
  )
}

export default DateTime
