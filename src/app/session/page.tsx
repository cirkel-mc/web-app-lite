'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/domains/common/hooks/auth/use-auth'

const Session = () => {
  const router = useRouter()

  const { user } = useAuth()

  useEffect(() => {
    if (!user) router.push('/login')
  }, [])

  return <div>Session</div>
}

export default Session
