import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CirkelLogo from '@/views/common/assets/Cirkel-New-Logo.png'

function Logo() {
  return (
    <Link href="/">
      <Image src={CirkelLogo} alt="" height={48} />
    </Link>
  )
}

export default Logo
