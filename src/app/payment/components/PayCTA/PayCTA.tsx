'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/views/common/ui/components/Button'

function PayCTA() {
  const router = useRouter()
  return (
    <div className="fixed bottom-0 left-0 shadow-2xl w-full px-4 py-4 bg-white z-10">
      <div className="max-w-[500px] mx-auto flex items-center justify-between bg-white">
        <p className="text-gray-600 font-medium">Rp. 170.000</p>
        <Button
          variant='primary' round='md' size='md'
          classes='w-fit'
          onClick={() => router.push('/thankyou')}
        >
          Book Now!
        </Button>
      </div>
    </div>
  )
}

export default PayCTA
