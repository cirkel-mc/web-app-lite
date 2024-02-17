import type { Metadata } from 'next'
import { Fragment } from 'react'

import HomeFilter from '@/views/common/components/HomeFilter'
import CardCarousel from '@/views/common/components/CardCarousel'
import AvatarCarousel from '@/views/common/components/AvatarCarousel'
import Navigation from '@/views/common/components/Navigation'
import NearMeCarousel from '@/domains/home/components/NearMeCarousel'
import ActiveSession from '@/domains/home/components/ActiveSession'
import BottomNavigation from '@/views/common/components/Navigation/BottomNavigation'

import { cardCarouselData } from '@/models/common/mock-data/card-carousel-data'
import { avatarCarouselData } from '@/models/common/mock-data/avatar-carousel-data'

export const metadata: Metadata = {
  title: 'Cirkel',
  description: 'Play to beyond',
}

const Home = () => {
  return (
    <Fragment>
      <div className="px-4 lg:px-0 mt-[90px] mb-[90px]">
        <Navigation />
        <HomeFilter />
        <div className="lg:max-w-[1024px] pt-6 mx-auto">
          <ActiveSession />
          <NearMeCarousel />
          <AvatarCarousel title="Popular Musician" data={avatarCarouselData} />
          <CardCarousel title="Recomended Studio" data={cardCarouselData} />
        </div>
      </div>
      <BottomNavigation />
    </Fragment>
  )
}

export default Home
