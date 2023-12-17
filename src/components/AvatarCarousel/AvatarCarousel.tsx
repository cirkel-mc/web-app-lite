import React from 'react'
import type { FC } from 'react'
import PlaceholderCardImage from '@/assets/PlaceholderCardImage.png'
import { StaticImageData } from 'next/image'

import Card from './Card'

type AvatarCarouselData = {
  id: number
  name: string;
  image?: any;
  instrument: string;
}

interface AvatarCarouselProps {
  title: string;
  data: AvatarCarouselData[]
}

const AvatarCarousel: FC<AvatarCarouselProps> = ({ title, data }) => {
  return (
    <div className='mt-8 pr-4 w-full lg:mb-8'>
      <p className='text-base lg:text-2xl font-medium mb-2 lg:text-2xl lg:font-bold lg:mb-4 lg:ml-1'>{title}</p>
      <div className='flex gap-4 flex-nowrap overflow-auto pb-2 pt-6 lg:gap-6' style={{ width: 'calc(100% + 20px)' }}>
        {data.map((item, index) => <Card key={index} name={item.name} image={item.image ?? PlaceholderCardImage} instrument={item.instrument} />)}
      </div>
    </div>
  )
}

export default AvatarCarousel