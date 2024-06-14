import { fetcher } from '@/domains/common/utils/fetcher/fetcher'
import { uuid } from 'uuidv4';

export const getCities = () => {
  return fetcher(`api/v1/regions/cities`, {
    method: 'GET',
    headers: {
      Authorization: btoa(uuid())
    }
  }).then(data => console.log(data))
}
