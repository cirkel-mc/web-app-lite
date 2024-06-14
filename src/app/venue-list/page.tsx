'use client'

import FilterItem from '@/domains/common/components/FilterItem/FilterItem'
import { faFilter, faSort } from '@fortawesome/free-solid-svg-icons'
import VenueList from '@/domains/venue-list/components/VenueList'
import MobileLayout from '@/views/common/ui/components/Layout/MobileLayout'

const VenueListPage = () => {
  return (
    <MobileLayout>
      <div className="mt-2 p-[10px] box-border">
        <div className="flex gap-2">
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
        </div>
        <VenueList />
      </div>
    </MobileLayout>
  )
}

export default VenueListPage
