import { axiosInstance } from '@/utils/axios/instance'

export function postRegister() {
  return axiosInstance.post('/auth/v1/register')
}
