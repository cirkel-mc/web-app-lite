import '@/styles/normalize.css'
import '@/styles/globals.css'

import type { FC, ReactNode } from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

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

export const metadata: Metadata = {
  title: 'Cirkel',
  description: 'Play to beyond',
}

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = (props) => {
  const { children } = props
  return (
    <html lang="en">
      <body className={sfPro.className}>
        {/* <main className='mr-auto ml-auto max-w-[500px] md:max-w-[768px] lg:max-w-[1024px] 2xl:max-w-[1440px]'> */}
          {children}
        {/* </main> */}
      </body>
    </html>
  )
}

export default RootLayout
