'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LogoCirkel from '@/views/common/assets/Union.png'

const Logo = () => {
  return (
    <Link href="/">
      <Image src={LogoCirkel} alt="" height={40} />
    </Link>
  )
}

export default Logo
