import { cookie } from '@/utils/cookie/cookie'

/**
 * Check if the user is authecticated
 * @returns @boolean isAuth
 */
export const useAuth = () => {
  const user = cookie.get('user')

  return { user }
}
