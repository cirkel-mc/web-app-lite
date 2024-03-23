'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Home2,
  Music,
  User,
  Plus,
  Time,
} from '@/domains/common/components/Icons'

import { useScreenSize } from '@/domains/common/hooks/screen/use-screen-size'
import Item from './Item'

interface BottomNavigationProps {
  isExclude?: boolean
}

function BottomNavigation({ isExclude }: BottomNavigationProps) {
  const { width } = useScreenSize()
  const router = useRouter()
  const [activeMenu, setActiveMenu] = useState('')

  const handleChangeMenu = (menu: string, url: string) => {
    setActiveMenu(menu)
    router.push(url)
  }

  if (isExclude) return <div />

  return (
    <div className="w-full bg-white fixed bottom-0 left-0 px-2 py-3 shadow-2xl ">
      <div className="max-w-[500px] mx-auto flex justify-around">
        <Item
          Icon={Home2}
          title="Home"
          isActive={activeMenu === 'Home'}
          onClick={() => handleChangeMenu('Home', '/')}
        />
        <Item
          Icon={Music}
          title="Session"
          isActive={activeMenu === 'Session'}
          onClick={() => handleChangeMenu('Session', '/session')}
        />
        <div
          role="button"
          className="flex flex-col justify-center items-center gap-1 bg-primary-40 pt-2 pb-1 px-2 rounded-md"
          onClick={() => router.push('create-session')}
        >
          <Plus size={16} />
          <span className="text-[12px] text-white">Create</span>
        </div>
        <Item
          Icon={Time}
          title="Order"
          isActive={activeMenu === 'Order'}
          onClick={() => handleChangeMenu('Order', '/orders')}
        />
        <Item
          Icon={User}
          title="Profile"
          isActive={activeMenu === 'Profile'}
          onClick={() => handleChangeMenu('Profile', '/profile')}
        />
      </div>
    </div>
  )
}

export default BottomNavigation
