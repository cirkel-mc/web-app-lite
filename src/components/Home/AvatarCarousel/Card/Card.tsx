import React from 'react'
import type { FC } from 'react'
import Image from 'next/image'

interface CardProps {
  name: string;
  image: string;
  instrument: string;
}

const Card: FC<CardProps> = ({name, image, instrument}) => {
  return (
    <div className='flex flex-col justify-center items-center min-w-[140px] max-w-[140px] -z-[1]'>
      <div className='relative rounded-full bg-slate-400 w-[120px] h-[120px]'>
        <Image
          src={image}
          alt=""
          fill
          className='rounded-full object-center object-cover'
          priority={false}
        />
      </div>
      <div className='w-full mt-4 shadow-md text-sm text-left px-2 py-2 rounded-md'>
        <p className='mb-[2px]'>{name}</p>
        <p className='text-xs text-gray-400'>{instrument}</p>
      </div>
    </div>
  )
}

export default Card