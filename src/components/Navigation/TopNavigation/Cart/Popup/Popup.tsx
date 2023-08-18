import React, { Fragment } from 'react'
import Image from 'next/image'

import IconClose from '@/components/Icons/Close'

const Popup = ({ onClose, onSubmit }: any) => {
  return (
    <Fragment>
      <div className='fixed left-0 top-0 z-10 bg-black opacity-50 w-full h-full' />
      <div className='flex flex-col justify-between fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-6 w-4/5 h-3/5 rounded-lg'>
        <IconClose className='absolute' onClick={onClose} />
        <div>
          <p className='text-center font-bold text-lg'>Your Cart</p>
          <div className='flex items-center gap-2 justify-center mt-6'>
            <div className='relative w-1/3 h-[100px]'>
              <Image
                src='https://andreasagung.com/wp-content/uploads/2017/10/Studio-Band-2.jpg.webp'
                alt='dummy studio'
                fill
                className='rounded'
                priority={false}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className='w-2/3 h-[100px] rounded-lg border-2 border-slate-200 flex flex-col items-center justify-center'>
              <p className='text-sm mb-1 font-bold'>Studio Arkana</p>
              <p className='text-sm mb-1 text-slate-500'>Rp 150.000</p>
              <p className='text-sm mb-1'>Jakarta Selatan</p>
            </div>
          </div>
        </div>
        <div>
          <div className='mb-[65px]'>
            <div className='flex w-full justify-between mb-1'>
              <p className='text-sm'>1. Rent (1 hour)</p>
              <p className='text-sm'>Rp. 150.000</p>
            </div>
            <div className='flex w-full justify-between'>
              <p className='text-sm'>2. Admin Fee</p>
              <p className='text-sm'>Rp. 20.000</p>
            </div>
            <div className='flex mt-3 w-full justify-between pl-3'>
              <p className='font-bold'>Total</p>
              <p className='font-bold'>Rp. 170.000</p>
            </div>
          </div>
          <div className='fixed bottom-0 left-0 shadow-2xl w-full px-4 py-4'>
            <div className='max-w-[500px] mx-auto flex items-center justify-between'>
              <p>Rp. 170.000/hour</p>
              <button className='px-2 py-2 rounded-lg bg-sky-600 text-white' onClick={onSubmit}>Book Now!</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Popup