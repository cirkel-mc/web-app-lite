import type { ValidationErrorResponseType } from './ErrorResponse'

export type BaseResponseType<T> = {
  status: boolean
  code: number
  error_message: string
  data: T
  error_validations: ValidationErrorResponseType
}
