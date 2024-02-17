import React from 'react'
import type { FC } from 'react'
import Image from 'next/image'
import PlaceholderCardImage from '@/views/common/assets/PlaceholderCardImage.png'

interface CardProps {
  name: string
  image: string
  instrument: string
}

const Card: FC<CardProps> = ({ name, image, instrument }) => {
  return (
    <div
      className="p-5 lg:p-5 flex flex-col justify-center items-center rounded cursor-pointer w-[193px] min-h-[239px] shadow-[0px_0px_10px_rgba(0,0,0,0.25)]"
    >
      <div className="relative rounded-full bg-slate-400 w-[153px] h-[156px]">
        <Image
          src={image ?? PlaceholderCardImage}
          alt=""
          fill
          className="rounded-full object-center object-cover cursor-pointer"
          priority={false}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <p className="mt-2 mb-2 text-2xl text-center font-semibold text-ellipsis overflow-hidden line-clamp-2 leading-[29px]">
        {name}
      </p>
      <p className='text-base'>{instrument}</p>
    </div>
  )
}

export default Card
