import React from 'react'
import Image from 'next/image'
import PlaceholderImage from '@/views/common/assets/PlaceholderCardImage.png'
import Button from '../Button'

interface CardProps {
  src: string
  name: string
  price: string
  address: string
  btnText?: string
  onClick: () => void
  onBuy: () => void
  withCta?: boolean
  isDisabled?: boolean
}

function Card(props: CardProps) {
  const { src, name, price, address, btnText, withCta, isDisabled, onClick, onBuy } =
    props

  return (
    <div
      className="flex flex-col rounded-[10px] relative  cursor-pointer pb-4"
      style={{ boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px 0px' }}
    >
      <div className="relative w-[180px] h-[180px]" onClick={onClick}>
        <Image
          src={src ?? PlaceholderImage}
          fill
          alt=""
          className="rounded-t-[10px]"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="flex flex-col items-center justify-start mt-[10px] px-[2px]">
        <p className="text-2xl text-center font-semibold text-ellipsis overflow-hidden line-clamp-2 mb-1 leading-[29px]">
          {name}
        </p>
        <p className="text-base text-gray-600 font-medium">{price}</p>
        <p className='text-gray-500 text-sm'>{address}</p>
      </div>
      {withCta && (
        <div className="w-full px-2 py-2 flex justify-center mt-2">
          <Button
            disabled={isDisabled}
            size="sm"
            round="sm"
            classes="text-base font-normal lg:font-semibold lg:text-[18px] lg:p-[10px]"
            variant="primary"
            onClick={onBuy}
          >
            {btnText}
          </Button>
        </div>
      )}
    </div>
  )
}

export default Card
