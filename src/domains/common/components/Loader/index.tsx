'use client'

import { Teko } from 'next/font/google'
import Image from 'next/image'
import LogoCirkelPrimary from '@/views/common/assets/logo-cirkel-primary.png'
import { BeatLoader } from 'react-spinners'
import { twMerge } from 'tailwind-merge'

const teko = Teko({ weight: '400', subsets: ['latin'] })

function Loader() {
  return (
    <div className="flex flex-col fixed justify-center items-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <Image src={LogoCirkelPrimary} alt="Logo" />
      <p
        className={twMerge(teko.className, 'text-[20px] text-primary-10 mb-4')}
      >
        Cirkel
      </p>
      <BeatLoader color="#df80f7" />
    </div>
  )
}

export default Loader
