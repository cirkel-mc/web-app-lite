"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const router = useRouter()

  return (
    <p className="text-3xl text-sky-50" onClick={() => router.push('/')}>Comrades</p>
  )
}

export default Logo