import React from 'react'
import { FC } from 'react'

import BottomSheet from '@/components/BottomSheet'
import { cities } from '@/model/mock-data/cities'

interface Deps {
  open: boolean;
  onClose: () => void;
  onClick: (e: any) => void;
}

const BottomSheetLocation: FC<Deps> = ({open, onClose, onClick}) => {
  return (
    <BottomSheet title="Location" open={open} onClose={onClose}>
      <div className='h-[280px] overflow-y-auto'>
        {/* @ts-ignore  */}
        {cities.map((item, index) => <div key={index} className='hover:bg-primary-200 rounded-sm px-2 py-3 border-b border-gray-400 last:border-none' onClick={onClick}>{item}</div>)}
      </div>
    </BottomSheet>
  )
}

export default BottomSheetLocation