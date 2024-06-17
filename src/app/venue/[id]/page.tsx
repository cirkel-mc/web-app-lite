'use client'

import Media from '@/domains/venue/components/Media'
import Tabs from '@/views/common/ui/components/Tabs'
import { TAB_ITEMS } from '@/domains/venue/constants/tab-list'

export default function VenueDetail() {
  return (
    <>
      <Media />
      <div className='mt-4'>
        <Tabs data={TAB_ITEMS} />
      </div>
    </>
  )
}
