import { cookie } from '@/domains/common/utils/cookie/cookie'
import { useRouter } from 'next/navigation';

export const useLogout = () => {
  const router = useRouter()

  const logout = () => {
    cookie.remove('user');
    router.push('/login');
  }

  return { logout }
}