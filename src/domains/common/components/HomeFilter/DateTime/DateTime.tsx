import React, { useState, Fragment, useMemo } from 'react'
import type { FC } from 'react'
import dynamic from 'next/dynamic'
import dayjs, { Dayjs } from 'dayjs'

import IconCalendar from '@/domains/common/components/Icons/Calendar'
import IconSchedule from '@/domains/common/components/Icons/Clock'

interface DateTimeProps {
  type: string
}

const TimePicker = dynamic(() => import('./TimePicker'))
const Calendar = dynamic(() => import('../../BottomSheetCalendar'))

const DateTime: FC<DateTimeProps> = (props) => {
  const { type } = props

  const [openDate, setOpenDate] = useState(false)
  const [openTime, setOpenTime] = useState(false)
  const [date, setDate] = useState<Dayjs | null>(null)
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
    }
    if (type === 'time') {
      return <IconSchedule className="ml-1" size={16} />
    }
  }, [type])

  const Label = useMemo(() => {
    if (type === 'date') {
      return (
        <span className="font-semibold text-[#717171]">
          {date ? dayjs(date)?.format('DD/MM/YYYY') : 'DD/MM/YYYY'}
        </span>
      )
    }
    if (type === 'time') {
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
    <>
      <div
        className="flex flex-nowrap items-center justify-between rounded-full w-full  px-4 py-1 box-border border-[2px] border-[#717171] bg-white lg:h-8"
        onClick={handleClick}
      >
        {Label} {Icon}
      </div>

      {openDate && (
        <Calendar
          open={openDate}
          onClose={() => setOpenDate(false)}
          value={date}
          onChange={(newValue: Dayjs) => setDate(newValue)}
        />
      )}
      {openTime && <TimePicker />}
    </>
  )
}

export default DateTime
