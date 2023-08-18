"use client"

import React from 'react'
import type { FC } from 'react'

import Card from './Card'
import { useRouter } from 'next/navigation'

type DataAvatarCarousel = {
  id: number;
  image: string;
  title: string;
  price: string;
  address: string
}

interface CardCarouselProps {
  title: string;
  data: DataAvatarCarousel[]
}


const CardCarousel: FC<CardCarouselProps> = (props) => {
  const { title, data } = props
  const router = useRouter()

  const handleRedirect = (id: number) => {
    window.location.assign(`/venue/${id}`)
  }

  return (
    <div className='mt-8 pr-4'>
      <p className='text-base font-medium mb-2'>{title}</p>
      <div className='flex gap-2 flex-nowrap overflow-auto pb-2' style={{ width: 'calc(100% + 20px)' }}>
        {data.map((item, index) => <Card key={index} src={item.image} title={item.title} price={item.price} onClick={() => handleRedirect(item.id)} />)}
      </div>
    </div>
  )
}

export default CardCarousel