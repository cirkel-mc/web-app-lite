'use client'
import React, { useState, Fragment } from 'react'
import clsx from 'clsx'
import Menu from '../Menu'

const BurgerButton = () => {
  const [isShow, setShow] = useState(false)

  console.log(isShow)

  return (
    <Fragment>
      <div className='flex flex-col items-end cursor-pointer' onClick={() => setShow(!isShow)}>
        <div className='w-4 h-[2px] bg-teal-50 rounded mb-1' />
        <div className={clsx('h-[2px] bg-teal-50 rounded mb-1 duration-300', isShow ? 'w-4' : 'w-3')} />
        <div className='w-4 h-[2px] bg-teal-50 rounded' />
      </div>
      {isShow && <Menu show={isShow} onClose={() => setShow(false)} />}
    </Fragment>
  )
}

export default BurgerButton