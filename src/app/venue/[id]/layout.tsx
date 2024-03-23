import '@/views/common/styles/normalize.css'
import '@/views/common/styles/globals.css'

import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { FC, ReactNode, Fragment } from 'react'
import Footer from '@/domains/common/components/Footer'

const inter = Inter({ subsets: ['latin'] })

interface VenueDetailLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Comrades',
  description: 'Generated by create next app',
}

const VenueDetailLayout: FC<VenueDetailLayoutProps> = (props) => {
  const { children } = props

  return <>{children}</>
}

export default VenueDetailLayout
