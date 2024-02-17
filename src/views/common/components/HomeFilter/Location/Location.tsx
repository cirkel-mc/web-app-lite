import React, { Fragment, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

import IconLocation from '@/views/common/components/Icons/Location'
import IconDown from '@/views/common/components/Icons/Down'

const BottomSheetLocation = dynamic(() => import('./BottomSheet'))

const Location = () => {
  const [openLocation, setOpenLocation] = useState(false)
  const [location, setLocation] = useState('')

  return (
    <Fragment>
      <div
        className="w-full min-w-[250px] rounded-full py-1 border-[2px] border-[#717171] bg-white cursor-pointer lg:h-8"
        onClick={() => setOpenLocation(true)}
      >
        <div className="flex justify-between px-3 items-center">
          <IconLocation className="fill-red-600 text-white" />
          <div className="flex items-center">
            <p className="ml-3 text-[#717171] font-semibold">
              {location ? location : 'Your Location'}
            </p>
          </div>
          <IconDown />
        </div>
      </div>
      {
        <BottomSheetLocation
          open={openLocation}
          onClose={() => setOpenLocation(false)}
          onClick={(e) => {
            console.log(e.currentTarget.textContent)
            setLocation(e.currentTarget.textContent)
          }}
        />
      }
    </Fragment>
  )
}

export default Location
