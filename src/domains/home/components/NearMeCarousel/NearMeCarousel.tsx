'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { useAuth } from '@/domains/common/hooks/auth/use-auth'
import CardCarousel from '@/views/common/components/CardCarousel'
import { cardCarouselData } from '@/models/common/mock-data/card-carousel-data'
import SessionCarousel from '@/views/common/components/SessionCarousel'
import Filter from './Filter'
import AvatarCarousel from '@/views/common/components/AvatarCarousel'
import { avatarCarouselData } from '@/models/common/mock-data/avatar-carousel-data'

const NearMeCarousel = () => {
  const { user } = useAuth()
  const [isMounted, setIsMounted] = useState(false)
  const [activeKey, setActiveKey] = useState('session')

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  if (!user) return ''

  const renderCarousel = () => {
    switch (activeKey) {
      case 'session':
        return (
          <div className="mt-4">
            <SessionCarousel />
          </div>
        )
      case 'musician':
        return (
          <div className="-mt-5">
            <AvatarCarousel title="" data={avatarCarouselData} />
          </div>
        )
      default:
        return (
          <div className="-mt-5">
            <CardCarousel title="" data={cardCarouselData} />
          </div>
        )
    }
  }

  return (
    <div className="mt-5 flex flex-col">
      <p className="text-2xl font-semibold mb-2">Near Me</p>
      <Filter activeKey={activeKey} setActiveKey={setActiveKey} />
      <div>{renderCarousel()}</div>
    </div>
  )
}

export default NearMeCarousel
