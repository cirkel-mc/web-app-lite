import React from 'react'
import type { FC } from 'react'
import PlaceholderCardImage from '@/views/common/assets/PlaceholderCardImage.png'

import Card from './Card'

type AvatarCarouselData = {
  id: number
  name: string
  image?: any
  instrument: string
}

interface AvatarCarouselProps {
  title: string
  data: AvatarCarouselData[]
}

const AvatarCarousel: FC<AvatarCarouselProps> = ({ title, data }) => (
  <div className="mt-8 pr-4 w-full lg:mb-8">
    <p className="text-2xl font-semibold mb-2 lg:text-2xl lg:font-bold lg:mb-2 lg:ml-1">
      {title}
    </p>
    <div
      className="flex gap-4 flex-nowrap overflow-auto pt-2 pb-2 lg:pt-6 lg:gap-6"
      style={{ width: 'calc(100% + 20px)' }}
    >
      {data.map((item, index) => (
        <Card
          key={index}
          name={item.name}
          image={item.image ?? PlaceholderCardImage}
          instrument={item.instrument}
        />
      ))}
    </div>
  </div>
)

export default AvatarCarousel
