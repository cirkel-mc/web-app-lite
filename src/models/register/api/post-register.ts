import { fetcher } from '@/domains/common/utils/fetcher/fetcher'
import type { RegisterPayloadType } from '../types/register-payload'

export const postRegister = (
  payload: RegisterPayloadType,
) => {

  console.log(JSON.stringify(payload))
  return fetcher(`/api/v1/register`, {
    method: 'POST',
    redirect: 'follow',
    body: JSON.stringify({
      username: payload.username,
      password: payload.password,
      city_id: payload.city_id,
      email: payload.email,
    }),
    requestType: 'Basic',
    lat: payload.lat,
    long: payload.long
  })
}
