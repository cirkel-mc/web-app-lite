'use client'

import type { FC, ReactNode } from 'react'
import { sfPro } from '@/views/common/assets/fonts/fonts'
import { QueryClient, QueryClientProvider } from 'react-query'
import Navigation from '@/domains/common/components/Navigation'
import BottomNavigation from '@/domains/common/components/Navigation/BottomNavigation'
// import '@/views/common/styles/normalize.css'
import '@/views/common/styles/globals.css'
import useNavigation from '@/domains/common/hooks/navigation/useNavigation'
import { twMerge } from 'tailwind-merge'
import MetaTags from '@/domains/home/components/MetaTag'

interface RootLayoutProps {
  children: ReactNode
}

const queryClient = new QueryClient()

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
