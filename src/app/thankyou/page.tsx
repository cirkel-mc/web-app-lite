'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Lottie from 'lottie-react';
import AnimationData from '@/views/common/assets/Success-Booking-Animation.json';
import Button from '@/views/common/ui/components/Button';


function Thankyou() {
  const router = useRouter()
  return (
    <div className="flex flex-col justify-center items-center max-w-[500px] mx-auto h-[100vh] px-6 box-border">
      <Lottie animationData={AnimationData} className='max-h-[400px]' size={40} loop />
      <p className="text-2xl font-bold mt-4 text-neutral-900">Thank you for your order</p>
      <p className="mt-2 text-base text-center text-neutral-900">
        Please wait while admin venue confirmed your order. See you on your venue !
      </p>
      <Button variant='secondary' size='md' round='2xl' classes='w-fit mx-auto mt-4 rounded-xl' onClick={() => router.push('/orders')}>See your bookings</Button>
    </div>
  )
}

export default Thankyou
