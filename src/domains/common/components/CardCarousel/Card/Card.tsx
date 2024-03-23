'use client'

import React from 'react'
import type { FC } from 'react'

import Card from '@/views/common/ui/components/Card'
import { emitter } from '@/domains/common/utils/event/emitter'

interface CardProps {
  src: string
  title: string
  price: string
  onClick: () => void
}

const CustomCard: FC<CardProps> = (props) => {
  const { src, title, price, onClick } = props

  const handleBuy = () => {
    emitter.emit('@buy-from-card', { title, price, src })
  }

  return (
    <Card
      src={src}
      name={title}
      price={price}
      onClick={onClick}
      onBuy={handleBuy}
      btnText="Book"
      withCta
    />
  )
}

export default CustomCard
