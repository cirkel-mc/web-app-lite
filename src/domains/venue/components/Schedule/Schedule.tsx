'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faClockFour } from '@fortawesome/free-solid-svg-icons'

import Select from '@/views/common/ui/components/Select'
import DateItem from './Date'
import { MOCK_DATE_RANGE } from '@/models/venue/mock-data/data-range-mock'
import TimeOptions from '../TimeOptions'

function Schedule() {
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState('');
  const [openBottomSheet, setOpenBottomSheet] = useState(false)

  return (
    <div>
      <div className="relative flex items-center gap-1 overflow-auto w-full">
        <div className="sticky left-0 flex items-center gap-2 bg-white h-full py-2">
          <FontAwesomeIcon
            icon={faCalendar}
            className="text-primary-20 w-4 h-4"
          />
          <div className="w-[1px] h-[30px] ml-1 bg-gray-400 rounded" />
        </div>
        <div className="flex gap-2 ml-4">
          {MOCK_DATE_RANGE.map((item, index) => <DateItem key={index} isActive={item.date === date} day={String(item.day)} date={item.date} onClick={() => setDate(item.date)} />)}
        </div>
      </div>
      <div className="relative flex items-center gap-2 w-full">
        <div className="sticky left-0 flex items-center gap-2 bg-white h-full py-2">
          <FontAwesomeIcon
            icon={faClockFour}
            className="text-primary-20 w-4 h-4"
          />
        </div>
        <div className="flex w-full gap-2">
          <Select
            options={[
              { label: 'Studio Rekaman', value: 'record' },
              { label: 'Studio Band', value: 'band' },
            ]}
            value=""
            onChange={() => null}
            placeholder="Pilih tipe"
            classes="text-sm rounded-lg px-2 w-full"
            containerClass="w-1/2"
          />
          <div className='flex flex-nowrap items-center text-sm rounded-lg px-2 w-1/2 py-1 box-border border-[1px] shadow-input border-gray-200 bg-white  cursor-pointer text-[#717171]' onClick={() => setOpenBottomSheet(true)}>
            {time ? time : 'Pilih waktu'}
          </div>
        </div>
      </div>
      <TimeOptions isOpen={openBottomSheet} onClose={() => setOpenBottomSheet(false)} onItemClick={(t) => setTime(t)} />
    </div>
  )
}

export default Schedule
