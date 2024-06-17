import React, { useState, Fragment, useMemo } from 'react'
import type { FC } from 'react'
import dynamic from 'next/dynamic'
import dayjs, { Dayjs } from 'dayjs'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockFour, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { twMerge } from 'tailwind-merge'

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
      return (
        <FontAwesomeIcon
          icon={faCalendar}
          className={twMerge(
            'ml-1 w-4 h-4',
            openDate ? '!text-primary-20' : 'text-[#717171]',
          )}
        />
      )
    }
    if (type === 'time') {
      return (
        <FontAwesomeIcon
          icon={faClockFour}
          className={twMerge(
            'ml-1 w-4 h-4',
            openDate ? '!text-primary-20' : 'text-[#717171]',
          )}
        />
      )
    }
  }, [type, openDate])

  const Label = useMemo(() => {
    if (type === 'date') {
      return (
        <span
          className={twMerge(
            'font-semibold ',
            openDate ? 'text-primary-20' : 'text-[#717171]',
          )}
        >
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
          <span
            className={twMerge(
              'font-semibold ',
              openDate ? '!text-primary-20' : 'text-[#717171]',
            )}
          >{`${hour}.${minute}`}</span>
        )
      }

      return (
        <span
          className={twMerge(
            'font-semibold ',
            openDate ? 'text-primary-20' : 'text-[#717171]',
          )}
        >
          HH:MM
        </span>
      )
    }
  }, [type, date, time, openDate])

  return (
    <>
      <div
        className={twMerge(
          'flex flex-nowrap items-center justify-between rounded-full w-full  px-4 py-1 box-border border-[1px] bg-white lg:h-8 cursor-pointer shadow-input border-neutral-50 hover:border-primary-20 hover:!text-primary-20',
          openDate ? 'border-primary-20 !text-primary-20' : 'border-gray-200',
        )}
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
