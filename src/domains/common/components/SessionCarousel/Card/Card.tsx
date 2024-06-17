import React from 'react'
import Button from '@/views/common/ui/components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPerson,
  faCalendar,
  faClockFour,
} from '@fortawesome/free-solid-svg-icons'

function Card() {
  return (
    <div className="flex flex-col items-center bg-white rounded-xl p-5 shadow-lg min-w-[260px]">
      <p className="text-2xl font-semibold mb-1">Session_Name</p>
      <div className="flex justify-center gap-3 text-sm">
        <div className="flex gap-1 items-center">
          <FontAwesomeIcon
            icon={faPerson}
            className="text-primary-30 w-4 h-4"
          />
          <span className="text-sm">3</span>
        </div>
        <div className="flex gap-1 items-center">
          <FontAwesomeIcon
            icon={faCalendar}
            className="text-primary-30 w-4 h-4"
          />
          <span className="text-sm">dd/mm/yy</span>
        </div>
        <div className="flex gap-1 items-center">
          <FontAwesomeIcon
            icon={faClockFour}
            className="text-primary-30 w-4 h-4"
          />
          <span className="text-sm">[n] hour</span>
        </div>
      </div>
      <p className="text-neutral-500 text-center mt-1">@user_name</p>
      <Button
        size="sm"
        round="sm"
        classes="text-base font-normal lg:font-semibold lg:text-[18px] lg:p-[10px] mt-2"
        variant="primary"
      >
        Join
      </Button>
    </div>
  )
}

export default Card
