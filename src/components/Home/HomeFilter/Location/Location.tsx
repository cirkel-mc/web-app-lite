import React, { Fragment, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

import IconLocation from '@/components/Icons/Location'
import IconUnfold from '@/components/Icons/Unfold'

const BottomSheetLocation = dynamic(() => import('./BottomSheet'))

const Location = () => {
  const [openLocation, setOpenLocation] = useState(false)
  const [location, setLocation] = useState('')

  return (
    <Fragment>
      <div className='w-full min-w-[250px] rounded-full py-2 border-[1px] border-gray-400 bg-white cursor-pointer' onClick={() => setOpenLocation(true)}>
        <div className='flex justify-between px-3'>
          <div className='flex'>
            <IconLocation className='fill-red-600 text-white' />
            <p className='text-sm ml-3'>{location ? location : 'Your Location'}</p>
          </div>
          <IconUnfold />
        </div>
      </div>
      {<BottomSheetLocation open={openLocation} onClose={() => setOpenLocation(false)} onClick={(e) => { console.log(e.currentTarget.textContent); setLocation(e.currentTarget.textContent) }} />}
    </Fragment>
  )
}

export default Location