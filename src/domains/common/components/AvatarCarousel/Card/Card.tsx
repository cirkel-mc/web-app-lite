import React from 'react'
import type { FC } from 'react'
import Image from 'next/image'
import PlaceholderCardImage from '@/views/common/assets/PlaceholderCardImage.png'

interface CardProps {
  name: string
  image: string
  address: string
  instrument: string
  onClick: () => void
}

const Card: FC<CardProps> = ({ name, image, address, instrument, onClick }) => (
  <div
    className="flex flex-col justify-center items-center rounded-2xl cursor-pointer w-[220px] shadow-lg rounded-t-lg"
    onClick={onClick}
  >
    <div className="relative px-[30px] py-6 pb-0  h-[164px] w-full rounded-lg">
      <div className='absolute top-0 left-0 bg-primary-40 w-full h-[120px] z-0 rounded-t-lg' />
      <div className='relative w-[140px] h-[140px] z-1'>
        <Image
          src={image ?? PlaceholderCardImage}
          fill
          alt=""
          className="rounded-full object-center object-cover cursor-pointer"
          priority={false}
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
    <div className='px-1 py-2 pb-6 h-[150px]'>
      <p className="mt-2 text-2xl text-center font-semibold text-ellipsis overflow-hidden line-clamp-2 leading-[29px]">
        {name}
      </p>
      <p className="text-base text-center text-gray-500">{instrument}</p>
      <p className="text-sm text-center text-gray-500">{address}</p>
    </div>
  </div>
)

export default Card
