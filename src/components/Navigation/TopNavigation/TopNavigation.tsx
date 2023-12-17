'use client'

import { Fragment } from 'react'

import { useAuth } from '@/hooks/use-auth'
import BurgerButton from './BurgerButton'
import Logo from './Logo'
import Cart from './Cart'

const TopNavigation = () => {
  const { isAuth } = useAuth()

  return (
    <Fragment>
      <div className="w-full fixed left-0 top-0 text-white bg-primary-40 z-50" style={{ boxShadow: '0 3px 5px 0 rgba(0,0,0,.05), 0 1px 18px 0 rgba(0,0,0,.05), 0 6px 10px 0 rgba(0,0,0,.05)' }}>
        <div className="flex justify-between items-center px-4 py-4 max-w-[500px] md:max-w-[700px] lg:max-w-[1024px] ml-auto mr-auto">
          <Logo />
          <div className='flex gap-4 items-center justify-center'>
            {isAuth && <Cart ordersCount={1} />}
            <BurgerButton />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default TopNavigation