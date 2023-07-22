"use client"

import { Fragment, useState } from 'react'
import { useRouter } from 'next/navigation'

import Menu from "./Menu"

const TopNavigation = () => {
  const router = useRouter()
  const [isShow, setShow] = useState(false)

  return (
    <Fragment>
      <div className="w-full fixed left-0 top-0 bg-sky-500 z-50" style={{ boxShadow: '0 3px 5px 0 rgba(0,0,0,.05), 0 1px 18px 0 rgba(0,0,0,.05), 0 6px 10px 0 rgba(0,0,0,.05)' }}>
        <div className="flex justify-between items-center px-4 py-4">
          <p className="text-3xl text-sky-50" onClick={() => router.push('/')}>Comrades</p>
          <div className='flex flex-col items-end' onClick={() => setShow(!isShow)}>
            <div className='w-4 h-[2px] bg-sky-50 rounded mb-1' />
            <div className='w-3 h-[2px] bg-sky-50 rounded mb-1' />
            <div className='w-4 h-[2px] bg-sky-50 rounded' />
          </div>
        </div>
      </div>
      <Menu show={isShow} />
    </Fragment>
  )
}

export default TopNavigation