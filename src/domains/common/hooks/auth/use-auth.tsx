'use client'

import { useState, useEffect, useTransition } from 'react'

/**
 * Check if the user is authecticated
 * @returns @boolean isAuth
 */
export const useAuth = () => {
  const [user, setUser] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (Boolean(window.localStorage.getItem('user'))) {
        startTransition(() => {
          setIsLoggedIn(true);
          setUser(window.localStorage.getItem('user') ?? '');
        })
      }
    }
  }, [])

  return { user, isLoggedIn, isPending }
}
