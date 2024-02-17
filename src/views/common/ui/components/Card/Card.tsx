import React from 'react'
import Image from 'next/image'
import Button from '../Button'
import PlaceholderImage from '@/views/common/assets/PlaceholderCardImage.png'

interface CardProps {
  src: string
  name: string
  price: string
  btnText: string
  onClick: () => void
  onBuy: () => void
  withCta: boolean
  isDisabled?: boolean
}

const Card = (props: CardProps) => {
  const { src, name, price, btnText, withCta, isDisabled, onClick, onBuy } =
    props

  return (
    <div
      className="flex flex-col rounded-[10px] p-4 lg:p-5 relative"
      style={{ boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px 0px' }}
    >
      <div
        className="relative w-[153px] h-[164px]"
        onClick={onClick}
      >
        <Image
          src={src ?? PlaceholderImage}
          objectFit="cover"
          fill
          alt=""
          className="rounded-[10px]"
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-[10px] px-[2px]">
        <p className="text-2xl text-center font-semibold text-ellipsis overflow-hidden line-clamp-2 mb-1 leading-[29px]">
          {name}
        </p>
        <p className='text-base'>{price}</p>
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
