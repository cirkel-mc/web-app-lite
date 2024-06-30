'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

import IconShare from '@/domains/common/components/Icons/Share'

function Media() {
  const router = useRouter()

  return (
    <div className="relative left-0 top-0">
      <div className="relative w-full h-[300px] overflow-auto">
        <Carousel
          className="h-full"
          infiniteLoop
          autoPlay
          showArrows={false}
          showStatus={false}
          showThumbs={false}
        >
          <div className="relative h-[300px]">
            <Image
              src="https://i.pinimg.com/564x/95/9a/67/959a670a281fbe52cfcfe7d50c47122d.jpg"
              alt="studio band"
              fill
              priority={false}
              className="object-cover rounded"
            />
          </div>
          <div>
            <Image
              src="https://i.pinimg.com/564x/95/9a/67/959a670a281fbe52cfcfe7d50c47122d.jpg"
              alt="studio band"
              fill
              priority={false}
              className="object-cover rounded"
            />
          </div>
          <div>
            <Image
              src="https://i.pinimg.com/564x/95/9a/67/959a670a281fbe52cfcfe7d50c47122d.jpg"
              alt="studio band"
              fill
              priority={false}
              className="object-cover rounded"
            />
          </div>
        </Carousel>
      </div>
      <IconShare className="w-6 absolute right-5 top-2 z-10 text-white fill-white" />
    </div>
  )
}

export default Media
