'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import IconSuccess from '@/domains/common/components/Icons/CheckFill'

function Thankyou() {
  const router = useRouter()
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] shadow-2xl px-6 box-border">
      <IconSuccess className="fill-amber-300 w-[180px] h-[180px]" />
      <p className="text-2xl font-bold mt-4">Thank you for your order</p>
      <p className="mt-2 text-lg text-center">
        Please wait while admin venue confirmed your order{' '}
      </p>
      <button
        className="text-white text-lg rounded-lg fixed left-8 bottom-6 py-3 bg-primary-600 w-full"
        onClick={() => router.push('/')}
        style={{ width: 'calc(100% - 64px)' }}
      >
        See Your Bookings
      </button>
    </div>
  )
}

export default Thankyou
