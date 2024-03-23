import { Fragment } from 'react'

import HomeFilter from '@/domains/common/components/HomeFilter'
import CardCarousel from '@/domains/common/components/CardCarousel'
import AvatarCarousel from '@/domains/common/components/AvatarCarousel'
import NearMeCarousel from '@/domains/home/components/NearMeCarousel'
import ActiveSession from '@/domains/home/components/ActiveSession'

import { cardCarouselData } from '@/models/common/mock-data/card-carousel-data'
import { avatarCarouselData } from '@/models/common/mock-data/avatar-carousel-data'

function Home() {
  return (
    <div className="px-4 mt-[90px] mb-[90px] max-w-[500px] mx-auto">
      <HomeFilter />
      <div className="lg:max-w-[1024px] pt-6 mx-auto">
        <ActiveSession />
        <NearMeCarousel />
        <AvatarCarousel title="Popular Musician" data={avatarCarouselData} />
        <CardCarousel title="Recomended Studio" data={cardCarouselData} />
      </div>
    </div>
  )
}

export default Home
