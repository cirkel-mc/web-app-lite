'use client'

import React from 'react'
import type { FC } from 'react'
import { useRouter } from 'next/navigation'
import PlaceholderCardImage from '@/views/common/assets/PlaceholderCardImage.png'

import Card from './Card'

type AvatarCarouselData = {
  id: number
  name: string
  address: string
  image?: any
  instrument: string
}

interface AvatarCarouselProps {
  title: string
  data: AvatarCarouselData[]
}

const AvatarCarousel: FC<AvatarCarouselProps> = ({ title, data }) => {
  const router = useRouter()

  return (
    <div className="mt-8 pr-4 w-full mb-8">
      <p className="text-2xl font-semibold mb-2">
        {title}
      </p>
      <div
        className="flex gap-4 flex-nowrap overflow-auto pt-2 pb-2 pl-2"
        style={{ width: 'calc(100% + 20px)' }}
      >
        {data.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            address={item.address}
            image={item.image ?? PlaceholderCardImage}
            instrument={item.instrument}
            onClick={() =>
              router.push(`/musician/${String(item.name).replace(' ', '-')}`)
            }
          />
        ))}
      </div>
    </div>
  )
}

export default AvatarCarousel
