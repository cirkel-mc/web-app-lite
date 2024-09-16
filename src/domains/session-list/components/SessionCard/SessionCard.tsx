'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import PlaceholderImage from '@/views/common/assets/placeholder-studio.png'
import Loader from './Loader'
import { useInView } from 'react-intersection-observer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocation } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'

const SessionCard = () => {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const {
    ref,
    inView: v,
    entry: e,
  } = useInView({
    threshold: [0, 0.25, 0.5, 0.75, 1],
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  return v || mounted ? (
    <div className=" border-gray-100 border-[1px] rounded-xl shadow-sm relative" ref={ref} onClick={() => router.push('/session/1')}>
      <div className='w-full h-[150px] relative'>
        <Image src={PlaceholderImage} alt='' fill className='rounded-t-lg object-cover' />
      </div>
      <div className='pt-2 pb-4 px-4'>
        <div className='flex justify-between text-gray-400'>
          <p>2 slots available</p>
          <p>23 Oct 2024 17.00 WIB</p>
        </div>
        <div className='flex gap-1 mt-2'>
          <p className='font-semibold'>Funk in the City</p>
          <span>by</span>
          <p className='text-gray-500'>Funky Kopral</p>
        </div>
        <p className='text-gray-500 my-4'>Currently we are looking for Bassist with Jazzy Groove to </p>
        <p className='text-gray-500 flex gap-2'>
          <a href="https://www.google.com/maps/dir//-6.245715439710789, 106.7893879997882" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMapLocation} className='w-4 h-4 text-orange-500 cursor-pointer' /></a>
          Jakarta, Kemang @Abbe Studio
        </p>
      </div>
    </div>
  ) : (
    <Loader />
  )
}

export default SessionCard
