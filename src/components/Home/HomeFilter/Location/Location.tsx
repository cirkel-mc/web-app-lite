import React, { Fragment, useState } from 'react'

import IconLocation from '@/components/Icons/Location'
import IconUnfold from '@/components/Icons/Unfold'
import BottomSheet from '@/components/BottomSheet'

import { cities } from '@/model/mock-data/cities'

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
      <BottomSheet title="Location" open={openLocation} onClose={() => setOpenLocation(false)}>
        <div className='h-[280px] overflow-y-auto'>
          {/* @ts-ignore  */}
          {cities.map((item, index) => <div key={index} className='hover:bg-sky-200 rounded-sm px-2 py-3 border-b border-gray-400 last:border-none' onClick={(e) => { console.log(e.currentTarget.textContent); setLocation(e.currentTarget.textContent)}}>{item}</div>)}
        </div>
      </BottomSheet>
    </Fragment>
  )
}

export default Location