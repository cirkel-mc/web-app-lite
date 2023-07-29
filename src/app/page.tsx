import { Fragment } from 'react'

import HomeFilter from '@/components/Home/HomeFilter'
import CardCarousel from '@/components/Home/CardCarousel'
import AvatarCarousel from '@/components/Home/AvatarCarousel'
import TopNavigation from '@/components/Navigation/TopNavigation'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <Fragment>
      <div className='px-4 mt-[100px]'>
        <TopNavigation />
        <HomeFilter />
        <CardCarousel />
        <AvatarCarousel />
      </div>
      <Footer />
    </Fragment>
  )
}

export default Home