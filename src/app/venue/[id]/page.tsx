'use client'

import React from 'react'

import Title from './components/Title'
import Media from './components/Media'
import DateRange from './components/DateRange'
import AvailableTime from './components/AvailableTime'
import Description from './components/Description/Description'
import PurchaseBox from './components/PurchaseBox'
// import Loading from './loading';

function VenueDetail() {
  return (
    <>
      <Media />
      <div className="px-4 pb-[80px]">
        <Title title="Studio Rawamangun" />
        <DateRange />
        <AvailableTime />
        <Description />
      </div>
      <PurchaseBox />
    </>
  )
}

export default VenueDetail
