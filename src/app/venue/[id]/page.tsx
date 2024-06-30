'use client'

import Media from '@/domains/venue/components/Media'
import Tabs from '@/views/common/ui/components/Tabs'
import { TAB_ITEMS } from '@/domains/venue/constants/tab-list'
import Button from '@/views/common/ui/components/Button'

export default function VenueDetail() {
  return (
    <div className='relative pb-10'>
      <Media />
      <div className='mt-4'>
        <Tabs data={TAB_ITEMS} />
      </div>
      <div className='flex justify-between items-center py-4 px-2 fixed bottom-0 left-0 w-full bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.25)]'>
        <span className='text-lg font-medium'>Rp30.000</span>
        <Button variant='primary' size='md' round='md'>Continue</Button>
      </div>
    </div>
  )
}
