'use client'

import '@/views/common/styles/normalize.css'
import '@/views/common/styles/globals.css'

import type { FC, ReactNode } from 'react'
import localFont from 'next/font/local'
import { QueryClient, QueryClientProvider } from 'react-query'

const sfPro = localFont({
  display: 'swap',
  src: [
    {
      path: './fonts/SF-Pro/SF-Pro-Text-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/SF-Pro/SF-Pro-Text-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/SF-Pro/SF-Pro-Text-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/SF-Pro/SF-Pro-Text-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/SF-Pro/SF-Pro-Text-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/SF-Pro/SF-Pro-Text-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/SF-Pro/SF-Pro-Text-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/SF-Pro/SF-Pro-Text-SemiboldItalic.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: './fonts/SF-Pro/SF-Pro-Text-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/SF-Pro/SF-Pro-Text-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/SF-Pro/SF-Pro-Text-Heavy.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/SF-Pro/SF-Pro-Text-HeavyItalic.otf',
      weight: '800',
      style: 'italic',
    },
  ],
})

interface RootLayoutProps {
  children: ReactNode
}

const queryClient = new QueryClient()

const RootLayout: FC<RootLayoutProps> = (props) => {
  const { children } = props
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={sfPro.className}>{children}</body>
      </QueryClientProvider>
    </html>
  )
}

export default RootLayout
