'use client'

import { useState, useEffect, useTransition } from 'react'
import { cookie } from '@/domains/common/utils/cookie/cookie'

/**
 * Check if the user is authecticated
 * @returns @boolean isAuth
 */
export const useAuth = () => {
  const user = cookie.get('user')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    if (Boolean(user)) {
      startTransition(() => {
        setIsLoggedIn(true)
      })
    }
  }, [])

  return { user, isLoggedIn, isPending }
}
