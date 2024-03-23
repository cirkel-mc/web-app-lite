'use client'

import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import BottomNavigation from '@/domains/common/components/Navigation/BottomNavigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faWaveSquare,
  faLocation,
} from '@fortawesome/free-solid-svg-icons'

function Discovery() {
  const [active, setActive] = useState(0)

  return (
    <div>
      <div className="flex flex-col justify-center items-center pt-4 pb-2 border-b-[1px] border-neutral-100">
        <div className="flex items-center w-[80%] rounded-2xl border-neutral-300 border-[1px] px-4 py-1">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="Search the session or venue"
            className="w-full outline-none placeholder:text-neutral-400 text-neutral-950"
          />
        </div>
        <div className="w-full flex justify-start px-4 items-center gap-6 mt-4">
          <div
            className={twMerge(
              'relative px-1 flex flex-col justify-center items-center duration-300 ease-in-out',
              active === 0 ? 'text-primary-40' : '',
            )}
            data-key="0"
            onClick={() => setActive(0)}
          >
            <FontAwesomeIcon
              icon={faWaveSquare}
              className={active === 0 ? '#9a01bf' : '#94a3b8'}
            />
            <p
              className={twMerge(
                'text-xs',
                active === 0 ? 'text-primary-40' : 'text-neutral-400',
              )}
            >
              Meet
            </p>
            <div
              className={twMerge(
                'h-[2px] bg-primary-40 absolute bottom-[-9px] duration-300 ease-in-out',
                active === 0 ? 'w-full' : 'w-0',
              )}
            />
          </div>
          <div
            className={twMerge(
              'relative px-1 flex flex-col justify-center items-center duration-300 ease-in-out',
              active === 1 ? 'text-primary-40' : '',
            )}
            data-key="1"
            onClick={() => setActive(1)}
          >
            <FontAwesomeIcon
              icon={faLocation}
              color={active === 1 ? '#9a01bf' : '#94a3b8'}
            />
            <p
              className={twMerge(
                'text-xs',
                active === 1 ? 'text-primary-40' : 'text-neutral-400',
              )}
            >
              Venue
            </p>
            <div
              className={twMerge(
                'h-[2px] bg-primary-40 absolute bottom-[-9px] duration-300 ease-in-out',
                active === 1 ? 'w-full' : 'w-0',
              )}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-4 py-6 gap-5">
        <div className="h-[100px] w-full bg-neutral-200 rounded-2xl border-[1px] border-neutral-200" />
        <div className="h-[100px] w-full bg-neutral-200 rounded-2xl border-[1px] border-neutral-200" />
        <div className="h-[100px] w-full bg-neutral-200 rounded-2xl border-[1px] border-neutral-200" />
        <div className="h-[100px] w-full bg-neutral-200 rounded-2xl border-[1px] border-neutral-200" />
      </div>
      <BottomNavigation />
    </div>
  )
}

export default Discovery
