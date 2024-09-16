import React, { useState } from 'react'
import Image from 'next/image'
import PlaceholderStudio from '@/views/common/assets/placeholder-studio.png'
import { useRouter } from 'next/navigation'
import Time from './Time'

const VenueCard = () => {
  const router = useRouter()
  const [time, setTime] = useState('')

  return (
    <div className="flex gap-4">
      <div className="min-w-[120px] max-w-1/4 h-[150px] rounded-lg relative">
        <Image src={PlaceholderStudio} alt="" fill className='rounded-2xl' />
      </div>
      <div>
        <p className='text-2xl mb-[2px]'>Studio G-Zone</p>
        <p className='text-sm text-gray-500'>Jakarta, Kemang</p>
        <p className='font-medium text-gray-700'>Rp 150.000</p>
        <div className="flex justify-between mt-2 items-end">
          <div className="flex flex-col gap-2">
            <p>Available:</p>
            <div className="flex flex-wrap gap-2">
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
              <p>more...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VenueCard
