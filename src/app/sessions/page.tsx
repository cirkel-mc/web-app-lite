'use client'

import React, { useState } from 'react'
import MobileLayout from '@/views/common/ui/components/Layout/MobileLayout'
import SessionCard from '@/domains/session-list/components/SessionCard/SessionCard'
import { twMerge } from 'tailwind-merge'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function Session() {
  const router = useRouter()
  const [active, setActive] = useState('all')

  return (
    <MobileLayout>
      <div
        className="relative -top-[60px] left-2 z-10 bg-gray-100 w-9 h-9 rounded-full flex justify-center items-center"
        onClick={() => router.back()}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="h-5 w-5 text-primary-30"
        />
      </div>
      <div className="relative flex gap-4 justify-center -mt-[65px] mb-6 px-4">
        <div
          className={twMerge(
            'hover:border-b-2 hover:border-b-primary-40 hover:font-medium w-fit text-lg',
            active === 'all' && 'border-b-primary-40 font-medium border-b-2',
          )}
          onClick={() => setActive('all')}
        >
          All
        </div>
        <div
          className={twMerge(
            'hover:border-b-2 hover:border-b-primary-40 hover:font-medium w-fit text-lg',
            active === 'upcoming' &&
            'border-b-primary-40 font-medium border-b-2',
          )}
          onClick={() => setActive('upcoming')}
        >
          Upcoming
        </div>
        <div
          className={twMerge(
            'hover:border-b-2 hover:border-b-primary-40 hover:font-medium w-fit text-lg',
            active === 'past' && 'border-b-primary-40 font-medium border-b-2',
          )}
          onClick={() => setActive('past')}
        >
          Past
        </div>
      </div>
      <div className="flex gap-2 px-4 mb-1 overflow-auto w-full pb-1">
        <div className="rounded-2xl w-fit py-1 px-4 shadow-sm border-[1px] border-gray-100 hover:bg-secondary-40 hover:border-none hover:text-white">
          Jazz
        </div>
        <div className="rounded-2xl w-fit py-1 px-4 shadow-sm border-[1px] border-gray-100 hover:bg-secondary-40 hover:border-none hover:text-white">
          Funk
        </div>
        <div className="rounded-2xl w-fit py-1 px-4 shadow-sm border-[1px] border-gray-100 hover:bg-secondary-40 hover:border-none hover:text-white">
          Rock
        </div>
        <div className="rounded-2xl w-fit py-1 px-4 shadow-sm border-[1px] border-gray-100 hover:bg-secondary-40 hover:border-none hover:text-white">
          Pop
        </div>
        <div className="rounded-2xl w-fit py-1 px-4 shadow-sm border-[1px] border-gray-100 hover:bg-secondary-40 hover:border-none hover:text-white">
          Indie
        </div>
        <div className="rounded-2xl w-fit py-1 px-4 shadow-sm border-[1px] border-gray-100 hover:bg-secondary-40 hover:border-none hover:text-white">
          Classic
        </div>
      </div>
      <div className="flex  flex-col gap-4 overflow-auto">
        <SessionCard />
        <SessionCard />
        <SessionCard />
        <SessionCard />
        <SessionCard />
        <SessionCard />
      </div>
    </MobileLayout>
  )
}

export default Session
