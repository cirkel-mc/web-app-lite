"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

import IconBack from '@/components/Icons/Back'

const Header = () => {
  const router = useRouter()
  
  return (
    <div className='relative left-0 top-0 flex items-center w-full pt-4'>
      <IconBack className='z-10 w-8' onClick={() => router.back()} />
      <p className='text-lg absolute left-1/2 -translate-x-1/2'>Payment</p>
    </div>
  )
}

export default Header