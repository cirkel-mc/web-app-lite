import { cookie } from '@/domains/common/utils/cookie/cookie'

/**
 * Check if the user is authecticated
 * @returns @boolean isAuth
 */
export const useAuth = () => {
  const user = cookie.get('user')

  return { user }
}
