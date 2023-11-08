"use client"

import React from 'react'
import type { FC } from 'react'
import Image from 'next/image'
import Button from '@/ui/component/Button'

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
    <div className='min-w-[120px] max-w-[120px] h-[210px] rounded-t-xl rounded-b-sm shadow-md lg:min-w-[148px] lg:h-[230px]'>
      <div className='w-full h-[100px] lg:h-[120px] relative' onClick={handleClick}>
        <Image 
          src={src} 
          alt={title} 
          fill
          className='rounded-t-xl cursor-pointer'
          priority={false}
        />
      </div>
      <div className='px-2 py-2 h-[70px]'>
        <p className='text-xs text-ellipsis mb-1'>{title}</p>
        <p className='text-sm font-bold'>{price}</p>
      </div>
      <div className='px-2 py-0 -mb-2 lg:-mb-4 lg:relative lg:-bottom-[5px]'>
        <Button size='sm' round='md' classes='w-full text-xs lg:text-sm' variant='primary'>Book</Button>
      </div>
    </div>
  )
}

export default Card