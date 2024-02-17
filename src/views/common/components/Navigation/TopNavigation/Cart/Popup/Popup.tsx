import React, { Fragment, useState, useEffect, useMemo } from 'react'
import Image from 'next/image'

import IconClose from '@/views/common/components/Icons/Close'
import { emitter } from '@/utils/event/emitter'
import { ca } from 'date-fns/locale'

interface CardPopupProps {
  onClose: () => void
  onSubmit: () => void
}

const Popup = ({ onClose, onSubmit }: CardPopupProps) => {
  const [cart, setCart] = useState<any>([])

  const renderContent = useMemo(() => {
    if (cart.length === 0)
      return (
        <p className="text-gray-300 text-base my-6 text-center">
          Cart is empty
        </p>
      )

    return (
      <div>
        <div>
          <div className="h-[100px] overflow-auto">
            {cart.map((item: any, index: number) => (
              <div
                key={index}
                className="flex items-center gap-2 justify-center mt-6"
              >
                <div className="relative w-1/3 h-[100px]">
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    className="rounded"
                    priority={false}
                    // style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="w-2/3 h-[100px] rounded-lg border-2 border-slate-200 flex flex-col items-center justify-center">
                  <p className="text-sm mb-1 font-bold">{item.name}</p>
                  <p className="text-sm mb-1 text-slate-500">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {cart.length > 0 && (
          <div>
            <div className="mb-[65px]">
              <div className="flex w-full justify-between mb-1">
                <p className="text-sm">1. Rent (1 hour)</p>
                <p className="text-sm">Rp. 150.000</p>
              </div>
              <div className="flex w-full justify-between">
                <p className="text-sm">2. Admin Fee</p>
                <p className="text-sm">Rp. 20.000</p>
              </div>
              <div className="flex mt-3 w-full justify-between pl-3">
                <p className="font-bold">Total</p>
                <p className="font-bold">Rp. 170.000</p>
              </div>
            </div>
            <div className="fixed bottom-0 left-0 shadow-2xl w-full px-4 py-4">
              <div className="max-w-[500px] mx-auto flex items-center justify-between">
                <p>Rp. 170.000/hour</p>
                <button
                  className="px-2 py-2 rounded-lg bg-primary-50 text-white"
                  onClick={onSubmit}
                >
                  Book Now!
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }, [cart, onSubmit])

  useEffect(() => {
    emitter.on('@buy-from-card', (payload) => {
      console.log(payload)
      const arr = cart
      arr.push({
        image: payload.src,
        name: payload.title,
        price: payload.price,
      })
      setCart(arr)
    })

    return () => {
      emitter.off('@buy-from-card', (payload) => {
        console.log(payload)
        const arr = cart
        arr.push({
          image: payload.src,
          name: payload.title,
          price: payload.price,
        })
        setCart(arr)
      })
    }
  }, [cart])

  return (
    <Fragment>
      <div className="fixed left-0 top-0 z-10 bg-black opacity-50 w-full h-full duration-300 ease-in-out" />
      <div className="flex text-black flex-col justify-between fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-6 w-4/5 rounded-lg lg:max-w-[700px]">
        <IconClose className="absolute cursor-pointer" onClick={onClose} />
        <p className="text-center font-bold text-lg">Your Cart</p>
        {renderContent}
      </div>
    </Fragment>
  )
}

export default Popup
