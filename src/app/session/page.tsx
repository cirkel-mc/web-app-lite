'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/domains/common/hooks/auth/use-auth'

function Session() {
  const router = useRouter()

  const { user } = useAuth()

  useEffect(() => {
    if (!user) router.push('/login')
  }, [router, user])

  return <div>Session</div>
}

export default Session
