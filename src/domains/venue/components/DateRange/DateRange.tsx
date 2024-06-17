'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faClockFour } from '@fortawesome/free-solid-svg-icons'
import Date from './Date'
import Select from '@/views/common/ui/components/Select'
import { HOUR_OPTIONS } from '@/domains/common/components/HomeFilter/constants'

function DateRange() {
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
          <Date isActive text="29379273" onClick={() => null} />
          <Date text="29379273" onClick={() => null} />
          <Date text="29379273" onClick={() => null} />
          <Date text="29379273" onClick={() => null} />
          <Date text="29379273" onClick={() => null} />
          <Date text="29379273" onClick={() => null} />
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
            classes="text-sm rounded-lg py-[2px] px-2 w-full"
            containerClass="w-1/2"
          />
          <Select
            options={HOUR_OPTIONS}
            placeholder="Pilih waktu"
            value=""
            onChange={() => null}
            classes="text-sm rounded-lg py-[2px] px-2 w-full"
            containerClass="w-1/2"
          />
        </div>
      </div>
    </div>
  )
}

export default DateRange
