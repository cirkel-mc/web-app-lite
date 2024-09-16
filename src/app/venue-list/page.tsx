'use client'

import { useState } from 'react'
import BottomSheet from '@/domains/common/components/BottomSheet'
import VenueList from '@/domains/venue-list/components/VenueList'
import MobileLayout from '@/views/common/ui/components/Layout/MobileLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faList
} from '@fortawesome/free-solid-svg-icons'

const VenueListPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <MobileLayout>
      <div className="mt-4 p-[10px] box-border">
        <div className='rounded-xl shadow-input w-fit py-1 px-4 border-[1px] border-gray-200' onClick={() => setOpen(true)}>
          <FontAwesomeIcon icon={faList} className='w-4 h-4 mr-2' />
          <span className='text-neutral-600'>Filter</span>
        </div>
        {/* <div className="flex gap-2">
          <FilterItem
            icon={faFilter}
            label="Filter"
            isActive
            onClick={() => null}
          />
          <FilterItem
            icon={faSort}
            label="Sort"
            isActive
            onClick={() => null}
          />
        </div> */}
        <VenueList />
      </div>
      <BottomSheet title="Filter" open={open} onClose={() => setOpen(false)}>
        <p>Filter ceritanya</p>
      </BottomSheet>
    </MobileLayout>
  )
}

export default VenueListPage
