import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <div className='flex flex-col justify-center items-center min-w-[140px] max-w-[140px] -z-[1]'>
      <div className='relative rounded-full bg-slate-400 w-[80px] h-[80px]'>
        <Image
          src='https://2.bp.blogspot.com/-QsfnOyJ-dEI/VGujVjP0s6I/AAAAAAAAAZ4/xc4tzZQXuYI/s1600/Damez.jpg'
          alt=""
          fill
          className='rounded-full object-center object-cover'
          priority={false}
        />
      </div>
      <div className='w-full mt-4 shadow-md text-sm text-left px-2 py-2 rounded-md'>
        <p className='mb-[2px]'>Damez Nababan.</p>
        <p className='text-xs text-gray-400'>Saxophonist</p>
      </div>
    </div>
  )
}

export default Card