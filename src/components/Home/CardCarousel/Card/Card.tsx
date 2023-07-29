"use client"

import React from 'react'
import type { FC } from 'react'
import Image from 'next/image'

interface CardProps {
  src: string;
  title: string;
  price: string;
  onClick: () => void;
}

const Card: FC<CardProps> = (props) => {
  const { src, title, price, onClick } = props

  const handleClick = () => {
    onClick()
    console.log('clicked')
  }

  return (
    <div className='min-w-[120px] max-w-[120px] rounded-t-xl rounded-b-sm shadow-md' onClick={handleClick}>
      <div className='w-full h-[100px] relative' >
        <Image 
          src={src} 
          alt={title} 
          fill
          className='rounded-t-xl'
          priority={false}
        />
      </div>
      <div className='px-2 py-2'>
        <p className='text-xs text-ellipsis mb-1'>{title}</p>
        <p className='text-sm font-medium'>{price}</p>
      </div>
    </div>
  )
}

export default Card