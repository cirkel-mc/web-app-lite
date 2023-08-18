'use client'
import React, { useState, Fragment } from 'react'
import Menu from '../Menu'

const BurgerButton = () => {
  const [isShow, setShow] = useState(false)
  return (
    <Fragment>
      <div className='flex flex-col items-end' onClick={() => setShow(!isShow)}>
        <div className='w-4 h-[2px] bg-sky-50 rounded mb-1' />
        <div className='w-3 h-[2px] bg-sky-50 rounded mb-1' />
        <div className='w-4 h-[2px] bg-sky-50 rounded' />
      </div>
      {isShow && <Menu show={isShow} />}
    </Fragment>
  )
}

export default BurgerButton