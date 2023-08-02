import { Fragment } from 'react'

import HomeFilter from '@/components/Home/HomeFilter'
import CardCarousel from '@/components/Home/CardCarousel'
import AvatarCarousel from '@/components/Home/AvatarCarousel'
import TopNavigation from '@/components/Navigation/TopNavigation'
import Footer from '@/components/Footer'

import { cardCarouselData } from '@/model/mock-data/card-carousel-data'
import { avatarCarouselData } from '@/model/mock-data/avatar-carousel-data'

const Home = () => {
  return (
    <Fragment>
      <div className='px-4 mt-[100px]'>
        <TopNavigation />
        <HomeFilter />
        <CardCarousel title='Near Me' data={cardCarouselData} />
        <AvatarCarousel title='Popular Musician' data={avatarCarouselData} />
        <CardCarousel title='Recomended Studio' data={cardCarouselData} />
      </div>
      <Footer />
    </Fragment>
  )
}

export default Home