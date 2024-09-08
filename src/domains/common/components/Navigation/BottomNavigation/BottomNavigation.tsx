'use client'

import React, { useState, useMemo, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {
  faHome,
  faMusic,
  faAdd,
  faClockFour,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Loader from './Item/Loader'
import { useAuth } from '@/domains/common/hooks/auth/use-auth'
import Item from './Item'

interface BottomNavigationProps {
  isExclude?: boolean
}

function BottomNavigation({ isExclude }: BottomNavigationProps) {
  const router = useRouter()
  const { user } = useAuth()
  const [isMount, setIsMount] = useState(false)
  const [activeMenu, setActiveMenu] = useState('')

  const handleChangeMenu = (menu: string, url: string) => {
    setActiveMenu(menu)
    router.push(url)
  }

  const render = useMemo(() => {
    if (!isMount) {
      return <Loader />
    }
    if (isExclude) return <div />
    if (!user || isExclude && isMount) return <div />
    return (
      <div className="w-full bg-white fixed bottom-0 left-0 px-2 py-3 shadow-2xl ">
        <div className="max-w-[500px] mx-auto flex justify-around">
          <Item
            loading={!isMount}
            Icon={faHome}
            title="Home"
            isActive={activeMenu === 'Home'}
            onClick={() => handleChangeMenu('Home', '/')}
          />
          <Item
            loading={!isMount}
            Icon={faMusic}
            title="Session"
            isActive={activeMenu === 'Session'}
            onClick={() => handleChangeMenu('Session', '/session-list')}
          />
          <div
            role="button"
            className="flex flex-col justify-center items-center gap-1 bg-primary-40 pt-2 pb-1 px-2 rounded-md"
            onClick={() => router.push('create-session')}
          >
            <FontAwesomeIcon icon={faAdd} className="w-4 h-4 text-white" />
            <span className="text-[12px] text-white">Create</span>
          </div>
          <Item
            loading={!isMount}
            Icon={faClockFour}
            title="Order"
            isActive={activeMenu === 'Order'}
            onClick={() => handleChangeMenu('Order', '/orders')}
          />
          <Item
            loading={!isMount}
            Icon={faUser}
            title="Profile"
            isActive={activeMenu === 'Profile'}
            onClick={() => handleChangeMenu('Profile', '/profile')}
          />
        </div>
      </div>
    )
  }, [user, isMount, isExclude, activeMenu])

  useEffect(() => {
    setIsMount(true)
  }, [])


  return render
}

export default BottomNavigation
