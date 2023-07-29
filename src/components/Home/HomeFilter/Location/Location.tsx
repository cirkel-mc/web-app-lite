import React, { Fragment, useState } from 'react'

import IconLocation from '@/components/Icons/Location'
import IconUnfold from '@/components/Icons/Unfold'
import BottomSheet from '@/components/BottomSheet'

const Location = () => {
  const [openLocation, setOpenLocation] = useState(false)

  return (
    <Fragment>
      <div className='w-full min-w-[250px] rounded-full px-4 py-2 border-[1px] border-gray-400 bg-white cursor-pointer' onClick={() => setOpenLocation(true)}>
        <div className='flex justify-between'>
          <div className='flex'>
            <IconLocation className='fill-red-600 text-white' />
            <p className='text-base ml-3'>Select Location</p>
          </div>
          <IconUnfold />
        </div>
      </div>
      <BottomSheet title="Location" open={openLocation} onClose={() => setOpenLocation(false)}>
        <div>
          <div className='hover:bg-sky-200 rounded-sm px-2 py-1'>Jakarta</div>
          <div className='hover:bg-sky-200 rounded-sm px-2 py-1'>Bandung</div>
          <div className='hover:bg-sky-200 rounded-sm px-2 py-1'>Semarang</div>
          <div className='hover:bg-sky-200 rounded-sm px-2 py-1'>Bogor</div>
        </div>
      </BottomSheet>
    </Fragment>
  )
}

export default Location