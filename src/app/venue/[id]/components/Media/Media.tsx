"use client"

import { useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import useScreenSize from '@/hooks/useScreenSize'

import IconBack from '@/components/Icons/Back'
import IconShare from '@/components/Icons/Share'
import Indicator from './Indicator'

const Media = () => {
  const router = useRouter()
  const [index, setIndex] = useState(0)
  const { width } = useScreenSize()
  const ref = useRef(null)

  const handleChangeIndex = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = Number(e.currentTarget.getAttribute("data-index"))
    setIndex(x)
  }

  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 30

  const onTouchStart = (e: any) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    console.log(ref.current)
    if (isLeftSwipe) {
      // @ts-ignore 
      ref.current.style.left = '0';
      // @ts-ignore 
      ref.current.style.transform = `translate3D(-100%, 0, 0)`;
    } else if(isRightSwipe) {
       // @ts-ignore 
       ref.current.style.left = '0';
      // @ts-ignore 
      ref.current.style.transform = `translate3D(100%, 0, 0)`;
    }
  }

  return (
    <div className='relative left-0 top-0'>
      <IconBack className='absolute w-8 left-4 top-4 z-10 text-white fill-white' onClick={() => router.push('/')} />
      <div className='relative w-full h-[240px] overflow-auto'>
        <div ref={ref} className={`w-[300%] h-full flex flex-nowrap gap-1 pl-[2px] transition-all ease-out duration-300`} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
          <div className='w-full h-full relative' >
            <Image
              src='https://i.pinimg.com/564x/95/9a/67/959a670a281fbe52cfcfe7d50c47122d.jpg'
              alt='studio band'
              fill
              priority={false}
              className='object-cover rounded-b-2xl'
            />
          </div>
          <div className='w-full h-full relative' >
            <Image
              src='https://i.pinimg.com/564x/95/9a/67/959a670a281fbe52cfcfe7d50c47122d.jpg'
              alt='studio band'
              fill
              priority={false}
              className='object-cover rounded-b-2xl'
            />
          </div>
          <div className='w-full h-full relative' >
            <Image
              src='https://i.pinimg.com/564x/95/9a/67/959a670a281fbe52cfcfe7d50c47122d.jpg'
              alt='studio band'
              fill
              priority={false}
              className='object-cover rounded-b-2xl'
            />
          </div>
        </div>

      </div>
      <div className='flex gap-3 absolute bottom-4 left-1/2 -translate-x-1/2'>
        <Indicator current={index} index={0} onClick={handleChangeIndex} />
        <Indicator current={index} index={1} onClick={handleChangeIndex} />
        <Indicator current={index} index={2} onClick={handleChangeIndex} />
        <Indicator current={index} index={3} onClick={handleChangeIndex} />
      </div>
      <IconShare className='w-6 absolute right-5 top-4 z-10 text-white fill-white' />
    </div>
  )
}

export default Media