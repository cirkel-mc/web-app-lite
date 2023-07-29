"use client"

import React, { useEffect } from 'react'
import Card from './Card'
import { useRouter } from 'next/navigation'

const AvatarCarousel = () => {
  const router = useRouter()

  const handleRedirect = () => {
    router.push('/venue/1')
  }

  return (
    <div className='mt-8 pr-4'>
      <p className='text-base font-medium mb-2'>Near Me</p>
      <div className='flex gap-2 flex-nowrap overflow-auto pb-2' style={{ width: 'calc(100% + 20px)' }}>
        <Card key={1} src='https://www.wearemania.net/ngalam/wp-content/uploads/2020/11/20201130_Daftar-Alamat-Studio-Musik-di-Malang-Raya.jpg' title='studio Arema' price='Rp 150.000' onClick={handleRedirect} />
        <Card key={2} src='https://www.wearemania.net/ngalam/wp-content/uploads/2020/11/20201130_Daftar-Alamat-Studio-Musik-di-Malang-Raya.jpg' title='studio Arema' price='Rp 150.000' onClick={handleRedirect} />
        <Card key={3} src='https://www.wearemania.net/ngalam/wp-content/uploads/2020/11/20201130_Daftar-Alamat-Studio-Musik-di-Malang-Raya.jpg' title='studio Arema' price='Rp 150.000' onClick={handleRedirect} />
        <Card key={4} src='https://www.wearemania.net/ngalam/wp-content/uploads/2020/11/20201130_Daftar-Alamat-Studio-Musik-di-Malang-Raya.jpg' title='studio Arema' price='Rp 150.000' onClick={handleRedirect} />
        <Card key={5} src='https://www.wearemania.net/ngalam/wp-content/uploads/2020/11/20201130_Daftar-Alamat-Studio-Musik-di-Malang-Raya.jpg' title='studio Arema' price='Rp 150.000' onClick={handleRedirect} />
        <Card key={6} src='https://www.wearemania.net/ngalam/wp-content/uploads/2020/11/20201130_Daftar-Alamat-Studio-Musik-di-Malang-Raya.jpg' title='studio Arema' price='Rp 150.000' onClick={handleRedirect} />
        <Card key={7} src='https://www.wearemania.net/ngalam/wp-content/uploads/2020/11/20201130_Daftar-Alamat-Studio-Musik-di-Malang-Raya.jpg' title='studio Arema' price='Rp 150.000' onClick={handleRedirect} />
      </div>
    </div>
  )
}

export default AvatarCarousel