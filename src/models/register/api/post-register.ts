import { fetcher } from '@/domains/common/utils/fetcher/fetcher'
import type { RegisterPayloadType } from '../types/register-payload'


export const postRegister = (
  payload: RegisterPayloadType,
) => {
  return fetcher(`/api/v1/register`, {
    method: 'POST',
    body: payload,
    requestType: 'Basic',
    
  })
}
