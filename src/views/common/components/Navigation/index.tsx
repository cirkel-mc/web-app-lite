'use client'

import React, { useCallback } from 'react'

import { useScreenSize } from '@/domains/common/hooks/screen/use-screen-size'
import NavigationDesktop from './NavigationDesktop'
import TopNavigation from './TopNavigation'

const Navigation = () => {
  const { width } = useScreenSize()

  const renderHeader = useCallback(() => {
    if (width >= 1024) return <NavigationDesktop />
    else return <TopNavigation />
  }, [width])

  return renderHeader()
}

export default Navigation
