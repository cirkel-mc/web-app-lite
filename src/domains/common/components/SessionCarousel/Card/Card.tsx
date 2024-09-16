import React from 'react'
import Button from '@/views/common/ui/components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPerson,
  faCalendar,
  faClockFour,
} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import PlaceholderImage from '@/views/common/assets/placeholder-studio.png'
import { useRouter } from 'next/navigation'

function Card() {
  const router = useRouter()

  return (
    <div className="flex gap-4 bg-white rounded-xl p-3 shadow-[0px_0px_10px_rgba(0,0,0,0.25)]" onClick={() => router.push('/session/1')}>
      <div className='w-[calc(100%-130px-16px)] flex flex-col items-center'>
        <p className="text-xl font-semibold mb-4">Session_Name</p>
        <div className="flex flex-wrap justify-center gap-2 text-sm">
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
        <p className="text-neutral-500 text-center mt-3 mb-3">Jakarta, Menteng Dalam</p>
        <Button
          size="sm"
          round="sm"
          classes="text-base font-normal mt-2"
          variant="primary"
        >
          Join
        </Button>
      </div>
      <div className='relative w-[130px] h-full rounded-xl'>
        <Image src={PlaceholderImage} alt='' fill className='rounded-xl' />
      </div>
    </div>
  )
}

export default Card
