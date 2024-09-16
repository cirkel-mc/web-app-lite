'use client'

import React from 'react'

import Bill from './components/Bill'
import Description from './components/Description'
import PaymentMethod from './components/PaymentMethod/PaymentMethod'
import PayCTA from './components/PayCTA'
import { cardCarouselData } from '@/models/common/mock-data/card-carousel-data'
import Image from 'next/image'

function Payment() {
  return (
    <div className="px-4 pt-[80px] max-w-[500px] mx-auto pb-[70px]">
      <Description />
      <PaymentMethod />
      <Bill />
      <PayCTA />
      <div className="mt-8 pr-4 w-full">
        <p className="text-xl font-semibold mb-2">
          Recommended Studio
        </p>
        <div className="flex gap-4 lg:gap-4 flex-nowrap overflow-auto py-2 pl-2">
          {cardCarouselData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col rounded-[10px] relative  cursor-pointer pb-4"
              style={{ boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px 0px' }}
            >
              <div className="relative w-[150px] h-[140px]" onClick={() => null}>
                <Image
                  src={item.image}
                  fill
                  alt=""
                  className="rounded-t-[10px]"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="flex flex-col items-center justify-start mt-[10px] px-[2px]">
                <p className="text-lg text-center font-semibold text-ellipsis overflow-hidden line-clamp-2 mb-1 leading-[29px]">
                  {item.title}
                </p>
                <p className="text-base text-gray-600 font-medium">{item.price}</p>
                <p className='text-gray-500 text-sm'>{item.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Payment
