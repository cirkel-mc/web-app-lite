import type { BaseResponseType } from '@/models/common/types/BaseResponse'

type RegisterDataType = {
  token_type: string
  access_token: string
  refresh_token: string
  expires_in: string
}

export type RegisterResponseType = BaseResponseType<RegisterDataType>
