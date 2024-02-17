'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/domains/common/hooks/auth/use-auth'

const Orders = () => {
  const router = useRouter()

  const { user } = useAuth()

  useEffect(() => {
    if (!user) router.push('/login')
  }, [])

  return <div>Orders</div>
}

export default Orders
