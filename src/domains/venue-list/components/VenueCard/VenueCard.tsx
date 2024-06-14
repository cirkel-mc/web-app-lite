import React, { useState } from 'react'
import Image from 'next/image'
import PlaceholderStudio from '@/views/common/assets/placeholder-studio.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill, faClock } from '@fortawesome/free-solid-svg-icons'
import Button from '@/views/common/ui/components/Button'
import { useRouter } from 'next/navigation'
import Time from './Time'

const VenueCard = () => {
  const router = useRouter()
  const [time, setTime] = useState('')

  return (
    <div className="flex border-[1px] border-primary-10 box-border">
      <div className="w-1/4 relative">
        <Image src={PlaceholderStudio} alt="" fill />
      </div>
      <div className="w-[calc(100%-80px)] p-2">
        <div className="flex justify-between">
          <p>Studio_name</p>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faMoneyBill}
              className="w-4 h-4 text-primary-10 mr-1"
            />
            <p className="flex"> Rp15.000/hour</p>
          </div>
        </div>
        <div className="flex justify-between mt-2 items-end">
          <div className="flex gap-2">
            <FontAwesomeIcon
              icon={faClock}
              className="w-4 h-4 text-[#717171]"
            />
            <div className="flex flex-wrap w-[170px] gap-2">
              <Time
                label="07.00"
                isActive={time === '07.00'}
                onClick={() => setTime('07.00')}
              />
              <Time
                label="09.00"
                isActive={time === '09.00'}
                onClick={() => setTime('09.00')}
              />
              <Time
                label="11.00"
                isActive={time === '11.00'}
                onClick={() => setTime('11.00')}
              />
              <Time
                label="13.00"
                isActive={time === '13.00'}
                onClick={() => setTime('13.00')}
              />
              <Time
                label="15.00"
                isActive={time === '15.00'}
                onClick={() => setTime('15.00')}
              />
              <Time
                label="17.00"
                isActive={time === '17.00'}
                onClick={() => setTime('17.00')}
              />
            </div>
          </div>
          <Button
            variant="primary"
            size="sm"
            round="sm"
            onClick={() => router.push('/venue/1')}
          >
            Book
          </Button>
        </div>
      </div>
    </div>
  )
}

export default VenueCard
