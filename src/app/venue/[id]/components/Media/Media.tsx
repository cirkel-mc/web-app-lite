'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { useScreenSize } from '@/domains/common/hooks/screen/use-screen-size'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

import IconBack from '@/domains/common/components/Icons/Back'
import IconShare from '@/domains/common/components/Icons/Share'
import Indicator from './Indicator'

function Media() {
  const router = useRouter()
  const [index, setIndex] = useState(0)

  return (
    <div className="relative left-0 top-0">
      <IconBack
        className="absolute w-8 left-4 top-4 z-10 text-white fill-white"
        onClick={() => router.push('/')}
      />
      <div className="relative w-full h-[240px] overflow-auto">
        <Carousel
          className="h-full"
          infiniteLoop
          autoPlay
          showArrows={false}
          showStatus={false}
        >
          <div className="relative h-[240px]">
            <Image
              src="https://i.pinimg.com/564x/95/9a/67/959a670a281fbe52cfcfe7d50c47122d.jpg"
              alt="studio band"
              fill
              priority={false}
              className="object-cover rounded-b-2xl"
            />
          </div>
          <div>
            <Image
              src="https://i.pinimg.com/564x/95/9a/67/959a670a281fbe52cfcfe7d50c47122d.jpg"
              alt="studio band"
              fill
              priority={false}
              className="object-cover rounded-b-2xl"
            />
          </div>
          <div>
            <Image
              src="https://i.pinimg.com/564x/95/9a/67/959a670a281fbe52cfcfe7d50c47122d.jpg"
              alt="studio band"
              fill
              priority={false}
              className="object-cover rounded-b-2xl"
            />
          </div>
        </Carousel>
      </div>
      {/* <div className='flex gap-3 absolute bottom-4 left-1/2 -translate-x-1/2'>
        <Indicator current={index} index={0} onClick={handleChangeIndex} />
        <Indicator current={index} index={1} onClick={handleChangeIndex} />
        <Indicator current={index} index={2} onClick={handleChangeIndex} />
        <Indicator current={index} index={3} onClick={handleChangeIndex} />
      </div> */}
      <IconShare className="w-6 absolute right-5 top-4 z-10 text-white fill-white" />
    </div>
  )
}

export default Media
