'use client'

import { useState } from 'react'


import Ratings from './Rating'
import Location from './Location'
import Facility from './Facility'

const About = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="pb-[90px]">
      <Location
        lat="-6.2169589439259"
        long="106.34977590746"
        location="Jl. Gor Pakansari, Nanggewer Mekar, Kec. Cibinong, Kabupaten Bogor, Jawa Barat 16912"
        open={open}
        onClickMaps={() => setOpen(true)}
        onClickLightbox={() => setOpen(false)}
      />
      <Facility />
      <Ratings />
    </div>
  )
}

export default About
