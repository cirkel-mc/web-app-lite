import { BasePayload } from "@/models/common/types/BasePayload"

export interface RegisterFormPayload extends BasePayload {
  email: string
  username: string
  password: string
  city: number
}
