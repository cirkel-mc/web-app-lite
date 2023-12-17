"use client"

import React from 'react'
import type { FC } from 'react'
import Image from 'next/image'
import Button from '@/ui/components/Button'
import Card from '@/ui/components/Card'

interface CardProps {
  src: string;
  title: string;
  price: string;
  onClick: () => void;
}

const CustomCard: FC<CardProps> = (props) => {
  const { src, title, price, onClick } = props
  
  return (
    <Card src={src} name={title} price={price} onClick={onClick} btnText='Book Now!'  />
  )
}

export default CustomCard