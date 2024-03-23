'use client'

import React, { useState, useEffect, useMemo } from 'react'
// import { useAuth } from '@/domains/common/hooks/auth/use-auth'
import CardCarousel from '@/domains/common/components/CardCarousel'
import { cardCarouselData } from '@/models/common/mock-data/card-carousel-data'
import SessionCarousel from '@/domains/common/components/SessionCarousel'
import AvatarCarousel from '@/domains/common/components/AvatarCarousel'
import { avatarCarouselData } from '@/models/common/mock-data/avatar-carousel-data'
import Filter from './Filter'

function NearMeCarousel() {
  // const { user } = useAuth()
  const [activeKey, setActiveKey] = useState('session')

  // if (!user) return ''

  const renderCarousel = useMemo(() => {
    switch (activeKey) {
      case 'session':
        return (
          <div className="mt-4">
            <SessionCarousel />
          </div>
        )
      case 'musician':
        return (
          <div className="-mt-4">
            <AvatarCarousel title="" data={avatarCarouselData} />
          </div>
        )
      default:
        return (
          <div className="-mt-4">
            <CardCarousel title="" data={cardCarouselData} />
          </div>
        )
    }
  }, [activeKey])

  return (
    <div className="mt-8 flex flex-col">
      <p className="text-2xl font-semibold mb-2">Near Me</p>
      <Filter activeKey={activeKey} setActiveKey={setActiveKey} />
      <div>{renderCarousel}</div>
    </div>
  )
}

export default NearMeCarousel
