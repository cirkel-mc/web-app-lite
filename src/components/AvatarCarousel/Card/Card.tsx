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
    <div className='flex flex-col justify-center items-center min-w-[140px] max-w-[140px] cursor-pointer lg:min-w-[148px] lg:h-[230px]'>
      <div className='relative rounded-full bg-slate-400 w-[120px] h-[120px] lg:min-w-[148px] lg:h-[148px]'>
        <Image
          src={image}
          alt=""
          fill
          className='rounded-full object-center object-cover cursor-pointer'
          priority={false}
        />
      </div>
      <div className='w-full mt-4 shadow-lg text-sm text-left px-2 py-2 rounded-md lg:px-4'>
        <p className='mb-[2px] cursor-pointer text-center'>{name}</p>
        <p className='text-xs text-gray-400 text-center'>{instrument}</p>
      </div>
    </div>
  )
}

export default Card