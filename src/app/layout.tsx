'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { twMerge } from 'tailwind-merge'
import type { FC, ReactNode } from 'react'

import useNavigation from '@/domains/common/hooks/navigation/useNavigation'
import BottomNavigation from '@/domains/common/components/Navigation/BottomNavigation'
import Navigation from '@/domains/common/components/Navigation'
import MetaTags from '@/domains/home/components/MetaTag'
import { queryClient } from '@/domains/common/utils/query/client'
import OnlineDetectorWrapper from '@/domains/common/components/ErrorOfflineWrapper'
import { sfPro } from '@/views/common/assets/fonts/fonts'
import '@/views/common/styles/globals.css'

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = (props) => {
  const { children } = props
  const { isHome, isExclude, isExcludeBottom, isMutation, generateTitle } = useNavigation()

  return (
    <html lang="en">
      <head>

        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />

        <meta name="application-name" content="Cirkel" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Cirkel" />
        <meta name="description" content="Let's play together" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#c001ef" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="apple-touch-icon" href="/logo-cirkel-primary.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/logo-cirkel-primary.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo-cirkel-primary.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/logo-cirkel-primary.png" />

        <link rel="icon" type="image/png" sizes="32x32" href="/logo-cirkel-primary.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo-cirkel-primary.png" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

        <meta name="twitter:card" content="Let's play together" />
        <meta name="twitter:url" content="https://cirkel.id" />
        <meta name="twitter:title" content="Cirkel" />
        <meta name="twitter:description" content="Find out many comrades to play with" />
        <meta name="twitter:image" content="https://cirkel.id/logo-cirkel-primary.png" />
        <meta name="twitter:creator" content="@DavidWShadow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cirkel" />
        <meta property="og:description" content="Find out many comrades to play with" />
        <meta property="og:site_name" content="Cirkel" />
        <meta property="og:url" content="https://cirkel.id" />
        <meta property="og:image" content="https://cirkel.id/logo-cirkel-primary.png" />

        {/* apple splash screen images */}
        <link rel='apple-touch-startup-image' href='/logo-cirkel-primary.png' sizes='2048x2732' />
        <link rel='apple-touch-startup-image' href='/logo-cirkel-primary.png' sizes='1668x2224' />
        <link rel='apple-touch-startup-image' href='/logo-cirkel-primary.png' sizes='1536x2048' />
        <link rel='apple-touch-startup-image' href='/logo-cirkel-primary.png' sizes='1125x2436' />
        <link rel='apple-touch-startup-image' href='/logo-cirkel-primary.png' sizes='1242x2208' />
        <link rel='apple-touch-startup-image' href='/logo-cirkel-primary.png' sizes='750x1334' />
        <link rel='apple-touch-startup-image' href='/logo-cirkel-primary.png' sizes='640x1136' />
        <MetaTags />
      </head>
      <QueryClientProvider client={queryClient}>
        <body className={twMerge(sfPro.className)}>
          <Navigation
            isHome={isHome}
            isExclude={isExclude}
            title={!isHome ? generateTitle() : ''}
            isMutation={isMutation}
          />
          <OnlineDetectorWrapper>{children}</OnlineDetectorWrapper>
          <BottomNavigation isExclude={isExcludeBottom} />
        </body>
      </QueryClientProvider>
    </html>
  )
}

export default RootLayout
