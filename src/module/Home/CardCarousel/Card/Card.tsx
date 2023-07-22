import React from 'react'
import Image from 'next/image'

const Card = () => {
  return (
    <div className='min-w-[120px] max-w-[120px] rounded-t-xl rounded-b-sm shadow-md -z-[1]'>
      <div className='w-full h-[100px] relative'>
        <Image 
          src='https://www.wearemania.net/ngalam/wp-content/uploads/2020/11/20201130_Daftar-Alamat-Studio-Musik-di-Malang-Raya.jpg' 
          alt="" 
          fill
          className='rounded-t-xl'
          priority={false}
        />
      </div>
      <div className='px-2 py-2'>
        <p className='text-xs text-ellipsis mb-1'>Studio Aremania</p>
        <p className='text-sm font-medium'>Rp 150.000</p>
      </div>
    </div>
  )
}

export default Card