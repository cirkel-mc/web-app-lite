'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { twMerge } from 'tailwind-merge'
import type { FC, ReactNode } from 'react'

import useNavigation from '@/domains/common/hooks/navigation/useNavigation'
import BottomNavigation from '@/domains/common/components/Navigation/BottomNavigation'
import Navigation from '@/domains/common/components/Navigation'
import MetaTags from '@/domains/home/components/MetaTag'
import { queryClient } from '@/domains/common/utils/query/client'
import { sfPro } from '@/views/common/assets/fonts/fonts'
import '@/views/common/styles/globals.css'

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = (props) => {
  const { children } = props
  const { isHome, isExclude, isExcludeBottom, generateTitle } = useNavigation()

  return (
    <html lang="en">
      <head>
        <MetaTags />
      </head>
      <QueryClientProvider client={queryClient}>
        <body className={twMerge(sfPro.className)}>
          <Navigation
            isHome={isHome}
            isExclude={isExclude}
            title={!isHome ? generateTitle() : ''}
          />
          {children}
          <BottomNavigation isExclude={isExcludeBottom} />
        </body>
      </QueryClientProvider>
    </html>
  )
}

export default RootLayout
