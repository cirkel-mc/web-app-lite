'use client'

import React, { useCallback } from 'react'
import { useScreenSize } from '@/domains/common/hooks/screen/use-screen-size'
import TopNavigation from './TopNavigation'
import { NavigationProps } from './TopNavigation/types'

const Navigation = ({ isHome, isExclude, title }: NavigationProps) => {
  const { width } = useScreenSize()

  const renderHeader = useCallback(
    () => (
      // if (width >= 1024) return <NavigationDesktop />
      // else
      <TopNavigation isHome={isHome} isExclude={isExclude} title={title} />
    ),
    [isExclude, isHome, title],
  )

  return renderHeader()
}

export default Navigation
