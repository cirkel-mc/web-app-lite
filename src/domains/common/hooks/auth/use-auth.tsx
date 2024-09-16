import { cookie } from '../../utils/cookie/cookie'

/**
 * Check if the user is authecticated
 * @returns @boolean isAuth
 */
export const useAuth = () => {

  return { user: cookie.get('user') }
}
