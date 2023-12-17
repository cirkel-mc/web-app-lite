import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Home, Profile, Book, Activity } from 'iconsax-react'
import Item from './Item'

const BottomNavigation = () => {
  const router = useRouter()
  const [activeMenu, setActiveMenu] = useState('')

  const handleChangeMenu = (menu: string, url: string) => {
    setActiveMenu(menu);
    router.push(url)
  }

  return (
    <div className='w-full bg-white fixed bottom-0 left-0 px-2 py-3 shadow-2xl flex justify-around'>
      <Item Icon={Home} title='Home' isActive={activeMenu === 'Home'} onClick={() => handleChangeMenu('Home', '/')} />
      <Item Icon={Activity} title='Session' isActive={activeMenu === 'Session'} onClick={() => handleChangeMenu('Home', '/session')} />
      <Item Icon={Book} title='Order' isActive={activeMenu === 'Order'} onClick={() => handleChangeMenu('Order', '/orders')} />
      <Item Icon={Profile} title='Profile' isActive={activeMenu === 'Profile'} onClick={() => handleChangeMenu('Profile', '/profile')} />
    </div>
  )
}

export default BottomNavigation