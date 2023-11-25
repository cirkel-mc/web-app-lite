import { cookie } from "@/utils/cookie";

/**
 * Check if the user is authecticated
 * @returns @boolean isAuth
 */
export const useAuth = () => {
  const user = cookie.get('user')
  if (!user) return { isAuth: false }

  return { isAuth: true }
}