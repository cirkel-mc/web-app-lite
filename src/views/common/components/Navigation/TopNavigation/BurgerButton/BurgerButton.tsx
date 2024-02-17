'use client'

import React, { useState, Fragment } from 'react'
import Menu from '../Menu'

const BurgerButton = () => {
  const [isShow, setShow] = useState(false)

  return (
    <Fragment>
      <div
        className="flex flex-col items-end cursor-pointer"
        onClick={() => setShow(!isShow)}
      >
        <div className="w-7 h-[4px] bg-white rounded-lg mb-[5px]" />
        <div className="w-7 h-[4px] bg-white rounded mb-[5px] duration-300" />
        <div className="w-7 h-[4px] bg-white rounded" />
      </div>
      {isShow && <Menu show={isShow} onClose={() => setShow(false)} />}
    </Fragment>
  )
}

export default BurgerButton
