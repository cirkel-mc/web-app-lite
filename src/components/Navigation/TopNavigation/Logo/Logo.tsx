"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const router = useRouter()

  return (
    <p className="text-3xl text-white" onClick={() => router.push('/')}>Cirkel</p>
  )
}

export default Logo