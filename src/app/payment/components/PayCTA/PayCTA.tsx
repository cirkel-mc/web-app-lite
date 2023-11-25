'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const PayCTA = () => {
  const router = useRouter()
  return (
    <div className='fixed bottom-0 left-0 shadow-2xl w-full px-4 py-4 bg-teal-600'>
      <div className='max-w-[500px] mx-auto flex items-center justify-between'>
        <p className='text-white'>Rp. 170.000/hour</p>
        <button className='bg-white px-2 py-2 rounded-lg' onClick={() => router.push('/thankyou')}>Book Now!</button>
      </div>
    </div>
  )
}

export default PayCTA