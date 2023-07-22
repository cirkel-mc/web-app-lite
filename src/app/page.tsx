import { Fragment } from 'react'
import HomeFilter from '@/module/Home/HomeFilter'
import CardCarousel from '@/module/Home/CardCarousel'
import AvatarCarousel from '@/module/Home/AvatarCarousel'

const Home = () => {
  return (
    <Fragment>
      <HomeFilter />
      <CardCarousel />
      <AvatarCarousel />
    </Fragment>
  )
}

export default Home