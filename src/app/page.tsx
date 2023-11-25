
'use client'

import { Fragment } from 'react'

import useScreenSize from '@/hooks/use-screen-size'
import HomeFilter from '@/components/HomeFilter'
import CardCarousel from '@/components/CardCarousel'
import AvatarCarousel from '@/components/AvatarCarousel'
import TopNavigation from '@/components/Navigation/TopNavigation'
import Footer from '@/components/Footer'
import NavigationDesktop from '@/components/NavigationDesktop'

import { cardCarouselData } from '@/model/mock-data/card-carousel-data'
import { avatarCarouselData } from '@/model/mock-data/avatar-carousel-data'

const Home = () => {
  const { width } = useScreenSize()

  const renderHeader = () => {
    if (width > 0 && width >= 1024) return <NavigationDesktop />
    else  return <TopNavigation />
  }

  return (
    <Fragment>
      <div className='px-4 lg:px-0 mt-[100px] mb-[120px]'>
        {renderHeader()}
        <HomeFilter />
          <div className='lg:max-w-[1024px] mx-auto'>
            <CardCarousel title='Near Me' data={cardCarouselData} />
            <AvatarCarousel title='Popular Musician' data={avatarCarouselData} />
            <CardCarousel title='Recomended Studio' data={cardCarouselData} />
          </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Home
